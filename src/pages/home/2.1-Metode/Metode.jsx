import "./Metode.css";
import React, { useState, useEffect } from "react";
import ImgBuy from "../../../assets/card-1.jpeg";
import DetailProductBuy from "../1.3-Detail-Product/DetailProductBuy/DetailProductBuy";
import MetodeBayar from "./MetodeBayar/MetodeBayar";
import Rincian from "./Rincian/Rincian";
import Container from "../../navbar/Container";

import useActivePage from "../../../data/useActivePage";
import Stepper from "../1.2-All-Product/components/Stepper1";

export default function Metode() {
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
  const activePage = useActivePage();
  return (
    <>
      <Container>
        <div className="w-dvw">
        <div className="hidden max-sm:block w-full  mt-25">
          <Stepper activePage={activePage} />
        </div>
        <div className="met-des">
          <div className="met">
            <MetodeBayar mete="Metode Pembayaran" display="none" />
            <Rincian display="none" link="/bayar" />
          </div>

          <div className="met-des-2">
            {isMobile ? (
              <DetailProductBuy image={ImgBuy} display="none" dis="none" />
            ) : (
              <DetailProductBuy image={ImgBuy} display="block" dis="none" />
            )}
          </div>
        </div>
        </div>
      </Container>
    </>
  );
}
