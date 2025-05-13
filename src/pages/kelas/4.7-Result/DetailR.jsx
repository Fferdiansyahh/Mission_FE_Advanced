import React from "react";
import Loop from "/src/assets/loop.png";
import Benar from "/src/assets/check.svg";
import Salah from "/src/assets/ceklis_x.png";

export default function DetailR(props) {
  const {
    detail = [{ Kelas: "", Durasi: "", Syarat: "" }],
    nilai = 0,
    benar = 0,
    salah = 0,
  } = props;

  // Menentukan warna background berdasarkan nilai
  let bgColor = "bg-red-500"; // default merah
  if (nilai >= 80) bgColor = "bg-green-500";
  else if (nilai >= 60) bgColor = "bg-yellow-500";

  // Menentukan pesan feedback berdasarkan nilai
  let feedback = {
    title: "Sedikit Lagi!",
    desc1: `Kamu sudah menyelesaikan ${detail[0].Kelas} dengan baik namun nilaimu belum cukup untuk melanjutkan materi.`,
    desc2: `Pelajari kembali modul sebelumnya dan kerjakan kembali ${detail[0].Kelas} ini!`,
    buttonText: "Ulangi Quiz",
    image: Loop,
  };

  if (nilai >= 80) {
    feedback = {
      title: "Selesai!",
      desc1: ` ${detail[0].Kelas} sudah selesai dan kami sudah mengetahui progresmu .`,
      desc2: "Lanjutkan ke materi berikutnya untuk terus belajar!",
      buttonText: `Ulangi ${detail[0].Kelas}`,
      image: Loop,
    };
  } else if (nilai >= 60) {
    feedback = {
      title: "Selesai!",
      desc1: ` ${detail[0].Kelas} sudah selesai dan kami sudah mengetahui progresmu .`,
      desc2: "Tingkatkan lagi pemahamanmu untuk hasil yang lebih baik!",
      buttonText: "Pelajari Lagi",
      image: Loop,
    };
  }

  const tanggalUjian = new Date().toLocaleString(); // Ganti dengan tanggal dari props jika ada

  return (
    <div className="max-w-full mx-auto mt-10 px-20 max-sm:px-5 max-sm:mx-5 bg-white rounded-2xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-2 ">
        Tanggal {detail[0].Kelas}:
      </h2>
      <p className="text-gray-600 pb-6  !text-left">{tanggalUjian}</p>

      <div className="grid grid-cols-4 max-sm:grid-cols-2 bg-white border border-kedua  overflow-hidden mb-6">
        <div
          className={`flex flex-col justify-center ${bgColor} text-white p-4 gap-2 max-sm:border max-sm:border-kedua`}
        >
          <div className="text-sm">Nilai</div>
          <div className="text-3xl font-bold">{nilai}</div>
        </div>
        <div className="flex flex-col justify-center p-4 gap-2 border-l border-gray-200 max-sm:border max-sm:border-kedua">
          <div className="text-sm text-gray-500">Soal</div>
          <div className="text-2xl font-semibold text-gray-800 ">
            {benar + salah}
          </div>
        </div>
        <div className="flex flex-col justify-center p-4 gap-2 border-l border-gray-200">
          <div className="text-sm text-gray-500">Benar</div>
          <div className="text-2xl font-semibold text-green-600 flex items-center">
            <img className="w-5 h-5 mr-2" src={Benar} alt="benar" />
            {benar}
          </div>
        </div>
        <div className="flex flex-col justify-center p-4 gap-2 border-l border-gray-200">
          <div className="text-sm text-gray-500">Salah</div>
          <div className="text-2xl font-semibold text-red-600 flex items-center">
            <img className="w-5 h-5 mr-2" src={Salah} alt="salah" />
            {salah}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-8 ">
        <h1 className="text-2xl font-bold text-gray-800">{feedback.title}</h1>
        <p className="text-gray-600 !text-left">{feedback.desc1}</p>
        <p className="text-gray-600 pt-2 !text-left">{feedback.desc2}</p>
        <a href="/soal " className={`${nilai <= 50 ? "block" : "hidden"} `}>
          <button className="flex gap-4 !px-7 !py-3 !border items-center  !border-pertama !bg-white !text-pertama !w-max rounded-xl mt-5 hover:bg-opacity-90 transition-colors">
            <img className="h-4" src={feedback.image} alt="action" />
            <p className="font-semibold">{feedback.buttonText}</p>
          </button>
        </a>
      </div>
    </div>
  );
}
