// hitungHasil.js

export default function hitungHasilUjian(questions, selectedOptions) {
  let totalBenar = 0;

  questions.forEach((question, index) => {
    const selectedId = selectedOptions[index];
    const selectedOption = question.options.find(
      (opt) => opt.id === selectedId
    );

    if (selectedOption?.isCorrect) {
      totalBenar++;
    }
  });

  const totalSoal = questions.length;
  const nilai = Math.round((totalBenar / totalSoal) * 100);

  return {
    totalBenar,
    totalSoal,
    nilai,
  };
}
