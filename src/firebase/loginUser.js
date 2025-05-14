// src/firebase/loginUser.js
import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("Login berhasil");
    return user;
  } catch (error) {
    console.error("Login gagal:", error.message);
    throw error;
  }
}
