import { useLocation } from "react-router-dom";
import Container from "../../navbar/Container";
import ResultUjian from "./ResultUjian";

export default function Result() {
  const location = useLocation();
  const hasilUjian = location.state?.hasilUjian; // Menerima data hasil ujian dari state navigasi
console.log(hasilUjian);
  // Jika data hasil ujian tidak ada, gunakan nilai default
  const nilaiAkhir = hasilUjian?.nilai || 0;
  const totalSoal = hasilUjian?.totalSoal || 0;
  const jumlahBenar = hasilUjian?.totalBenar || 0;
  const jumlahSalah = totalSoal - jumlahBenar || 0;
  return (
    <>
      <Container>
        <main className="flex flex-row w-full h-max box-border bg-white max-sm:flex-col">
          <ResultUjian
            nilaiAkhir={nilaiAkhir}
            benar={jumlahBenar}
            salah={jumlahSalah}
          />
        </main>
      </Container>
    </>
  );
}
