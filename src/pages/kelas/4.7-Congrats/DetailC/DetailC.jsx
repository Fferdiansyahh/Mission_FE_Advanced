import AturanImg1 from "../../../../assets/card-1.jpeg";

import AturanImgU1 from "/src/assets/u-1.png";
import Benar from "/src/assets/check.svg";
import Salah from "/src/assets/ceklis_x.png";
import Kelas from "../../4.1-Kelas/Kelas";

export default function DetailC(props) {
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
          <div className="flex flex-col  justify-center bg-green-400 text-white p-4 gap-2">
            <div className="text-sm">Nilai</div>
            <div className="text-3xl font-bold">100</div>
          </div>
          <div className="flex flex-col  justify-center p-4 gap-2">
            <div className="text-sm text-gray-500">Soal</div>
            <div className="text-2xl font-semibold text-gray-800">10</div>
          </div>
          <div className="flex flex-col  justify-center p-4 gap-2 border border-x-kedua border-y-transparent">
            <div className="text-sm text-gray-500  ">Benar</div>
            <div className="text-2xl font-semibold text-green-600 flex items-center">
              <img className="mr-2" src={Benar} alt="benar" />
              10
            </div>
          </div>
          <div className="flex flex-col  justify-center p-4 gap-2">
            <div className="text-sm text-gray-500 ">Salah</div>
            <div className="text-2xl font-semibold text-green-600 flex items-center">
              <img className="mr-2" src={Salah} alt="benar" />
              10
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold ">Selesai!</h1>
          <p className="text-gray-600">
            {detail[0].Kelas} sudah selesai dan kami sudah mengetahui progresmu.
          </p>
          <p className="text-gray-600 pt-5">Saatnya memulai kelas!</p>
        </div>
      </div>
    </>
  );
}
