import { useContext, useEffect, useRef, useState } from "react";
import VideoBelajarLogo from "../../assets/Logo_Video_ Belajar.png";
import LogoProfile from "../../assets/u-3.png";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
import useActivePage from "../../data/useActivePage";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import Stepper from "../home/1.2-All-Product/components/Stepper1";
import { useAuth } from "../../hooks/useAuth";

export default function Navbar1() {
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

  const location = useLocation();
  const hideLoginRegister =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/metode" ||
    location.pathname === "/ubah-metode" ||
    location.pathname === "/bayar" ||
    location.pathname === "/detail-pembayaran";

  const activePage = useActivePage();

  // Hanya tampilkan Stepper jika berada di salah satu halaman proses
  const showStepper = [
    "/metode",
    "/ubah-metode",
    "/bayar",
    "/detail-pembayaran",
  ].some((path) => location.pathname.includes(path));

  return (
    <nav className="navbar">
      <div className="n">
        <div className="n-1">
          <a href="/ ">
            <img
              src={VideoBelajarLogo}
              alt="videobelajar logo"
              className="logo-image"
            />
          </a>
        </div>
        <div className="n-2">
          {!hideLoginRegister && isAuthReady &&  (
            <div className="n-2-1 ">
              <a href="/kategori">
                <p className="text-kelima">Kategori</p>
              </a>
              {isLoggedIn ? (
                <div className="flex items-center">
                  {" "}
                  {/* Tambahkan div sebagai container */}
                  <img
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    src={LogoProfile}
                    alt="Profil"
                    className="cursor-pointer" // Tambahkan cursor-pointer untuk indikasi interaktif
                  />
                  {/* {user?.displayName && (
                    <span className="ml-2 text-sm">{user.displayName}</span>
                  )}                  
                  {!user?.displayName && user?.email && (
                    <span className="ml-2 text-sm">
                      {user.email.split("@")[0]}
                    </span>
                  )} */}
                  </div>
              ) : (
                <div className="flex gap-4">
                  <a
                    href="/login"
                    className="bg-pertama font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition"
                  >
                    <p className="text-white">Login</p>
                  </a>
                  <a
                    href="/register"
                    className="border border-pertama text-pertama font-bold py-2 px-6 rounded-lg hover:bg-green-50 transition"
                  >
                    <p className="text-pertama">Register</p>
                  </a>
                </div>
              )}
            </div>
          )}

          {showStepper && activePage && (
            <div className="n-3 block max-sm:hidden">
              <Stepper activePage={activePage} />
            </div>
          )}

          {/* Hamburger Menu */}
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>

            <GiHamburgerMenu />
          </div>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed top-15 right-30 max-sm:left-0  max-sm:right-0 max-sm:w-9/10 w-max border border-kedua rounded-b-sm shadow `}
      >
        {isLoggedIn ? (
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
                href="/profil-saya"
                className="block !text-kelima w-full py-4 px-3  border border-y-kedua border-x-0  pr-14 max-sm:pr-0 "
              >
                Profil Saya
              </a>
            </li>
            <li className="!m-0">
              <a
                href="/kelas-saya"
                className="block !text-kelima w-full py-4 px-3 hover:font-semibold border border-y-kedua border-x-0 pr-14 max-sm:pr-0 "
              >
                Kelas Saya
              </a>
            </li>
            <li className="!m-0">
              <a
                href="/pesanan"
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
        ) : (
          <ul className="flex flex-col h-max font-medium   border border-kedua  bg-white md:space-x-8 rtl:space-x-reverse  md:mt-0 md:border-0">
            <li className="!m-0">
              <a
                href="/"
                className="hidden max-sm:block !text-kelima w-full py-4 px-3 hover:font-semibold border border-kedua pr-14 max-sm:pr-0 "
              >
                Beranda
              </a>
            </li>
            <li className="!m-0">
              <a
                href="/kategori"
                className="block !text-kelima w-full py-4 px-3  border border-y-kedua border-x-0  pr-14 max-sm:pr-0 "
              >
                Kategori
              </a>
            </li>
            <li className="!m-0">
              <div className="flex flex-col w-full p-3 gap-2">
                <a
                  href="/login"
                  className="block !text-kelima w-full py-4 px-3 text-center !text-base !font-bold !text-white bg-pertama rounded-xl border border-pertama    max-sm:pr-0 "
                >
                  Login
                </a>

                <a
                  href="/register"
                  className="block !text-kelima w-full py-4 px-3 text-center !text-base !font-bold !text-pertama rounded-xl  border border-pertama  max-sm:pr-0 "
                >
                  Register
                </a>
              </div>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
