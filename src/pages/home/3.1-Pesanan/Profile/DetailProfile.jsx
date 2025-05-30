import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserProfile,
  updateProfileData,
  clearProfileMessages,
} from "../../../../store/redux/profileSlice";
import { selectUser } from "../../../../store/redux/authSlice";

import ImgPr from "/src/assets/profile.png";
import HidePass from "/src/assets/hide-pass.svg";
import ShowPass from "/src/assets/show-pass.svg";
import "./DetailProfile.css";

export default function DetailProfile() {
  const dispatch = useDispatch();
  const authUser = useSelector(selectUser);
  const profileState = useSelector((state) => state.profile);

  const {
    userData = null,
    loading = false,
    error = null,
    successMessage = null,
  } = useSelector((state) => state.profile) || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (authUser?.uid) {
      dispatch(fetchUserProfile(authUser.uid));
    }
  }, [dispatch, authUser]);

  // Update form data ketika userData atau authUser berubah
  useEffect(() => {
    if (authUser || userData) {
      setFormData({
        name: authUser?.displayName || userData?.name || "",
        email: authUser?.email || "",
        phone: userData?.phone || "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [authUser, userData]);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearProfileMessages());

    if (formData.password !== formData.confirmPassword) {
      alert("Password dan konfirmasi tidak cocok");
      return;
    }
    // Hanya kirim data yang diperlukan
    const profileUpdate = {
      name: formData.name,
      phone: formData.phone,
      ...(formData.password && { password: formData.password }),
    };

    dispatch(
      updateProfileData({
        userId: authUser.uid,
        profileData: profileUpdate,
      })
    );
  };
  return (
    <div className="d-pr-1-1">
      <div className="d-pr-m-1">
        <img className="d-pr-img" src={ImgPr} alt="Profile" />
        <div className="d-pr-m">
          <h2>{formData.name || "Nama Pengguna"}</h2>
          <p>{formData.email || "Email Pengguna"}</p>
          <h5>Ganti Foto Profil</h5>
        </div>
      </div>
      <hr className="div-hr" />

      {error && (
        <div
          className="error-message"
          style={{ color: "red", margin: "10px 0" }}
        >
          {error}
        </div>
      )}
      {successMessage && (
        <div
          className="success-message"
          style={{ color: "green", margin: "10px 0" }}
        >
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <div className="input-profil">
            <div className="input-profil">
              <div class="relative w-full">
                <input
                  type="text"
                  id="floating_name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-50 focus:outline-none focus:ring-0 focus:border-primary-50 peer"
                  placeholder=" "
                />
                <label
                  for="floating_name"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-primary-50 peer-focus:dark:text-primary-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Nama Lengkap
                </label>
              </div>
              <div class="relative w-full">
                <input
                  type="text"
                  id="floating_email"
                  name="email"
                  value={formData.email}
                  readOnly
                  class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-50 focus:outline-none focus:ring-0 focus:border-primary-50 peer"
                  placeholder=" "
                />
                <label
                  for="floating_email"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-primary-50 peer-focus:dark:text-primary-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email
                </label>
              </div>
            </div>
            <div className="flex flex-row gap-3 w-full">
              <select className="nohp" id="nohp" name="nohp">
                <option value="indo">+62</option>
              </select>
              <div class="relative w-full">
                <input
                  type="tel"
                  id="floating_nohp"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-50 focus:outline-none focus:ring-0 focus:border-primary-50 peer"
                  placeholder=" "
                  maxLength="20"
                />
                <label
                  for="floating_nohp"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-primary-50 peer-focus:dark:text-primary-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  No. Hp
                </label>
              </div>
            </div>
          </div>
          <div className="input-pass">
            <div className="relative w-full">
              <input
                type={passwordVisible ? "text" : "password"}
                id="floating_pass"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-50 focus:outline-none focus:ring-0 focus:border-primary-50 peer pr-10"
                placeholder=" "
                minLength="6"
              />
              <label
                htmlFor="floating_pass"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-primary-50 peer-focus:dark:text-primary-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Password Baru
              </label>

              {/* Icon show/hide pakai SVG */}
              <span
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                <img
                  src={confirmPasswordVisible ? HidePass : ShowPass}
                  alt={
                    confirmPasswordVisible
                      ? "Sembunyikan password"
                      : "Tampilkan password"
                  }
                  className="w-5 h-5"
                />
              </span>
            </div>
            <div className="relative w-full">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                id="floating_conpass"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-50 focus:outline-none focus:ring-0 focus:border-primary-50 peer pr-10"
                placeholder=" "
                minLength="6"
              />
              <label
                htmlFor="floating_conpass"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-primary-50 peer-focus:dark:text-primary-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Konfirmasi Password
              </label>

              {/* Icon show/hide pakai SVG */}
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
        </div>
        <div className="d-pr-1-2-btn">
          <button type="submit" className="pr-btn-2" disabled={loading}>
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </form>
    </div>
  );
}
