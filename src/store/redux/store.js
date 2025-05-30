// src/store/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer, { initializeAuthListener } from "./authSlice";
import userProfileReducer from "./userProfileSlice";
import profileReducer from "./profileSlice"; // Im
// import dataReducer from './dataReducer'; // Jika kamu sudah punya ini dari contoh sebelumnya

// Combine reducers
const rootReducer = {
  auth: authReducer,
  userProfile: userProfileReducer,
  profile: profileReducer, // Tambahkan profile reducer
  // ...reducers lainnya
};
export const store = configureStore({
  reducer: {
    auth: authReducer, // Reducer untuk otentikasi
    userProfile: userProfileReducer, // Reducer untuk profil pengguna
    // data: dataReducer,         // Reducer data API lainnya (jika ada)
  },
  // devTools: process.env.NODE_ENV !== 'production', // Aktifkan Redux DevTools di development
});

// Panggil listener auth Firebase saat aplikasi dimulai untuk mendapatkan status awal
store.dispatch(initializeAuthListener());
