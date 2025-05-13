import React, { useContext, useState } from "react";
import "./Login.css";
import LogoGoogle from "../../assets/Logo_Google.png";
import ShowPass from "/src/assets/hide-pass.svg";
import HidePass from "/src/assets/show-pass.svg";
import users from "../../data/users";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../data/authContext";
import Container from "../navbar/Container";

export default function Login() {
    const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        login();
        navigate("/");
      } else {
        setError("Email atau password salah");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat login");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <div className="login-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2>Masuk ke Akun</h2>
            <p>Yuk, lanjutin belajarmu di videobelajar.</p>

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
              <div className="relative ">
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
