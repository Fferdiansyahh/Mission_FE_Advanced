import "../login/Login.css";
import CardImg1 from "../../assets/card-1.jpeg";
import CardImg2 from "../../assets/card-2.jpeg";
import CardImgU1 from "../../assets/u-1.png";
import CardImgU2 from "../../assets/u-2.png";
import Star1 from "../../assets/star_1.png";
import Star2 from "../../assets/star_2.png";
import Star3 from "../../assets/star_3.png";

export default function Home3() {
  return (
    <div className="beranda-3">
      <div className="b-3">
        <div className="b-3-1">
          <h2>NEWSLETTER</h2>
          <h1>Mau Belajar Lebih Banyak?</h1>
          <p>
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
            spesial dari program-program terbaik hariesok.id
          </p>
        </div>
        <div className="cta-wrapper">
          <input
            className="cta-input"
            type="text"
            id="ctaEmail"
            placeholder="Masukkan Emailmu"
          />
          
            <button className="absolute transform translate-y-1 -translate-x-30 max-sm:-translate-x-0 " >
              Subscribe
            </button>
         
        </div>
      </div>
    </div>
  );
}
