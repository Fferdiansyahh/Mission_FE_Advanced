import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
import Kategori from "./pages/home/1.2-All-Product/Kategori";
import Login from "./pages/login/Login";
import Selesai from "./pages/home/2.4-Selesai/Selesai";
import DetailProduct from "./pages/home/1.3-Detail-Product/Detailproduct";
import Aturan from "./pages/kelas/4.2-Aturan/Aturan";
import Soal from "./pages/kelas/4.4-Soal/Soal";
import Bayar from "./pages/home/2.2-Bayar/Bayar";
import Pesanan from "./pages/home/3.1-Pesanan/Pesanan";
import UbahMetode from "./pages/home/2.3-Ubah-Metode/UbahMetode";
import Metode from "./pages/home/2.1-Metode/Metode";
import Register from "./pages/register/Register";
import Kelas from "./pages/kelas/4.1-Kelas/Kelas";
import Congrats from "./pages/kelas/4.7-Congrats/Congrats";
import Rangkuman from "./pages/kelas/4.10-Rangkuman/Rangkuman";
import Try from "./pages/kelas/4.7-Congrats/Try";
import Sertifikat from "./pages/kelas/4.12-Sertifikat/Sertifikat";
import { AuthProvider, useAuth } from "./data/authContext";
import ProfilSaya from "./pages/home/3.1-Pesanan/ProfilSaya";
import KelasSaya from "./pages/home/3.1-Pesanan/KelasSaya";
import Result from "./pages/kelas/4.7-Result/Result";

// Komponen untuk proteksi route
function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

// Komponen untuk redirect jika sudah login
function GuestRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? children : <Navigate to="/" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/kategori" element={<Kategori />} />
          <Route path="/detail-product" element={<DetailProduct />} />

          {/* Guest-only Routes */}
          <Route
            path="/login"
            element={
              <GuestRoute>
                <Login />
              </GuestRoute>
            }
          />
          <Route
            path="/register"
            element={
              <GuestRoute>
                <Register />
              </GuestRoute>
            }
          />

          {/* Protected Routes */}
          <Route
            path="/bayar"
            element={
              <ProtectedRoute>
                <Bayar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/metode"
            element={
              <ProtectedRoute>
                <Metode />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pesanan"
            element={
              <ProtectedRoute>
                <Pesanan />
              </ProtectedRoute>
            }
          />
          <Route
            path="/kelas-saya"
            element={
              <ProtectedRoute>
                <KelasSaya />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profil-saya"
            element={
              <ProtectedRoute>
                <ProfilSaya />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ubah-metode"
            element={
              <ProtectedRoute>
                <UbahMetode />
              </ProtectedRoute>
            }
          />
          <Route
            path="/detail-pembayaran"
            element={
              <ProtectedRoute>
                <Selesai />
              </ProtectedRoute>
            }
          />
          <Route
            path="/kelas"
            element={
              <ProtectedRoute>
                <Kelas />
              </ProtectedRoute>
            }
          />
          <Route
            path="/aturan"
            element={
              <ProtectedRoute>
                <Aturan />
              </ProtectedRoute>
            }
          />
          <Route
            path="/soal"
            element={
              <ProtectedRoute>
                <Soal />
              </ProtectedRoute>
            }
          />
          <Route
            path="/congrats"
            element={
              <ProtectedRoute>
                <Congrats />
              </ProtectedRoute>
            }
          />
          <Route
            path="/result"
            element={
              <ProtectedRoute>
                <Result />
              </ProtectedRoute>
            }
          />
          <Route
            path="/rangkuman"
            element={
              <ProtectedRoute>
                <Rangkuman />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sertifikat"
            element={
              <ProtectedRoute>
                <Sertifikat />
              </ProtectedRoute>
            }
          />

          {/* 404 Not Found */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
