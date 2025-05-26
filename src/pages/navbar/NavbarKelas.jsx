import { ArrowLeftIcon, ChevronDownIcon } from "flowbite-react";

import LogoProfile from "../../assets/u-3.png";
import "../login/Login.css";
import "./NavbarKelas.css";
import { useState, useEffect, useRef, useContext } from "react";
import NotifModul from "./components/NotifModul";
import { AuthContext } from "../../data/authContext";
import { MdEmojiEvents, MdLogout } from "react-icons/md";
import { HasilUjianContext } from "../../data/HasilUjianContext";
import { useAuth } from "../../hooks/useAuth";

export default function NavbarKelas() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, isAuthReady } = useAuth();
  const isLoggedIn = !!user;
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { hasilUjian } = useContext(HasilUjianContext);
  const nilaiAkhir =
    !hasilUjian || hasilUjian.nilai < 80 ? 0 : hasilUjian.nilai;
  return (
    <nav className="navbar-kelas">
      <div className="navbar-left">
        <ArrowLeftIcon size={20} />
        <span className="navbar-title">
          Foundations of User Experience Design
        </span>
      </div>

      <div className="navbar-right">
        {nilaiAkhir == 100 ? (
          <div className="flex justify-center items-center border border-pertama rounded-xl gap-4 py-2 px-6.5">
            <div className="relative" ref={dropdownRef}>
              {open && (
                <NotifModul
                  judul="Modul Sudah Selesai"
                  detail="16 dari 16 modul telah selesai, silahkan download sertifikat"
                />
              )}

              <div
                className="flex items-center gap-2"
                onClick={() => setOpen(!open)}
              >
                <MdEmojiEvents className="text-pertama w-6 h-6" />
                <span className="text-base font-bold text-pertama max-sm:hidden block">
                  Ambil Sertifikat
                </span>
                <ChevronDownIcon className="dropdown-icon" />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-4">
            <div className="progress-bar">
              <div className="progress-fill" />
            </div>

            <div className="relative" ref={dropdownRef}>
              {open && <NotifModul />}

              <div className="flex items-center" onClick={() => setOpen(!open)}>
                <span className="progress-text">10/12</span>
                <ChevronDownIcon className="dropdown-icon" />
              </div>
            </div>
          </div>
        )}
        <div>
          <img
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="user-avatar"
            src={LogoProfile}
            alt="User Avatar"
          />
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed top-15 right-30  max-sm:right-0 max-sm:w-full w-max border border-kedua rounded-b-sm shadow `}
      >
        <ul className="flex flex-col h-max font-medium   border border-kedua  bg-white md:space-x-8 rtl:space-x-reverse  md:mt-0 md:border-0">
          <li className="!m-0">
            <a
              href="/kategori"
              className="hidden max-sm:block !text-kelima w-full py-4 px-3 hover:font-semibold border border-kedua pr-14 max-sm:pr-0 "
            >
              Kategori
            </a>
          </li>

          <li className="!m-0">
            <a
              href="#"
              className="block !text-kelima w-full py-4 px-3  border border-y-kedua border-x-0  pr-14 max-sm:pr-0 "
            >
              Profil Saya
            </a>
          </li>

          <li className="!m-0">
            <a
              href="/kategori"
              className="block !text-kelima w-full py-4 px-3 hover:font-semibold border border-y-kedua border-x-0 pr-14 max-sm:pr-0 "
            >
              Kelas Saya
            </a>
          </li>
          <li className="!m-0">
            <a
              href="/kategori"
              className="block !text-kelima w-full py-4 px-3 hover:font-semibold border border-y-kedua border-x-0  pr-14 max-sm:pr-0"
            >
              Pesanan Saya
            </a>
          </li>
          <li className="!m-0">
            <a
              onClick={logout}
              href="/login"
              className="flex gap-1.5 items-center !text-red-500 w-full py-4 px-3 hover:font-semibold border border-y-kedua border-x-0  pr-14 max-sm:pr-0"
            >
              Keluar
              <MdLogout
                className="text-red-500"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
