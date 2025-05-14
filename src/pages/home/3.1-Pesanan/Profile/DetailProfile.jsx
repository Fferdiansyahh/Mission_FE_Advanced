import { useState } from "react";

import ImgPr from "/src/assets/profile.png";
import HidePass from "/src/assets/hide-pass.svg";
import ShowPass from "/src/assets/show-pass.svg";
import "./DetailProfile.css";
import { useAuth } from "../../../../hooks/useAuth";

export default function DetailProfile() {
  const detail = [
    {
      modul: 12,
      id: 0,
      pg: 100,
      tx: "Selesai",
      bg: "#e0fddf",
      cr: "#38d189",
    },
    {
      modul: 2,
      id: 2,
      pg: 28,
      tx: "Sedang Berjalan",
      bg: "#FFF7D7CC",
      cr: "#FFBD3A",
    },
    {
      modul: 2,
      id: 3,
      pg: 28,
      tx: "Sedang Berjalan",
      bg: "#FFF7D7CC",
      cr: "#FFBD3A",
    },
  ];

  const { user } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  return (
    <>
      <div className="d-pr-1-1">
        <div className="d-pr-m-1">
          <img className="d-pr-img" src={ImgPr} alt="#" />
          <div className="d-pr-m">
            <h2>{user ? user.displayName : "Nama Pengguna"}</h2>
            <p>{user ? user.email : "Email Pengguna"}</p>
            <h5>Ganti Foto Profil</h5>
          </div>
        </div>
        <hr className="div-hr" />
        <div className="input-profil">
          <div className="input-profil">
            <div class="relative w-full">
              <input
                type="text"
                id="floating_name"
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
                type="text"
                id="floating_nohp"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-50 focus:outline-none focus:ring-0 focus:border-primary-50 peer"
                placeholder=" "
              />
              <label
                for="floating_nohp"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-primary-50 peer-focus:dark:text-primary-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                No. Hp
              </label>
            </div>
          </div>
          <div className="input-pass">
            <div className="relative w-full">
              <input
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="floating_pass"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-50 focus:outline-none focus:ring-0 focus:border-primary-50 peer pr-10"
                placeholder=" "
              />
              <label
                htmlFor="floating_pass"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-primary-50 peer-focus:dark:text-primary-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Password
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                id="floating_conpass"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-50 focus:outline-none focus:ring-0 focus:border-primary-50 peer pr-10"
                placeholder=" "
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
          <button className="pr-btn-2">Simpan</button>
        </div>
      </div>
    </>
  );
}
