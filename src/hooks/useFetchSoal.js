// src/hooks/useFetchSoal.js
import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const useFetchSoal = (collectionName) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSoal = async () => {
      setLoading(true);
      setError(null);
      try {
        const q = query(collection(db, collectionName), orderBy('id', 'asc'));
        const querySnapshot = await getDocs(q);
        const dataSoal = querySnapshot.docs.map(doc => ({
          id: doc.id, // Firestore menggunakan doc.id sebagai ID
          ...doc.data(),
        }));
        setQuestions(dataSoal);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("Gagal memuat soal:", err);
      }
    };

    fetchSoal();
  }, [collectionName]);

  return { questions, loading, error };
};

export default useFetchSoal;