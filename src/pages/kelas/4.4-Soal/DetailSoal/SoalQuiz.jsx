import DetailK from "../../4.1-Kelas/DetailK/DetailK";
import ListKelas from "../../4.1-Kelas/ListKelas/ListKelas";

import DetailSoal from "../DetailSoal/DetailSoal";
import ListSoal from "../DetailSoal/ListSoal";
import "../Soal.css";
import playL from "/src/assets/play-l.svg";
import check from "/src/assets/check.svg";
import rangkum from "/src/assets/book.svg";
import quiz from "/src/assets/quiz.svg";
import Footer1 from "../../../navbar/Footer-1";

export default function SoalQuiz() {
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

  const questions = [
    {
      id: 1,
      question:
        "Memikirkan dan mengantisipasi secara teliti adanya user secara tidak sengaja mengutak–atik konfigurasi, namun dapat diatasi dengan membuat default yang mengurangi kepenikan pada user adalah pengertian dari ...",
      options: [
        { id: 1, text: "Memikirkan tentang default *", isCorrect: false },
        {
          id: 2,
          text: "Mempertimbangkan page layout berdasarkan suatu tujuan tertentu",
          isCorrect: true,
        },
        {
          id: 3,
          text: "Memasitkan bahwa sistem berjalan sesuai dengan apa yang terjadi saat itu juga",
          isCorrect: true,
        },
        {
          id: 4,
          text: "Menciptakan konsistensi dan menggunakan elemen UI umum",
          isCorrect: true,
        },
      ],
    },
  ];

  return (
    <>
      <div>
        <main className="flex flex-row w-full h-max box-border bg-white max-sm:flex-col">
          <ListSoal />

          <DetailSoal questions={questions} />
          <Footer1
            left="Foundations of User Experience Design"
            right="Foundations of User Experience Design"
            dis="flex"
            disp="hidden"
          />

          <ListKelas dataKelas={dataKelas} />
        </main>
      </div>
    </>
  );
}
