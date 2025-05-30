import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login/Login.css";
import LogoGoogle from "../../assets/Logo_Google.png";
import FlagImg from "../../assets/indo.png";
import ShowPass from "/src/assets/hide-pass.svg";
import HidePass from "/src/assets/show-pass.svg";
import Container from "../navbar/Container";
// import users from "../../data/users";
import { registerUser } from "../../firebase/registerUser";
import { useAuth } from "../../hooks/useAuth";

import { useAppDispatch, useAppSelector } from "../../store/redux/hooks";
import {
  registerUserThunk,
  selectAuthError,
  selectIsLoading,
  selectIsAuthenticated,
  clearAuthError,
  clearAuthSuccessMessage, // Perhatikan ini, namanya telah diperbarui di authSlice
  selectAuthSuccessMessage, // Tambahkan ini untuk mengakses successMessage dari Redux
} from "../../store/redux/authSlice";

// import useAuth from "../../hooks/useAuth";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const { error, isLoading, success, register } = useAuth(); // Gunakan custom hook
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const error = useAppSelector(selectAuthError);
  const isLoading = useAppSelector(selectIsLoading);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const successMessage = useAppSelector(selectAuthSuccessMessage); // Ambil dari Redux

  // useEffect(() => {
  //   if (!isAuthenticated && successMessage) {
  //     setTimeout(() => {
  //       navigate("/login", { replace: true });
  //     }, 1500); // tampilkan pesan sukses 1.5 detik dulu
  //   }
  // }, [isAuthenticated, successMessage, navigate]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    // 1. Redirect langsung ke login SEBELUM proses registrasi
    navigate("/login", {
      state: { email: formData.email },
      replace: true,
    });

    // 2. Jalankan registrasi di background
    try {
      await dispatch(
        registerUserThunk({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
        })
      ).unwrap();

      // 3. Force refresh untuk memastikan state bersih
      window.location.reload();
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <>
      <Container>
        <div className="login-container">
          <div className="form-container">
            <h2>Pendaftaran Akun</h2>
            <p>Yuk, daftarkan akunmu sekarang juga.</p>

            {error && <div className="error-message">{error}</div>}
            {isAuthenticated && (
              <div className="success-message">{isAuthenticated}</div>
            )}

            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="name">Nama Lengkap</label>
                <span style={{ color: "red" }}>*</span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-Mail</label>
                <span style={{ color: "red" }}>*</span>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">No Hp</label>
                <span style={{ color: "red" }}>*</span>
                <div className="flag">
                  <img className="flag-img" src={FlagImg} />
                </div>
                <div className="no-hp">
                  <select id="cars" name="cars">
                    <option value="indo">+62</option>
                  </select>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Kata Sandi</label>
                <span style={{ color: "red" }}>*</span>
                <div className="relative ">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Minimal 8 karakter"
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
                <div className="form-group">
                  <label htmlFor="confirmPassword">Konfirmasi Kata Sandi</label>
                  <span style={{ color: "red" }}>*</span>
                  <div className="relative ">
                    <input
                      type={confirmPasswordVisible ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
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
                </div>
                <a href="#" className="forgot-password">
                  Lupa Password?
                </a>
                <button type="submit" className="login-button">
                  Daftar
                </button>
                <a href="/login">
                  <button type="button" className="register-button">
                    Masuk
                  </button>
                </a>
                <li className="divider">atau</li>
                <button className="google-login">
                  <img
                    src={LogoGoogle}
                    alt="Google Logo"
                    className="google-logo"
                  />
                  Daftar dengan Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}
