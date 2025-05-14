import { createContext, useState, useEffect, useContext } from "react";
import { useAuth } from "../hooks/useAuth";
import { doc, getDoc } from "firebase/firestore"; // Contoh untuk Firestore
import { db } from "../firebase/firebaseConfig";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [errorProfile, setErrorProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoadingProfile(true);
      setErrorProfile(null);
      if (user?.uid) {
        setLoadingProfile(true);
        try {
          const userDocRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(userDocRef);
          if (docSnap.exists()) {
            setProfile(docSnap.data());
          } else {
            setErrorProfile("Profil pengguna tidak ditemukan.");
          }
        } catch (error) {
          setErrorProfile("Gagal mengambil profil pengguna.");
          console.error("Error fetching profile:", error);
        } finally {
          setLoadingProfile(false);
        }
      } else {
        setProfile(null);
        setLoadingProfile(false);
      }
    };

    fetchProfile();
  }, [user?.uid]);

  return (
    <UserContext.Provider value={{ profile, loadingProfile, errorProfile }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => {
  return useContext(UserContext);
};
