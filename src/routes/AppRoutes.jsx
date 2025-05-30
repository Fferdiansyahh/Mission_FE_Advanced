// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from "../store/redux/hooks"; // Import hooks Redux kamu
import {
  selectIsAuthenticated,
  selectUser,
  selectIsAuthReady,
} from "../store/redux/authSlice"; // Import selectors dari authSlice

import {
  Home, Kategori, Login, Register, DetailProduct, Bayar,
  Metode, UbahMetode, Selesai, Pesanan, ProfilSaya, KelasSaya,
  Kelas, Aturan, Soal, Congrats, Result, Rangkuman, Sertifikat
} from "./RouteComponents"; // Pastikan path ini benar
import Page from "../pages/navbar/components/Pages"; // Pastikan path ini benar

// --- Komponen ProtectedRoute ---
// Untuk rute yang hanya bisa diakses oleh pengguna yang sudah login
function ProtectedRoute({ children }) {
  const isAuthReady = useAppSelector(selectIsAuthReady);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  // Jika auth belum siap (misalnya, aplikasi baru loading atau Firebase sedang inisialisasi)
  if (!isAuthReady) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        Memuat otentikasi...
      </div>
    );
  }

  // Jika auth sudah siap dan pengguna terotentikasi, tampilkan children
  // Jika tidak terotentikasi, arahkan ke halaman login
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

// --- Komponen GuestRoute ---
// Untuk rute yang hanya bisa diakses oleh pengguna yang belum login
function GuestRoute({ children }) {
  const isAuthReady = useAppSelector(selectIsAuthReady);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  // Jika auth belum siap
  if (!isAuthReady) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        Memuat otentikasi...
      </div>
    );
  }

  // Jika auth sudah siap dan pengguna belum terotentikasi, tampilkan children
  // Jika sudah terotentikasi, arahkan ke halaman utama (atau dashboard)
  return !isAuthenticated ? children : <Navigate to="/" replace />;
}

// --- Komponen AppRoutes Utama ---
export default function AppRoutes() {
  // isAuthReady juga bisa diambil di sini untuk penanganan global jika diperlukan,
  // tapi ProtectedRoute dan GuestRoute sudah menanganinya secara lokal untuk rute masing-masing.
  // const isAuthReady = useAppSelector(selectIsAuthReady);
  // if (!isAuthReady) return null; // Jika ingin tampilan loading untuk semua rute sampai auth ready

  return (
    <Routes>
      <Route path="/" element={<Page title="Beranda"><Home /></Page>} />
      <Route path="/kategori" element={<Page title="Kategori"><Kategori /></Page>} />
      <Route path="/detail-product" element={<DetailProduct />} />

      {/* Guest Routes: Hanya bisa diakses saat pengguna BELUM login */}
      <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
      <Route path="/register" element={<GuestRoute><Register /></GuestRoute>} />

      {/* Protected Routes: Hanya bisa diakses saat pengguna SUDAH login */}
      <Route path="/bayar" element={<ProtectedRoute><Bayar /></ProtectedRoute>} />
      <Route path="/metode" element={<ProtectedRoute><Metode /></ProtectedRoute>} />
      <Route path="/ubah-metode" element={<ProtectedRoute><UbahMetode /></ProtectedRoute>} />
      <Route path="/detail-pembayaran" element={<ProtectedRoute><Selesai /></ProtectedRoute>} />
      <Route path="/pesanan" element={<ProtectedRoute><Pesanan /></ProtectedRoute>} />
      <Route path="/kelas-saya" element={<ProtectedRoute><KelasSaya /></ProtectedRoute>} />
      <Route path="/profil-saya" element={<ProtectedRoute><ProfilSaya /></ProtectedRoute>} />
      <Route path="/kelas" element={<ProtectedRoute><Kelas /></ProtectedRoute>} />
      <Route path="/aturan" element={<ProtectedRoute><Aturan /></ProtectedRoute>} />
      <Route path="/soal" element={<ProtectedRoute><Soal /></ProtectedRoute>} />
      <Route path="/congrats" element={<ProtectedRoute><Congrats /></ProtectedRoute>} />
      <Route path="/result" element={<ProtectedRoute><Result /></ProtectedRoute>} />
      <Route path="/rangkuman" element={<ProtectedRoute><Rangkuman /></ProtectedRoute>} />
      <Route path="/sertifikat" element={<ProtectedRoute><Sertifikat /></ProtectedRoute>} />

      {/* Fallback/404 Route */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}