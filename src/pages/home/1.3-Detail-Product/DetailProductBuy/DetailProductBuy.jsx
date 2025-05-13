import "./DetailProductBuy.css";
import Image from "../../../../assets/bg-1.jpeg";

export default function DetailProductBuy(props) {
  const { image, display, dis, tit = "Beli Sekarang" } = props;
  return (
    <div className="course-card-details">
      <img
        src={image}
        alt="Course Image"
        className="course-image"
        style={{ display: `${display}` }}
      />
      <h2 className="course-title">
        Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
      </h2>
      <div className="price-discount">
        <div>
          <span className="discounted-price">Rp 250K</span>
          <span className="original-price">Rp 500K</span>
        </div>
        <span className="discount-badge">Diskon 50%</span>
      </div>
      <p className="special-offer">Penawaran spesial tersisa 2 hari lagi!</p>
      <a href="/metode" style={{ textDecoration: "none", color: "inherit" }}>
        <button className="buy-button" style={{ display: `${dis}` }}>
          Beli Sekarang
        </button>
      </a>

      <div className="included-items">
        <h3 className="included-title">Kelas Ini Sudah Termasuk</h3>
        <div className="item-grid">
          <div className="item">
            <span className="item-icon">📄</span>
            <span>Ujian Akhir</span>
          </div>
          <div className="item">
            <span className="item-icon">🎬</span>
            <span>49 Video</span>
          </div>
          <div className="item">
            <span className="item-icon">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ width: "1em", height: "1em", verticalAlign: "middle" }}
              >
                <path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-6l-2-2zM13 13h-2v-2h2v2zm0-4h-2V7h2v2z" />
              </svg>
            </span>{" "}
            {/* Contoh SVG untuk dokumen */}
            <span>7 Dokumen</span>
          </div>
          <div className="item">
            <span className="item-icon">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ width: "1em", height: "1em", verticalAlign: "middle" }}
              >
                <path d="M19 5v14H5V5h14m1.1-2H3.9c-.6 0-1.1.5-1.1 1.1v15.7c0 .6.5 1.1 1.1 1.1h16.2c.6 0 1.1-.5 1.1-1.1V4.1c0-.6-.5-1.1-1.1-1.1zM17 12c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" />
              </svg>
            </span>{" "}
            {/* Contoh SVG untuk sertifikat */}
            <span>Sertifikat</span>
          </div>
          <div className="item">
            <span className="item-icon">📝</span>
            <span>Pretest</span>
          </div>
        </div>
      </div>

      <div className="language">
        <h3 className="language-title">Bahasa Pengantar</h3>
        <div className="language-item">
          <span className="language-icon">🌐</span>
          <span>Bahasa Indonesia</span>
        </div>
      </div>
    </div>
  );
}
