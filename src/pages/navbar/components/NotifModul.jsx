import { useContext } from "react";
import { HasilUjianContext } from "../../../data/HasilUjianContext";

export default function NotifModul(props) {
  const {
    judul = "25% Modul Telah Selesai",
    detail = "Selesaikan Semua Modul Untuk Mendapatkan Sertifikat",
  } = props;

  const { hasilUjian } = useContext(HasilUjianContext);
  const nilaiAkhir =
    !hasilUjian || hasilUjian.nilai < 80 ? 0 : hasilUjian.nilai;

  const isSelesai = nilaiAkhir === 100;

  return (
    <>
      <div className="absolute max-sm:fixed  right-[-0px] max-sm:mx-5 mt-12 w-90 z-50 max-sm:w-8/10  max-sm:left-0 ">
        <div className="relative bg-white border border-white shadow-xl rounded-xl p-6">
          <div className="absolute -top-[9px] right-[30px]  max-sm:right-[57px] w-4 h-4 bg-white rotate-45 border-t border-r border-white shadow -z-10"></div>
          <h1 className="font-semibold text-lg mb-2">{judul}</h1>
          <hr className="mb-3" />
          <p className="text-base text-gray-500 mb-4 leading-relaxed">
            {detail}
          </p>
          <a href="/sertifikat">
            <button
              disabled={!isSelesai}
              className={`w-full  py-2 rounded-md font-semibold text-sm ${
                !isSelesai
                  ? "!cursor-not-allowed !bg-delapan !text-kedua"
                  : "cursor-pointer !bg-pertama !text-white"
              }     `}
            >
              Ambil Sertifikat
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
