import ListKelas from "../../4.1-Kelas/ListKelas/ListKelas";
import DetailSoal from "../DetailSoal/DetailSoal";
import ListSoal from "../DetailSoal/ListSoal";
import "../Soal.css";
import check from "/src/assets/check.svg";
import quiz from "/src/assets/quiz.svg";
import Footer1 from "../../../navbar/Footer-1";
// import questions from "../../../../data/soal";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import hitungHasilUjian from "../../../../data/hitungHasil";
import PopupDone from "../../../navbar/components/PopupDone";
import { HasilUjianContext } from "../../../../data/HasilUjianContext.jsx";
import ambilSemuaSoalFirestore from "../../../../firebase/ambilSoal.js";
import useFetchSoal from "../../../../hooks/useFetchSoal.js";

export default function SoalPretest() {
  const [showPopup, setShowPopup] = useState(false);
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

  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});

  const { questions, loading, error } = useFetchSoal("questions"); // Gunakan custom hook

  const handleOptionSelect = (optionId) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionId,
    }));
  };

  const handleNext = () => {
    if (Object.keys(selectedOptions).length === questions.length) {
    } else {
      setCurrentQuestionIndex((prev) =>
        Math.min(prev + 1, questions.length - 1)
      );
    }
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleSelectQuestion = (questionId) => {
    const index = questions.findIndex((q) => q.id === questionId);
    if (index !== -1) {
      setCurrentQuestionIndex(index);
    }
  };

  const handleNextClick = () => {
    if (isAllAnswered && currentQuestionIndex === questions.length - 1) {
      setShowPopup(true);
    } else {
      handleNext();
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const { setHasilUjian } = useContext(HasilUjianContext);

  const handleConfirmSelesai = () => {
    const hasilPerhitungan = hitungHasilUjian(questions, selectedOptions);
    setHasilUjian(hasilPerhitungan); // simpan ke global context
    navigate("/result", { state: { hasilUjian: hasilPerhitungan } });
    setShowPopup(false);
  };

  const isAllAnswered =
    Object.keys(selectedOptions).length === questions.length;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  if (loading) {
    return <div>Memuat soal...</div>;
  }

  return (
    <>
      <div>
        <main className="flex flex-row flex-1 w-full h-max box-border bg-white max-sm:flex-col">
          <ListSoal
            activeQuestionId={questions[currentQuestionIndex].id}
            selectedOptions={selectedOptions}
            onSelectQuestion={handleSelectQuestion}
            questions={questions}
          />

          <DetailSoal
            currentQuestionIndex={currentQuestionIndex}
            questions={questions}
            selectedOptions={selectedOptions}
            handleOptionSelect={handleOptionSelect}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            handleNextClick={handleNextClick}
          />
          <Footer1
            left="Foundations of User Experience Design"
            right="Foundations of User Experience Design"
            dis="flex"
            disp="hidden"
          />

          <ListKelas dataKelas={dataKelas} />
        </main>
      </div>

      {showPopup && (
        <PopupDone
          isOpen={showPopup}
          onClose={handleClosePopup}
          onConfirm={handleConfirmSelesai} // Kirimkan fungsi ini untuk navigasi
          selectedOptions={selectedOptions}
        />
      )}
    </>
  );
}
