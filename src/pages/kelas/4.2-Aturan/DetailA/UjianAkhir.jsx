import AturanImg1 from "/src/assets/card-1.jpeg";
import AturanImgU1 from "/src/assets/u-1.png";

import rules from "/src/assets/rules.png";
import ListKelas from "../../4.1-Kelas/ListKelas/ListKelas";
import Footer1 from "../../../navbar/Footer-1";

import playL from "/src/assets/play-l.svg";
import check from "/src/assets/check.svg";
import rangkum from "/src/assets/book.svg";
import quiz from "/src/assets/quiz.svg";

import DetailA from "./DetailA";

export default function UjianAkhir() {
  const data = [
    {
      id: 0,
      AturanImg: AturanImg1,
      AturanImgU: AturanImgU1,
    },
  ];

  const border = [{}];

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

  const detail = [{ Kelas: "Ujian Akhir", Durasi: "", Syarat: "60%" }];

  return (
    <>
      <section className="w-full h-full box-border">
        <div className="flex border border-primary-100 w-full   h-max  bg-red justify-center  bg-black max-sm:h-50 ">
          <img
            className="w-full h-1/2 max-sm:h-full "
            src={rules}
            alt="rules"
          />
        </div>
        <DetailA detail={detail} />
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
