// src/pages/Login.jsx
import React, { useEffect, useState } from "react";
import "./Login.css";
import LogoGoogle from "../../assets/Logo_Google.png";
import ShowPass from "/src/assets/hide-pass.svg";
import HidePass from "/src/assets/show-pass.svg";
import { useNavigate } from "react-router-dom";
import Container from "../navbar/Container"; // Pastikan path ini benar

// ⭐ Import hooks Redux dan thunk/selector dari authSlice ⭐
import { useAppDispatch, useAppSelector } from "../../store/redux/hooks";
import {
  loginUserThunk, // Thunk untuk proses login
  selectAuthError, // Selector untuk error
  selectIsLoading, // Selector untuk status loading
  clearAuthError, // Action untuk membersihkan error
  selectIsAuthenticated, // Selector untuk mengecek apakah sudah login
} from "../../store/redux/authSlice";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  // ⭐ Mengganti useAuth dengan Redux hooks ⭐
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectAuthError); // Ambil error dari Redux
  const isLoading = useAppSelector(selectIsLoading); // Ambil loading dari Redux
  const isAuthenticated = useAppSelector(selectIsAuthenticated); // Cek status autentikasi dari Redux

  const navigate = useNavigate();

  // Redirect jika sudah login
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/"); // Arahkan ke halaman utama jika sudah login
    }
  }, [isAuthenticated, navigate]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // ⭐ Bersihkan error Redux saat input berubah ⭐
    if (error) {
      dispatch(clearAuthError());
    }
  };

  const handleSubmit = async (e) => {
     e.preventDefault(); // Mencegah reload halaman default
    console.log("Login.jsx: Mencoba melakukan proses login...");

    // Dispatch thunk loginUserThunk dan tunggu hasilnya
    // `.unwrap()` digunakan untuk melemparkan error jika thunk gagal, agar bisa ditangkap oleh `try...catch`
    try {
      await dispatch(
        loginUserThunk({ email: formData.email, password: formData.password })
      ).unwrap();
      // Jika thunk berhasil, `isAuthenticated` akan berubah dan `useEffect` di atas akan menangani navigasi
      console.log("Login.jsx: loginUserThunk berhasil dijalankan. Menunggu redirect...");
    } catch (err) {
      // Error akan ditangani oleh thunk dan disimpan di state.auth.error,
      // sehingga kita hanya perlu mencatatnya di konsol.
      console.error("Login.jsx: Proses login gagal. Error:", err.message || err);
      // Tampilan error sudah otomatis diperbarui melalui `useSelector(selectAuthError)`
    }
  };

  // ⭐ Bersihkan error saat komponen unmount atau saat error berubah ⭐
  useEffect(() => {
    // Memastikan error dibersihkan saat meninggalkan halaman login
    return () => {
      if (error) {
        dispatch(clearAuthError());
      }
    };
  }, [dispatch, error]); // Tambahkan dispatch sebagai dependency karena itu dari Redux

  return (
    <Container>
      <div className="login-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2>Masuk ke Akun</h2>
            <p>Yuk, lanjutin belajarmu di videobelajar.</p>

            {/* ⭐ Tampilkan error dari Redux state ⭐ */}
            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <label htmlFor="email">
                E-Mail <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="user@mail.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                Kata Sandi <span style={{ color: "red" }}>*</span>
              </label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="12345678"
                  required
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                  <img
                    src={passwordVisible ? HidePass : ShowPass}
                    alt={
                      passwordVisible
                        ? "Sembunyikan password"
                        : "Tampilkan password"
                    }
                    className="w-5 h-5"
                  />
                </span>
              </div>
              <a href="#" className="forgot-password">
                Lupa Password?
              </a>
            </div>

            <button type="submit" className="login-button" disabled={isLoading}>
              {/* ⭐ Tampilkan status loading dari Redux state ⭐ */}
              {isLoading ? "Memproses..." : "Masuk"}
            </button>
          </form>
          <a href="/register">
            <button type="button" className="register-button">
              Daftar
            </button>
          </a>

          <div className="divider">atau</div>

          <button type="button" className="google-login">
            <img src={LogoGoogle} alt="Google Logo" className="google-logo" />
            Masuk dengan Google
          </button>
        </div>
      </div>
    </Container>
  );
}