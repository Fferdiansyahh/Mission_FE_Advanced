import { auth, db } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export async function registerUser(nama, email, password, no) {
  try {
    // Buat user di Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Simpan data tambahan ke Firestore
    await setDoc(doc(db, "users", user.uid), {
      nama,
      email,
      no,
      uid: user.uid,
    });

    console.log("Registrasi berhasil");
    return user;
  } catch (error) {
    console.error("Error saat registrasi:", error.message);
    throw error;
  }
}
