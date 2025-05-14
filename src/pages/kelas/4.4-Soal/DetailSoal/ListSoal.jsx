import React, { useState } from "react";

export default function ListSoal({
  activeQuestionId,
  selectedOptions,
  onSelectQuestion,
  questions,
}) {
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <>
      <section>
        <div className="py-6 px-9 space-y-4 w-90 max-sm:w-full border border-kedua">
          <h2 className="text-lg font-semibold">List Soal</h2>
          <div className="grid grid-cols-5 gap-4 justify-between w-full !box-border">
            {questions.map((question, index) => (
              <div
                key={question.id}
                onClick={() => onSelectQuestion(question.id)} // Menangani klik soal
                className={`relative w-11.5 h-11.5 flex items-center justify-center rounded border text-black overflow-hidden cursor-pointer
                  ${
                    question.id === activeQuestionId
                      ? "bg-orange-100 border-orange-500 text-black"
                      : "bg-white border-gray-300 text-gray-800"
                  }
                  ${selectedOptions[index] ? "border-green-500" : ""}
                `}
              >
                {question.id}
                {selectedOptions[index] !== undefined && (
                  <div className="absolute top-0 right-0 border-t-[17.25px] border-l-[17.25px] border-t-yellow-300 border-l-transparent"></div>
                )}
              </div>
            ))}
          </div>

          {/* Box informasi */}
          <div className="p-4 bg-blue-50 border border-blue-500 rounded text-blue-500 text-sm !w-full">
            Selesaikan semua soal untuk mengakhiri quiz
          </div>
        </div>
      </section>
    </>
  );
}
