import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ambilSemuaSoalFirestore = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "questions")); // Asumsikan nama koleksinya 'questions'
    const questions = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Atau doc.data().id jika ada field id di dokumen
      ...doc.data(),
    }));
    console.log("Data soal dari Firestore:", questions); // Tambahkan log ini
    return questions;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return []; // Atau throw error jika ingin ditangani di komponen
  }
};

export default ambilSemuaSoalFirestore;
