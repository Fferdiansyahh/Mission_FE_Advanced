import DetailK from "./DetailK/DetailK";
import "./Kelas.css";
import PlayB from "../../../assets/play.svg";
import ListKelas from "./ListKelas/ListKelas";
import Footer1 from "../../navbar/Footer-1";

import playL from "../../../assets/play-l.svg";
import check from "../../../assets/check.svg";
import rangkum from "../../../assets/book.svg";
import quiz from "../../../assets/quiz.svg";
import Container from "../../navbar/Container";

export default function Kelas() {
  const dataKelas = [
    {
      id: 0,
      img: check,
      tlList: "Video: ",
      kelas: "Introduction to HR",
      det: "12 Menit",
      bg: "keempat",
      br: "pertama",
    },
    {
      id: 1,
      img: playL,
      tlList: "Video: ",
      kelas: "Introduction to HR",
      det: "12 Menit",
      bg: "white",
      br: "kedua",
    },
    {
      id: 1,
      img: playL,
      tlList: "Video: ",
      kelas: "Introduction to HR",
      det: "12 Menit",
      bg: "white",
      br: "kedua",
    },
    {
      id: 2,
      img: playL,
      tlList: "Video: ",
      kelas: "Introduction to HR",
      det: "12 Menit",
      bg: "white",
      br: "kedua",
    },
    {
      id: 3,
      img: playL,
      tlList: "Video: ",
      kelas: "Introduction to HR",
      det: "12 Menit",
      bg: "white",
      br: "kedua",
    },
    {
      id: 4,
      img: playL,
      tlList: "Video: ",
      kelas: "Introduction to HR",
      det: "12 Menit",
      bg: "white",
      br: "kedua",
    },
    {
      id: 5,
      img: rangkum,
      tlList: "Rangkuman: ",
      kelas: "Introduction to HR",
      det: "12 Menit",
      bg: "white",
      br: "kedua",
    },
    {
      id: 6,
      img: quiz,
      tlList: "Quiz: ",
      kelas: "Introduction to HR",
      det: "12 Menit",
      bg: "white",
      br: "kedua",
    },
  ];

  return (
    <>
      <Container>
        <div>
          <main className="flex flex-row w-screen h-max box-border bg-white max-sm:flex-col  ">
            <section className="w-full h-full box-border ">
              <div className="flex border border-primary-100 w-full px-28   h-125  bg-red justify-center  bg-black max-sm:h-50 max-sm:px-9  ">
                <div className="border border-none  w-full h-full bg-gray-600 items-center flex justify-center">
                  <img
                    className="w-25 h-25 max-sm:w-8 max-sm:h-8 "
                    src={PlayB}
                    alt="Play "
                  />
                </div>
              </div>
              <DetailK />
              <Footer1
                left="Sebelumnya"
                right="Selanjutnya"
                dis="flex"
                disp="hidden"
              />
            </section>

            <ListKelas dataKelas={dataKelas} />
          </main>
        </div>
      </Container>
    </>
  );
}
