import "./UbahMetode.css";
import React, { useState, useEffect } from "react";

import ImgBuy from "../../../assets/card-1.jpeg";
import DetailProductBuy from "../1.3-Detail-Product/DetailProductBuy/DetailProductBuy";
import MetodeBayar from "../2.1-Metode/MetodeBayar/MetodeBayar";
import Rincian from "../2.1-Metode/Rincian/Rincian";
import Time from "../2.1-Metode/Time";
import Container from "../../navbar/Container";

export default function UbahMetode() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Container>
        <div className="ub-des">
          <div className="ub">
            <Rincian
              display="none"
              tit="Bayar Sekarang"
              dis="none"
              tx1="Ringkasan Belanja"
              tx2="Total Harga (3 barang)"
              tx3="Ongkos Kirim"
              link="/detail-pembayaran"
            />
            <MetodeBayar metodee="Tata Cara Pembayaran" display="block" />
          </div>

          <div className="ub-des-2">
            {isMobile ? (
              <DetailProductBuy image={ImgBuy} display="none" dis="none" />
            ) : (
              <DetailProductBuy image={ImgBuy} display="block" dis="none" />
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
