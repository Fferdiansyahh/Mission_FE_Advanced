import "./Pesanan.css";
import React, { useState } from "react";

import CardImg1 from "../../../assets/card-1.jpeg";
import CardImg2 from "../../../assets/card-2.jpeg";
import CardImg3 from "../../../assets/card-3.jpeg";
import CardImg4 from "../../../assets/card-4.jpeg";
import CardImg5 from "../../../assets/card-5.jpeg";
import CardImg6 from "../../../assets/card-6.jpeg";
import CardImgU1 from "../../../assets/u-1.png";
import CardImgU2 from "../../../assets/u-2.png";
import CardImgU3 from "../../../assets/u-3.png";
import CardImgU4 from "../../../assets/u-4.png";
import CardImgU5 from "../../../assets/u-5.png";
import CardImgU6 from "../../../assets/u-6.png";
import {
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";

import MenuPesanan from "./Menu/MenuPesanan";

import DetailProfile from "./Profile/DetailProfile";
import Container from "../../navbar/Container";
import Search from "./Search/Search";
import Home22 from "../home-2/Home22";
import DetailKelas from "./DetailKelas/DetailKelas";
export default function KelasSaya() {
  const item = [
    {
      id: 0,
      tit: "Daftar Pesanan",
      des: "Infomasi terperenci mengenai pembelian",
    },
  ];

  const dat = [2, 3, 4, 5, 6];

  const itemKelas = ["Semua Kelas", "Sedang Berjalan", "Selesai"];

  const data = [
    {
      id: 0,
      cardImg: CardImg1,
      CardImgU: CardImgU1,
    },
    {
      id: 1,
      cardImg: CardImg2,
      CardImgU: CardImgU2,
    },
    {
      id: 2,
      cardImg: CardImg3,
      CardImgU: CardImgU3,
    },
    {
      id: 3,
      cardImg: CardImg4,
      CardImgU: CardImgU4,
    },
    {
      id: 4,
      cardImg: CardImg5,
      CardImgU: CardImgU5,
    },
    {
      id: 5,
      cardImg: CardImg6,
      CardImgU: CardImgU6,
    },
  ];

  return (
    <>
      <Container>
        <div className="pes">
          <div className="pesanan">
            <MenuPesanan item={item} />

            <div className="pesanan-2">
              <div className="pesanan-2-u">
                <Home22 categories={itemKelas} wd="full" />
                <Search />
              </div>
              <div className="pesanan-2-2">
                <DetailKelas />
              </div>

              <div className="pesanan-2-3">
                <a className="pesanan-2-3-1">
                  <FaChevronLeft className="icon-page" />
                </a>
                <a className="pesanan-2-3-2">
                  <p>1</p>
                </a>
                {dat.map((item) => (
                  <a className="pesanan-2-3-3">
                    <p>{item}</p>
                  </a>
                ))}
                <a className="pesanan-2-3-1">
                  <FaChevronRight className="icon-page" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
