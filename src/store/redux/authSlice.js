// src/store/redux/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser } from "../../firebase/registerUser";
import { loginUser } from "../../firebase/loginUser";
import { auth } from "../../firebase/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

const initialState = {
  user: null, // Objek user dari Firebase (uid, email, dll.)
  isLoading: true, // Mengindikasikan apakah sedang memuat (misalnya saat onAuthStateChanged)
  error: null, // Pesan error jika ada
  successMessage: null, // Pesan sukses
  isAuthReady: false, // Mengindikasikan apakah onAuthStateChanged sudah selesai dan status auth diketahui
};

// Kita akan menghapus `ignoreNextLogin` karena akan ditangani secara alami
// oleh `onAuthStateChanged` yang selalu menjadi sumber kebenaran.
// let ignoreNextLogin = false; // <= DIHAPUS

// Thunk untuk mendaftar pengguna
export const registerUserThunk = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      auth._isRegistering = true;
      return await registerUser(
        userData.name,
        userData.email,
        userData.password,
        userData.phone
      );
    } catch (error) {
      return rejectWithValue(error.message);
    } finally {
      auth._isRegistering = false;
    }
  }
);

// Thunk untuk login pengguna
export const loginUserThunk = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await loginUser(email, password);
      console.log("Login berhasil (Thunk). UID:", userCredential.user.uid);
      // Penting: Di sini kita TIDAK langsung mengatur state.user.
      // `onAuthStateChanged` listener yang akan mendeteksi login ini
      // dan memperbarui state.user secara otomatis.
      return userCredential.user; // Ini hanya sebagai payload sukses, tidak langsung update state `user` di `fulfilled`
    } catch (error) {
      console.error("Error saat login (Thunk):", error.message);
      // Tangani error Firebase secara lebih spesifik jika diperlukan
      let errorMessage = "Login gagal. Silakan coba lagi.";
      if (error.code === "auth/wrong-password") {
        errorMessage = "Email atau kata sandi salah.";
      } else if (error.code === "auth/user-not-found") {
        errorMessage = "Pengguna tidak ditemukan.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Format email tidak valid.";
      }
      return rejectWithValue(errorMessage);
    }
  }
);

// Thunk untuk logout pengguna
export const logoutUserThunk = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      console.log("Logout berhasil (Thunk).");
      // Penting: Sama seperti login, `onAuthStateChanged` akan mendeteksi logout
      // dan memperbarui state.user menjadi null.
      return null;
    } catch (error) {
      console.error("Error saat logout (Thunk):", error.message);
      return rejectWithValue(`Logout gagal: ${error.message}`);
    }
  }
);

// Thunk untuk menginisialisasi listener status otentikasi Firebase
let authListenerActive = false;
export const initializeAuthListener = () => (dispatch) => {
  if (authListenerActive) return;
  authListenerActive = true;

  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Abaikan jika sedang proses registrasi
      if (auth._isRegistering) return;

      dispatch(authSlice.actions.setUser(user));
      resolve();
    });

    // Simpan unsubscribe function
    auth._authStateListener = unsubscribe;
  });
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
      state.isAuthReady = true; // Pindahkan setAuthReady ke sini
    },
    clearAuthError: (state) => {
      state.error = null;
    },
    clearAuthSuccessMessage: (state) => {
      state.successMessage = null;
    },
    // Hapus setAuthReady karena sudah digabung dengan setUser
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Login - Hanya handle loading state, biarkan onAuthStateChanged yang update user
      .addCase(loginUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state) => {
        state.isLoading = false;
        // Tidak perlu update user di sini
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Logout - Hanya handle loading state
      .addCase(logoutUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUserThunk.fulfilled, (state) => {
        state.isLoading = false;
        // Tidak perlu update user di sini
      })
      .addCase(logoutUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // Hapus initializeAuthListener dari extraReducers karena tidak perlu
  },
});

export const { clearAuthError, clearAuthSuccessMessage } = authSlice.actions; // Ganti nama action clear

// Selector untuk mengambil data dari state otentikasi
export const selectUser = (state) => state.auth.user;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectAuthError = (state) => state.auth.error; // Mengganti nama selector
export const selectAuthSuccessMessage = (state) => state.auth.successMessage; // Mengganti nama selector
export const selectIsAuthReady = (state) => state.auth.isAuthReady;
export const selectIsAuthenticated = (state) => state.auth.user !== null;

export default authSlice.reducer;
