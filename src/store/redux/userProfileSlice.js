// src/store/redux/userProfileSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const initialState = {
  profile: null,
  loadingProfile: false,
  errorProfile: null,
};

// Thunk untuk mengambil profil pengguna dari Firestore
export const fetchUserProfile = createAsyncThunk(
  'userProfile/fetchUserProfile',
  async (uid, { rejectWithValue }) => {
    try {
      const userDocRef = doc(db, 'users', uid);
      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        return rejectWithValue('Profil pengguna tidak ditemukan.');
      }
    } catch (error) {
      console.error('Error fetching user profile:', error.message);
      return rejectWithValue(`Gagal mengambil profil pengguna: ${error.message}`);
    }
  }
);

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    clearUserProfile: (state) => { // Untuk membersihkan profil saat logout
      state.profile = null;
      state.loadingProfile = false;
      state.errorProfile = null;
    },
    clearProfileMessages: (state) => { // Untuk membersihkan pesan error profil
      state.errorProfile = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loadingProfile = true;
        state.errorProfile = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loadingProfile = false;
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loadingProfile = false;
        state.profile = null;
        state.errorProfile = action.payload;
      });
  },
});

export const { clearUserProfile, clearProfileMessages } = userProfileSlice.actions;

// Selector untuk mengambil data profil
export const selectUserProfile = (state) => state.userProfile.profile;
export const selectLoadingProfile = (state) => state.userProfile.loadingProfile;
export const selectErrorProfile = (state) => state.userProfile.errorProfile;

export default userProfileSlice.reducer;