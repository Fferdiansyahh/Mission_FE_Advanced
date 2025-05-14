import Footer1 from "./Footer-1";
import Footer from "./Footer";
import NavbarKelas from "./NavbarKelas";
import Navbar1 from "./Navbar-1";
import Navbar from "./Navbar";
import "./Navbar.css";

import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Container({ children }) {
  const { user } = useAuth();
  const isLoggedIn = !!user;
  const location = useLocation();
  const shouldHideFooter = [
    "/login",
    "/register",
    "/detail-pembayaran",
  ].includes(location.pathname);

  const hideNavbarKelas = [
    "/kelas",
    "/soal",
    "/aturan",
    "/congrats",
    "/result",

    "/rangkuman",
  ].includes(location.pathname);

  const hideFooterKelas = [
    "/kelas",
    "/soal",
    "/aturan",
    "/congrats",
    "/try",
    "/rangkuman",
  ].includes(location.pathname);

  return (
    <main className="box-border w-dvw max-sm:w-screen ">
      {hideNavbarKelas && <NavbarKelas />}
      {!hideNavbarKelas && <Navbar1 isLoggedIn={isLoggedIn} />}

      {children}
      {hideFooterKelas && <Footer1 dis="hidden" disp="flex" />}
      {hideFooterKelas || (!shouldHideFooter && <Footer dis="block" />)}
    </main>
  );
}
