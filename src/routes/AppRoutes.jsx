import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home, Kategori, Login, Register, DetailProduct, Bayar,
  Metode, UbahMetode, Selesai, Pesanan, ProfilSaya, KelasSaya,
  Kelas, Aturan, Soal, Congrats, Result, Rangkuman, Sertifikat
} from "./RouteComponents";
import { useAuth } from "../hooks/useAuth";
import Page from "../pages/navbar/components/Pages";

// Route guard
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return !!user ? children : <Navigate to="/login" replace />;
}

function GuestRoute({ children }) {
  const { user } = useAuth();
  return !user ? children : <Navigate to="/" replace />;
}

export default function AppRoutes() {
  const { isAuthReady } = useAuth();
  if (!isAuthReady) return null;

  return (
    <Routes>
      <Route path="/" element={<Page title="Beranda"><Home /></Page>} />
      <Route path="/kategori" element={<Page title="Kategori"><Kategori /></Page>} />
      <Route path="/detail-product" element={<DetailProduct />} />

      {/* Guest Routes */}
      <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
      <Route path="/register" element={<GuestRoute><Register /></GuestRoute>} />

      {/* Protected Routes */}
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

      {/* Fallback */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}
