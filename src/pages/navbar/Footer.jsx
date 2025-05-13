import LogoBelajar from "../../assets/Logo_Video_ Belajar.png";
import LogoInstagram from "../../assets/ig.png";
import LogoIn from "../../assets/in.png";
import LogoFacebook from "../../assets/fb.png";
import LogoX from "../../assets/x.png";
import "../login/Login.css";

export default function Footer(props) {
  const { dis = "block" } = props;

  return (
    <div style={{ display: dis }} className="footer">
      <div className="footer-1" />
      <div className="f-1">
        <div className="f-1-1">
          <div className="f-1-1-1">
            <div className="mb-1">
              <img src={LogoBelajar} />
            </div>
            <h3>
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </h3>
            <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
            <p>+62-877-7123-1234</p>
          </div>
          <div className="f-1-1-2">
            <div className="f-1-1-2-1">
              <div className="p-h-1" tabIndex={1}>
                <h3>Kategori</h3>
                <p>&gt;</p>
              </div>
              <div className="p-p-1">
                <p>Digital &amp; Teknologi</p>
                <p>Pemasaran</p>
                <p>Manajemen Bisnis</p>
                <p>Pengembangan Diri</p>
                <p>Desain</p>
              </div>
            </div>
            <div className="f-1-1-2-2">
              <div className="p-h-2" tabIndex={1}>
                <h3>Perusahaan</h3>
                <p>&gt;</p>
              </div>
              <div className="p-p-2">
                <p>Tentang Kami</p>
                <p>FAQ</p>
                <p>Kebijakan Privasi</p>
                <p>Ketentuan Layanan</p>
                <p>Bantuan</p>
              </div>
            </div>
            <div className="f-1-1-2-3">
              <div className="p-h-3" tabIndex={1}>
                <h3>Komunitas</h3>
                <p>&gt;</p>
              </div>
              <div className="p-p-3">
                <p>Tips Sukses</p>
                <p>Blog</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="f-1-2">
          <p>@2023 Gerobak Sayur All Rights Reserved.</p>
          <div className="f-2-1">
            <a>
              <img src={LogoIn} />
            </a>
            <a>
              <img src={LogoFacebook} />
            </a>
            <a>
              <img src={LogoInstagram} />
            </a>
            <a>
              <img src={LogoX} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
