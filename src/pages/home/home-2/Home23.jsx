import "../../login/Login.css";

import Star1 from "../../../assets/star_1.png";
import Star2 from "../../../assets/star_2.png";
import Star3 from "../../../assets/star_3.png";

export default function Home23(props) {
  const { id, cardImg, CardImgU } = props;
  return (
    <>
      <div key={id} className="card-1">
        <div className="card-1-1">
          <a>
            <img className="card-img" src={cardImg} alt="#" />
          </a>
          <div>
            <h2>Big 4 Auditor Financial Analyst</h2>
            <div className="card-t-p">
              <p>
                Mulai transformasi dengan instruktur profesional, harga yang
                terjangkau, dan kurikulum terbaik
              </p>
            </div>
            <div className="card-1-1-1">
              <a>
                <img className="card-img-u" src={CardImgU} alt="#" />
              </a>
              <div>
                <h3>Jenna Ortega</h3>
                <div
                  style={{
                    display: "flex",
                    gap: 2,
                  }}
                  className="card-1-1-2-1"
                >
                  <p>Senior Accountant</p>
                  <div className="card-p-d">
                    <p>di</p>
                    <h5>Gojek</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-1-2">
          <div className="card-1-1-2">
            <div className="card-1-1-2-1">
              <img src={Star1} alt="#" />
              <img src={Star1} alt="#" />
              <img src={Star2} alt="#" />
              <img src={Star3} alt="#" />
              <img src={Star3} alt="#" />
              <p>3.5(86)</p>
            </div>
            <h1>Rp. 300K</h1>
          </div>
        </div>
      </div>
    </>
  );
}
