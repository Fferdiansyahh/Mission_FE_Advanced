import tryImg from "/src/assets/try.png";
import congrastImg from "/src/assets/congrats.png";
import ListKelas from "../4.1-Kelas/ListKelas/ListKelas";
import Footer1 from "../../navbar/Footer-1";

import check from "/src/assets/check.svg";
import quiz from "/src/assets/quiz.svg";

import DetailR from "./DetailR";

export default function ResultUjian({ nilaiAkhir, benar, salah }) {
  const dataKelas = [
    {
      id: 1,
      img: check,
      tlList: "Video: ",
      kelas: "Introduction to HR",
      det: "12 Menit",
      bg: "white",
      br: "kedua",
    },
    {
      id: 1,
      img: check,
      tlList: "Video: ",
      kelas: "Introduction to HR",
      det: "12 Menit",
      bg: "white",
      br: "kedua",
    },
    {
      id: 2,
      img: check,
      tlList: "Video: ",
      kelas: "Introduction to HR",
      det: "12 Menit",
      bg: "white",
      br: "kedua",
    },
    {
      id: 3,
      img: check,
      tlList: "Video: ",
      kelas: "Introduction to HR",
      det: "12 Menit",
      bg: "white",
      br: "kedua",
    },
    {
      id: 4,
      img: check,
      tlList: "Video: ",
      kelas: "Introduction to HR",
      det: "12 Menit",
      bg: "white",
      br: "kedua",
    },
    {
      id: 5,
      img: check,
      tlList: "Rangkuman: ",
      kelas: "Introduction to HR",
      det: "12 Menit",
      bg: "white",
      br: "kedua",
    },
    {
      id: 6,
      img: check,
      tlList: "Quiz: ",
      kelas: "Introduction to HR",
      det: "12 Menit",
      bg: "white",
      br: "kedua",
    },

    {
      id: 7,
      img: quiz,
      tlList: "Ujian Akhir: ",
      kelas: "Introduction to HR",
      det: "10 Pertanyaaan",
      bg: "keempat",
      br: "pertama",
    },
  ];

  const detailUj = [{ Kelas: "Ujian Akhir", Durasi: "", Syarat: "60%" }];

  return (
    <>
      <section className="w-full h-full box-border">
        <div className="flex border border-primary-100 w-full   h-max  bg-red justify-center  bg-black max-sm:h-50 ">
          <img
            className="w-full h-1/2 max-sm:h-full "
            src={nilaiAkhir >= 80 ? congrastImg : tryImg}
            alt="result"
          />
        </div>
        <DetailR
          detail={detailUj}
          nilai={nilaiAkhir}
          benar={benar}
          salah={salah}
        />
        <Footer1
          left="Sebelumnya"
          right="Selanjutnya"
          dis="flex"
          disp="hidden"
        />
      </section>
      <ListKelas dataKelas={dataKelas} />
    </>
  );
}
