import { auth, db } from "./firebaseConfig";
import { updateProfile as updateAuthProfile } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export const getProfile = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    return userSnap.exists() ? userSnap.data() : null;
  } catch (error) {
    throw error;
  }
};

export const updateProfile = async (userId, profileData) => {
  try {
    // Update Firebase Auth profile
    if (auth.currentUser) {
      await updateAuthProfile(auth.currentUser, {
        displayName: profileData.nama,
      });

      // Update password if provided
      if (profileData.password) {
        await updatePassword(auth.currentUser, profileData.password);
      }
    }

    // Update Firestore profile
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      name: profileData.nama,
      phone: profileData.phone,
      updatedAt: new Date().toISOString(),
    });

    // Return updated profile data
    const updatedSnap = await getDoc(userRef);
    return updatedSnap.data();
  } catch (error) {
    throw error;
  }
};
