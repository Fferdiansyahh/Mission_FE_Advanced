import React, { useState, useRef } from "react";
import "./Rincian.css"; // Impor file CSS
import imgBank from "../../../../assets/bca_logo.png";

export default function rincian(props) {
  const {
    display,
    dis = "flex",
    tit = "Beli Sekarang",
    link = "/detail-pembayaran",
    to = "#",
    tx1 = "Ringkasan Pesanan",
    tx2 = `Video Learning: Gapai Karier Impianmu sebagai Seorang UI/UX Designer &
          Product Manager.`,
    tx3 = "Biaya Admin",
  } = props;

  const [notification, setNotification] = useState("");

  const handleCopyToClipboard = () => {
    const textToCopy = document.getElementById("copyable-text").innerText;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setNotification("Copy to clipboard!");
        setTimeout(() => {
          setNotification("");
        }, 3000);
      })
      .catch((err) => {
        console.error("Gagal menyalin teks: ", err);
        setNotification("Gagal menyalin teks.");
        setTimeout(() => {
          setNotification("");
        }, 3000);
      });
  };

  return (
    <div className="order-card">
      <div className="m-b" style={{ display: `${display}` }}>
        <h4>Metode Pembayaran</h4>
        <div className="m-b-1">
          <img src={imgBank} alt="Bank BCA" />
          <h6>Bayar melalui Virtual Account BCA</h6>
          <div>
            <p id="copyable-text">11739 081234567890</p>
            <div
              onClick={handleCopyToClipboard}
              style={{
                cursor: "pointer",
              }}
            >
              <h7>Salin</h7>
            </div>
            {notification && (
              <div
                style={{
                  marginTop: "50px",
                  color: "gray",
                  position: "absolute",
                  textAlign: "center",
                }}
              >
                {notification}
              </div>
            )}
          </div>
        </div>
      </div>
      <h4 className="card-title">{tx1}</h4>
      <div className="card-item">
        <span className="span1">{tx2}</span>
        <span className="span2">Rp 767.500</span>
      </div>
      <div className="card-item">
        <span className="span1">{tx3}</span>
        <span className="span2">Rp 7.000</span>
      </div>
      <hr className="card-divider" />
      <div className="card-total">
        <span className="span1">Total Pembayaran</span>
        <span className="span22">Rp 774.500</span>
      </div>
      <div className="ganti-bayar" style={{ display: `${dis}` }}>
        <button className="buy-button1" style={{ display: `${display}` }}>
          <a href={to}>
            <p>Ganti Metode Pembayaran</p>
          </a>
        </button>
        <a href={link}>
          <button className="buy-button">{tit}</button>
        </a>
      </div>
    </div>
  );
}
