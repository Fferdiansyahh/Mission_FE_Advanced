//  const handleUpload = async () => {
//     try {
//       const questionsCollectionRef = collection(db, "questions");
//       for (const question of questions) {
//         await addDoc(questionsCollectionRef, question);
//         console.log(
//           `Pertanyaan dengan ID ${question.id} berhasil ditambahkan.`
//         );
//       }
//       alert("Semua pertanyaan berhasil diupload ke Firebase!");
//     } catch (error) {
//       console.error("Error menambahkan pertanyaan ke Firebase:", error);
//       alert("Terjadi kesalahan saat mengupload pertanyaan ke Firebase.");
//     }
//   };

{/* <div>
  <button className="!bg-amber-400 !items-center " onClick={handleUpload}>
    Upload Pertanyaan ke Firebase
  </button>
</div>; */}

const questions = [
  {
    id: 1,
    question:
      "Memikirkan dan mengantisipasi secara teliti adanya user secara tidak sengaja mengutak-atik konfigurasi, namun dapat diatasi dengan membuat default yang mengurangi kepanikan pada user adalah pengertian dari ...",
    options: [
      { id: 1, text: "Memikirkan tentang default *", isCorrect: true },
      {
        id: 2,
        text: "Mempertimbangkan page layout berdasarkan suatu tujuan tertentu",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Memasitkan bahwa sistem berjalan sesuai dengan apa yang terjadi saat itu juga",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Menciptakan konsistensi dan menggunakan elemen UI umum",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    question:
      "Memikirkan dan mengantisipasi secara teliti adanya user secara tidak sengaja mengutak-atik konfigurasi, namun dapat diatasi dengan membuat default yang mengurangi kepanikan pada user adalah pengertian dari ...",
    options: [
      { id: 1, text: "Memikirkan tentang default *", isCorrect: true },
      {
        id: 2,
        text: "Mempertimbangkan page layout berdasarkan suatu tujuan tertentu",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Memasitkan bahwa sistem berjalan sesuai dengan apa yang terjadi saat itu juga",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Menciptakan konsistensi dan menggunakan elemen UI umum",
        isCorrect: false,
      },
    ],
  },

  {
    id: 3,
    question:
      "Memikirkan dan mengantisipasi secara teliti adanya user secara tidak sengaja mengutak-atik konfigurasi, namun dapat diatasi dengan membuat default yang mengurangi kepanikan pada user adalah pengertian dari ...",
    options: [
      { id: 1, text: "Memikirkan tentang default *", isCorrect: true },
      {
        id: 2,
        text: "Mempertimbangkan page layout berdasarkan suatu tujuan tertentu",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Memasitkan bahwa sistem berjalan sesuai dengan apa yang terjadi saat itu juga",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Menciptakan konsistensi dan menggunakan elemen UI umum",
        isCorrect: false,
      },
    ],
  },

  {
    id: 4,
    question:
      "Memikirkan dan mengantisipasi secara teliti adanya user secara tidak sengaja mengutak-atik konfigurasi, namun dapat diatasi dengan membuat default yang mengurangi kepanikan pada user adalah pengertian dari ...",
    options: [
      { id: 1, text: "Memikirkan tentang default *", isCorrect: true },
      {
        id: 2,
        text: "Mempertimbangkan page layout berdasarkan suatu tujuan tertentu",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Memasitkan bahwa sistem berjalan sesuai dengan apa yang terjadi saat itu juga",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Menciptakan konsistensi dan menggunakan elemen UI umum",
        isCorrect: false,
      },
    ],
  },

  {
    id: 5,
    question:
      "Memikirkan dan mengantisipasi secara teliti adanya user secara tidak sengaja mengutak-atik konfigurasi, namun dapat diatasi dengan membuat default yang mengurangi kepanikan pada user adalah pengertian dari ...",
    options: [
      { id: 1, text: "Memikirkan tentang default *", isCorrect: true },
      {
        id: 2,
        text: "Mempertimbangkan page layout berdasarkan suatu tujuan tertentu",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Memasitkan bahwa sistem berjalan sesuai dengan apa yang terjadi saat itu juga",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Menciptakan konsistensi dan menggunakan elemen UI umum",
        isCorrect: false,
      },
    ],
  },
  {
    id: 6,
    question:
      "Memikirkan dan mengantisipasi secara teliti adanya user secara tidak sengaja mengutak-atik konfigurasi, namun dapat diatasi dengan membuat default yang mengurangi kepanikan pada user adalah pengertian dari ...",
    options: [
      { id: 1, text: "Memikirkan tentang default *", isCorrect: true },
      {
        id: 2,
        text: "Mempertimbangkan page layout berdasarkan suatu tujuan tertentu",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Memasitkan bahwa sistem berjalan sesuai dengan apa yang terjadi saat itu juga",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Menciptakan konsistensi dan menggunakan elemen UI umum",
        isCorrect: false,
      },
    ],
  },
  {
    id: 7,
    question:
      "Memikirkan dan mengantisipasi secara teliti adanya user secara tidak sengaja mengutak-atik konfigurasi, namun dapat diatasi dengan membuat default yang mengurangi kepanikan pada user adalah pengertian dari ...",
    options: [
      { id: 1, text: "Memikirkan tentang default *", isCorrect: true },
      {
        id: 2,
        text: "Mempertimbangkan page layout berdasarkan suatu tujuan tertentu",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Memasitkan bahwa sistem berjalan sesuai dengan apa yang terjadi saat itu juga",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Menciptakan konsistensi dan menggunakan elemen UI umum",
        isCorrect: false,
      },
    ],
  },
  {
    id: 8,
    question:
      "Memikirkan dan mengantisipasi secara teliti adanya user secara tidak sengaja mengutak-atik konfigurasi, namun dapat diatasi dengan membuat default yang mengurangi kepanikan pada user adalah pengertian dari ...",
    options: [
      { id: 1, text: "Memikirkan tentang default *", isCorrect: true },
      {
        id: 2,
        text: "Mempertimbangkan page layout berdasarkan suatu tujuan tertentu",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Memasitkan bahwa sistem berjalan sesuai dengan apa yang terjadi saat itu juga",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Menciptakan konsistensi dan menggunakan elemen UI umum",
        isCorrect: false,
      },
    ],
  },
  {
    id: 9,
    question:
      "Memikirkan dan mengantisipasi secara teliti adanya user secara tidak sengaja mengutak-atik konfigurasi, namun dapat diatasi dengan membuat default yang mengurangi kepanikan pada user adalah pengertian dari ...",
    options: [
      { id: 1, text: "Memikirkan tentang default *", isCorrect: true },
      {
        id: 2,
        text: "Mempertimbangkan page layout berdasarkan suatu tujuan tertentu",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Memasitkan bahwa sistem berjalan sesuai dengan apa yang terjadi saat itu juga",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Menciptakan konsistensi dan menggunakan elemen UI umum",
        isCorrect: false,
      },
    ],
  },
  {
    id: 10,
    question:
      "Memikirkan dan mengantisipasi secara teliti adanya user secara tidak sengaja mengutak-atik konfigurasi, namun dapat diatasi dengan membuat default yang mengurangi kepanikan pada user adalah pengertian dari ...",
    options: [
      { id: 1, text: "Memikirkan tentang default *", isCorrect: true },
      {
        id: 2,
        text: "Mempertimbangkan page layout berdasarkan suatu tujuan tertentu",
        isCorrect: false,
      },
      {
        id: 3,
        text: "Memasitkan bahwa sistem berjalan sesuai dengan apa yang terjadi saat itu juga",
        isCorrect: false,
      },
      {
        id: 4,
        text: "Menciptakan konsistensi dan menggunakan elemen UI umum",
        isCorrect: false,
      },
    ],
  },
];

export default questions;
