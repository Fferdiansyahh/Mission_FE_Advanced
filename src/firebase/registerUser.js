import { auth, db } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export async function registerUser(nama, email, password, no) {
  // 1. Nonaktifkan sementara listener auth
  if (auth._authStateListener) auth._authStateListener();
  
  try {
    // 2. Buat user baru
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // 3. Simpan data tambahan ke Firestore
    await setDoc(doc(db, "users", user.uid), {
      nama,
      email,
      no,
      uid: user.uid,
      createdAt: new Date().toISOString()
    });

    // 4. Logout tanpa menunggu (fire and forget)
    signOut(auth).catch(console.error);

    return { 
      email,
      message: "Registrasi berhasil! Silakan login" 
    };
  } finally {
    // 5. Aktifkan kembali listener setelah 1 detik
    setTimeout(() => initializeAuthListener(), 1000);
  }
}