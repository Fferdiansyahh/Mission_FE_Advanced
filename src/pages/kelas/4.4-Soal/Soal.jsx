import DetailK from "../4.1-Kelas/DetailK/DetailK";
import ListKelas from "../4.1-Kelas/ListKelas/ListKelas";
import DetailSoal from "./DetailSoal/DetailSoal";
import ListSoal from "./DetailSoal/ListSoal";
import "./Soal.css";
import playL from "../../../assets/play-l.svg";
import check from "../../../assets/check.svg";
import rangkum from "../../../assets/book.svg";
import quiz from "../../../assets/quiz.svg";

import SoalPretest from "./DetailSoal/SoalPretest.jsx";
import SoalQuiz from "./DetailSoal/SoalQuiz.jsx";
import PopupDone from "../../navbar/components/PopupDone.jsx";
import PopupReview from "../../navbar/components/PopupReview.jsx";
import Container from "../../navbar/Container.jsx";

export default function Soal() {
  return (
    <>
      <Container>
        <div>
          {/* <SoalQuiz /> */}
          <SoalPretest />
          {/* <PopupDone /> */}
          {/* <PopupReview /> */}
        </div>
      </Container>
    </>
  );
}
