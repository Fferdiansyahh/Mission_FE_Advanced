// src/store/redux/dataReducer.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, addData, editData, deleteData } from "../../services/api"; // Sesuaikan path

// Initial State
const initialState = {
  items: [], // Array untuk menyimpan data API
  isLoading: false, // Status loading untuk operasi API
  error: null, // Pesan error jika ada
  successMessage: null, // Pesan sukses untuk operasi tertentu
};

// **Async Thunks**
// Thunk untuk mengambil data (GET)
export const fetchItems = createAsyncThunk(
  "data/fetchItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getData();
      return response.data; // Asumsi response.data adalah array item
    } catch (error) {
      return rejectWithValue(error.message); // Tangani error
    }
  }
);

// Thunk untuk menambahkan data (ADD)
export const addNewItem = createAsyncThunk(
  "data/addNewItem",
  async (newItemData, { rejectWithValue }) => {
    try {
      const response = await addData(newItemData);
      return response.data; // Asumsi response.data adalah item yang baru ditambahkan
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk untuk mengedit data (EDIT)
export const updateExistingItem = createAsyncThunk(
  "data/updateExistingItem",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await editData(id, updatedData);
      return response.data; // Asumsi response.data adalah item yang diperbarui
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk untuk menghapus data (DELETE)
export const removeExistingItem = createAsyncThunk(
  "data/removeExistingItem",
  async (id, { rejectWithValue }) => {
    try {
      await deleteData(id);
      return id; // Mengembalikan ID dari item yang dihapus
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Membuat Slice untuk Data
const dataSlice = createSlice({
  name: "data", // Nama slice ini akan menjadi prefix untuk action types
  initialState,
  reducers: {
    // Reducer non-async, jika diperlukan
    clearMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
  // **Extra Reducers** untuk menangani lifecycle dari async thunks
  extraReducers: (builder) => {
    builder
      // Fetch Items (GET)
      .addCase(fetchItems.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload; // Simpan data yang didapat dari API
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Add New Item (ADD)
      .addCase(addNewItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(addNewItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload); // Tambahkan item baru ke state
        state.successMessage = "Data berhasil ditambahkan!";
      })
      .addCase(addNewItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Update Existing Item (EDIT)
      .addCase(updateExistingItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(updateExistingItem.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload; // Perbarui item di state
        }
        state.successMessage = "Data berhasil diperbarui!";
      })
      .addCase(updateExistingItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Remove Existing Item (DELETE)
      .addCase(removeExistingItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(removeExistingItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((item) => item.id !== action.payload); // Hapus item dari state
        state.successMessage = "Data berhasil dihapus!";
      })
      .addCase(removeExistingItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Export actions non-async
export const { clearMessages } = dataSlice.actions;

// Export Reducer
export default dataSlice.reducer;

// Selector untuk mengambil data dari state
export const selectItems = (state) => state.data.items;
export const selectIsLoading = (state) => state.data.isLoading;
export const selectError = (state) => state.data.error;
export const selectSuccessMessage = (state) => state.data.successMessage;
