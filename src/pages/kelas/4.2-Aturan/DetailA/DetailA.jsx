import AturanImg1 from "../../../../assets/card-1.jpeg";

import AturanImgU1 from "../../../../assets/u-1.png";
import Kelas from "../../4.1-Kelas/Kelas";

export default function DetailA(props) {
  const {
    detail = [{ Kelas, Durasi, Syarat }],
    data = [
      {
        id: 0,
        AturanImg: AturanImg1,
        AturanImgU: AturanImgU1,
      },
    ],
  } = props;
  return (
    <>
      <div className=" bg-white  max-w-full py-9 px-30 max-sm:p-6 mx-auto !text-left">
        <h2 className="text-xl font-bold mb-4">Aturan</h2>

        <p className="text-gray-600 mb-4 !text-left ">
          Kerjakan {detail[0].Kelas} dengan sebaik mungkin untuk mengukur
          pemahaman terkait materi yang telah kamu pelajari
        </p>
        <p className="text-gray-600 !mb-0.5 !text-left">
          Syarat Nilai Kelulusan: {detail[0].Syarat}
        </p>
        <p className="text-gray-600  !mb-4 !text-left">{detail[0].Durasi}</p>

        <p className="text-gray-600 !mb-6 !text-left">
          Kerjakan dengan sebaik mungkin untuk mencapai skor minimal agar kamu
          dapat melanjutkan ke modul berikutnya
        </p>
        <a href="/soal">
          <button
            className=" bg-pertama !w-max text-white !bg-pertama font-semibold border-none !border-pertama !py-2.5 !px-6.5 !rounded-xl
          hover:cursor-pointer outline-none"
          >
            Mulai {detail[0].Kelas}
          </button>
        </a>
      </div>
    </>
  );
}
