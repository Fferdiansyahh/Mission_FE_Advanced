import "../../login/Login.css";
import Home21 from "./Home21";
import Home22 from "./Home22";
import Home23 from "./Home23";
import dataCard from "../../../data/kelas";

export default function Home2() {
  return (
    <div className="beranda-2">
      <Home21 />
      <Home22 />
      <div className="b-2-3">
        {dataCard.map((item) => (
          <a
            href="/detail-product"
            key={item.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Home23 cardImg={item.cardImg} CardImgU={item.CardImgU} />
          </a>
        ))}
      </div>
    </div>
  );
}
