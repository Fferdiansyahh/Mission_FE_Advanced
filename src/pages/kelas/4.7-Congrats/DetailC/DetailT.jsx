import AturanImg1 from "../../../../assets/card-1.jpeg";

import AturanImgU1 from "/src/assets/u-1.png";
import Loop from "/src/assets/loop.png";
import Benar from "/src/assets/check.svg";
import Salah from "/src/assets/ceklis_x.png";
import Kelas from "../../4.1-Kelas/Kelas";

export default function DetailT(props) {
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
      <div className="max-w-full mx-auto mt-10 p-20 bg-white  rounded-2xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Tanggal {detail[0].Kelas}:
        </h2>
        <p className="text-gray-600 pb-6">23 September 2022, 10:20 AM</p>

        <div className="grid grid-cols-4 bg-white border border-kedua  overflow-hidden mb-6">
          <div className="flex flex-col  justify-center bg-red-500 text-white p-4 gap-2">
            <div className="text-sm">Nilai</div>
            <div className="text-3xl font-bold">20</div>
          </div>
          <div className="flex flex-col  justify-center p-4 gap-2">
            <div className="text-sm text-gray-500">Soal</div>
            <div className="text-2xl font-semibold text-gray-800">10</div>
          </div>
          <div className="flex flex-col  justify-center p-4 gap-2 border border-x-kedua border-y-transparent">
            <div className="text-sm text-gray-500  ">Benar</div>
            <div className="text-2xl font-semibold text-green-600 flex items-center">
              <img className="mr-2" src={Benar} alt="benar" />2
            </div>
          </div>
          <div className="flex flex-col  justify-center p-4 gap-2">
            <div className="text-sm text-gray-500 ">Salah</div>
            <div className="text-2xl font-semibold text-green-600 flex items-center">
              <img className="mr-2" src={Salah} alt="salah" />8
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold ">Sedikit Lagi!</h1>
          <p className="text-gray-600">
            Kamu sudah menyelesaikan {detail[0].Kelas} dengan baik namun nilaimu
            belum cukup untuk melanjutkan materi.
          </p>
          <p className="text-gray-600 pt-5">
            Pelajari kembali modul sebelumnya dan kerjakan kembali{" "}
            {detail[0].kelas} ini !
          </p>
          <a className="flex gap-4 px-7 py-3 border items-center border-pertama w-max rounded-xl mt-5">
            <img className=" h-4" src={Loop} />
            <p className="text-pertama text-semibold">Ulangi Quiz</p>
          </a>
        </div>
      </div>
    </>
  );
}
