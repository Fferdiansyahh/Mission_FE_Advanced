import { createContext, useContext, useEffect, useState } from "react";
import { registerUser } from "../firebase/registerUser";
import { loginUser } from "../firebase/loginUser";
import { auth } from "../firebase/firebaseConfig"; // Import instance auth Firebase
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// Membuat Auth Context (opsional, tapi disarankan untuk manajemen state global)
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const authContextValue = useAuthProvider();
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);

let ignoreNextLogin = false;
const useAuthProvider = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [user, setUser] = useState(null); // State untuk informasi pengguna (termasuk UID)
  const [isAuthReady, setIsAuthReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (ignoreNextLogin) {
        console.log("Auto login diabaikan setelah register.");
        ignoreNextLogin = false; // Reset setelah dilewati
        return;
      }

      if (authUser) {
        setUser(authUser);
        console.log("Pengguna login (dari onAuthStateChanged):", authUser.uid);
      } else {
        setUser(null);
        console.log("Pengguna logout (dari onAuthStateChanged)");
      }
      setIsAuthReady(true);
    });

    return unsubscribe;
  }, []);

  const register = async (name, email, password, phone) => {
    setIsLoading(true);
    setError("");
    setSuccess("");
    try {
      ignoreNextLogin = true;
      const user = await registerUser(name, email, password, phone);
      console.log("Registrasi berhasil di hook:", user);
      setSuccess("Pendaftaran berhasil.");
      await auth.signOut(); // keluar dari session
      navigate("/login");

      return user;
    } catch (err) {
      setError(`Pendaftaran gagal: ${err.message}`);
      console.error("Error saat pendaftaran di hook:", err);
      throw err; // Re-throw error agar komponen bisa menangani navigasi dll.
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email, password) => {
    setIsLoading(true);
    setError("");
    try {
      const user = await loginUser(email, password);
      console.log("Login berhasil di hook:", user);
      return user;
    } catch (err) {
      setError(`Login gagal: ${err.message}`);
      console.error("Error saat login di hook:", err);
      throw err; // Re-throw error agar komponen bisa menangani navigasi dll.
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    setError("");
    try {
      await auth.signOut();
      console.log("Logout berhasil di hook.");
      navigate("/login");
    } catch (err) {
      setError(`Logout gagal: ${err.message}`);
      console.error("Error saat logout di hook:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      console.log("AUTH SUDAH BERHASIL LOGIN. User:", user);
    }
  }, [user]);

  return {
    user,
    error,
    isLoading,
    success,
    register,
    login,
    logout,
    isAuthReady,
  };
};
