import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


export default function DetailSoal(props) {
  const {
    currentQuestionIndex,
    questions,
    selectedOptions,
    handleOptionSelect,
    handleNext,
    handlePrevious,
    handleNextClick,
  } = props;

  const currentQuestion = questions[currentQuestionIndex];
  const isAllAnswered =
    Object.keys(selectedOptions).length === questions.length;

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const canShowPopup = isLastQuestion && isAllAnswered;
  const canGoNext = !isLastQuestion;
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <section>
      <div className="flex flex-col  justify-between max-w-168 h-full py-9 max-sm:py-6  px-16 max-sm:px-6 bg-white  border border-kedua ">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Pertanyaan {currentQuestion.id}
          </h1>
          <p className="text-lg text-gray-500 !text-left !mb-5">
            {currentQuestion.question}
          </p>

          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <div
                key={option.id}
                className={`flex items-center p-4.5 border rounded cursor-pointer transition-all ${
                  selectedOptions[currentQuestionIndex] === option.id
                    ? "border-pertama bg-white"
                    : "border-gray-300 hover:border-pertama hover:bg-green-50"
                }`}
                onClick={() => handleOptionSelect(option.id)}
              >
                <div
                  className={`flex items-center justify-center w-5 h-5 rounded-full border mr-3 ${
                    selectedOptions[currentQuestionIndex] === option.id
                      ? "border-pertama bg-keempat"
                      : "border-pertama"
                  }`}
                >
                  {selectedOptions[currentQuestionIndex] === option.id && (
                    <div className="w-3 h-3 rounded-full bg-pertama"></div>
                  )}
                </div>
                <p
                  htmlFor={`option-${option.id}`}
                  className={`flex-1 cursor-pointer !text-left ${
                    selectedOptions[currentQuestionIndex] === option.id
                      ? "text-pertama font-medium"
                      : "text-gray-600"
                  }`}
                >
                  {option.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between gap-4 pt-4 ">
          <a
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`flex flex-row items-center w-full justify-center gap-2 px-4 py-2 rounded-xl transition-colors border ${
              currentQuestion.id > 1
                ? "bg-white border-pertama cursor-pointer"
                : "bg-gray-200 text-gray-400 border-1 border-gray-400 "
            }`}
          >
            <FaArrowLeft className="text-pertama" />
            <p
              className={`font-bold textbase  ${
                currentQuestion.id > 1 ? "text-pertama" : "text-gray-400 "
              }`}
            >
              Sebelumnya
            </p>
          </a>

          <a
            onClick={handleNextClick}
            disabled={!isAllAnswered}
            className={`flex flex-row items-center w-full  justify-center gap-2 px-4 py-2 rounded-xl transition-colors border border-pertama ${
              isAllAnswered
                ? "bg-yellow-300 hover:bg-yellow-400 hover:cursor-pointer border-amber-300"
                : "bg-pertama text-gray-400 hover:cursor-pointer  "
            }`}
          >
            <p className="text-white font-bold  textbase">
              {isAllAnswered ? "Selesaikan" : "Selanjutnya"}
            </p>
            <FaArrowRight className="text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
