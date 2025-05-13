import PlayB from "../../../assets/play.svg";
import ListKelas from "../4.1-Kelas/ListKelas/ListKelas";

import Footer1 from "../../navbar/Footer-1";

import playL from "../../../assets/play-l.svg";
import check from "../../../assets/check.svg";
import rangkum from "../../../assets/book.svg";
import quiz from "../../../assets/quiz.svg";

import Down from "../../../assets/dow.png";
import Container from "../../navbar/Container";

export default function Rangkuman() {
  const dataKelas = [
    {
      id: 0,
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
      img: rangkum,
      tlList: "Rangkuman: ",
      kelas: "Introduction to HR",
      det: "12 Menit",
      bg: "keempat",
      br: "pertama",
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
        <main className="flex w-dvw flex-row h-max box-border bg-white max-sm:flex-col">
          <section className="w-full h-full box-border">
            <div className="flex border border-primary-100 w-full px-28   h-125  bg-red justify-center  bg-black max-sm:h-50 max-sm:px-9  ">
              <div className="border border-none  w-full h-full bg-gray-600 items-center flex justify-center">
                <img
                  className="w-25 h-25 max-sm:w-8 max-sm:h-8 "
                  src={PlayB}
                  alt="Play "
                />
              </div>
            </div>
            <div className="max-w-full mx-auto px-30 py-9 max-sm:p-5  bg-white  rounded-2xl">
              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-bold ">
                  Download Rangkuman Modul!
                </h1>
                <p className="text-gray-600 !text-left">
                  Silahkan download rangkuman modul dari materi yang telah kamu
                  pelajari
                </p>
              </div>
              <a className="flex gap-4 px-7 py-3 border items-center border-pertama w-max rounded-xl mt-5">
                <img className=" h-4" src={Down} />
                <p className="text-pertama text-semibold">Download Rangkuman</p>
              </a>
            </div>
            <Footer1
              left="Sebelumnya"
              right="Selanjutnya"
              dis="flex"
              disp="hidden"
            />
          </section>

          <ListKelas dataKelas={dataKelas} />
        </main>
      </Container>
    </>
  );
}
