import "./Des2Card.css";

import CardImg1 from "../../../../../assets/card-1.jpeg";
import CardImgU1 from "../../../../../assets/u-1.png";

export default function Des2Card() {
  const data = [
    {
      id: 0,
      cardImg: CardImg1,
      CardImgU: CardImgU1,
    },
  ];
  return (
    <>
      <div className="dcard-1">
        <div className="card-d-1-1">
          <div className="card-d-1-1-1">
            <a>
              <img className="card-img-u" src={CardImgU1} alt="#" />
            </a>
            <div>
              <h3>Gregorius Edrik Lawanto</h3>
              <div
                style={{
                  display: "flex",
                  gap: 2,
                }}
                className="card-d-1-1-2-1"
              >
                <p>Senior Talent Acquisition</p>
                <div className="card-p-d">
                  <p>di</p>
                  <h5>WingsGroup</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="card-d-t-p">
            <p>
              Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja
              sebagai Senior Talent Acquisition Specialist di Wings Group
              Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
