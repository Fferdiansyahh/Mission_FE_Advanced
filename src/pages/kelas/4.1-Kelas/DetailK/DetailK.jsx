import "./DetailK.css";

import KelasImg1 from "../../../../assets/card-1.jpeg";

import KelasImgU1 from "../../../../assets/u-1.png";

export default function DetailK() {
  const data = [
    {
      id: 0,
      kelasImg: KelasImg1,
      KelasImgU: KelasImgU1,
    },
  ];
  return (
    <>
      <div className="dkelas-1">
        <div className="kelas-d-1-1">
          <h5 className="text-xl font-semibold">
            Praktikkan Skill dengan Technical Book
          </h5>
          <p>
            Pelajari dan praktikkan skill teknis dalam berbagai industri dengan
            Technical Book Riselearn
          </p>
          <div className="kelas-d-1-1-1">
            <a>
              <img className="kelas-img-u" src={KelasImgU1} alt="#" />
            </a>
            <div>
              <h3>Gregorius Edrik Lawanto</h3>
              <div
                style={{
                  display: "flex",
                  gap: 2,
                }}
                className="kelas-d-1-1-2-1"
              >
                <p>Senior Accountant di</p>
                <p className="font-semibold text-gray-900">Gojek</p>
              </div>
            </div>
          </div>

          <div className="kelas-d-1-1-2-1">
            <h2 className="kelas-s-1">★</h2>
            <h2 className="kelas-s-1">★</h2>
            <h2 className="kelas-s-1">★</h2>
            <h2 className="kelas-s-2">★</h2>
            <h2 className="kelas-s-2">★</h2>
            <p className="pt-2">3.5(86)</p>
          </div>
        </div>
      </div>
    </>
  );
}
