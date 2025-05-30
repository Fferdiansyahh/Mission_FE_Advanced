// src/store/redux/profileSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updateProfile } from "../../firebase/profile"; // Anda perlu membuat fungsi ini

const initialState = {
  userData: null,
  loading: false,
  error: null,
  successMessage: null,
};

export const fetchUserProfile = createAsyncThunk(
  "profile/fetchUserProfile",
  async (userId, { rejectWithValue }) => {
    try {
      const profileData = await getProfile(userId);
      return profileData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateProfileData = createAsyncThunk(
  "profile/updateProfileData",
  async ({ userId, profileData }, { rejectWithValue }) => {
    try {
      await updateProfile(userId, profileData);
      return profileData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearProfileMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update Profile
      .addCase(updateProfileData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(updateProfileData.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
        state.successMessage = "Profil berhasil diperbarui";
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearProfileMessages } = profileSlice.actions;
export default profileSlice.reducer;
