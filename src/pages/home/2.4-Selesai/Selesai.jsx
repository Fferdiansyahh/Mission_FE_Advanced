import "./Selesai.css";
import React, { useState } from "react";

import ImgSelesai from "/src/assets/selesai.png";
import ImgTertunda from "/src/assets/tertunda.png";
import Container from "../../navbar/Container";

export default function Selesai(props) {
  const {
    initialImage = ImgTertunda,
    initialTitle = "Tertunda",
    initialLink = "",
  } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [image, setImage] = useState(initialImage);
  const [title, setTitle] = useState(initialTitle);
  const [link, setLink] = useState(initialLink);

  const handleClickButton = () => {
    setIsVisible(true);
    setImage(ImgSelesai);
    setTitle("Berhasil");
    setLink("/pesanan");
  };

  return (
    <>
      <Container>
        <div className="done">
          <div className="done-1">
            <div className="done-1-1"></div>
            <img src={image} alt="Image_Selesai" />
            <div className="done-1-2">
              <h4>Pembayaran {title}</h4>
              <p className="text">
                Silakan cek email kamu untuk informasi lebih lanjut. Hubungi
                kami jika ada kendala.
              </p>

              {!isVisible && (
                <button className="button" onClick={handleClickButton}>
                  <p>Lihat Detail Pesanan</p>
                </button>
              )}
              {isVisible && (
                <a href={link}>
                  <button className="button">
                    <p>Lihat Detail Pesanan</p>
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
