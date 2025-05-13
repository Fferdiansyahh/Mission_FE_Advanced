import "./Pesanan.css";
import React, { useState } from "react";

import MenuPesanan from "./Menu/MenuPesanan";

import DetailProfile from "./Profile/DetailProfile";
import Container from "../../navbar/Container";
export default function ProfilSaya() {
  const items = [
    { id: 0, des: "Harga Rendah" },
    { id: 1, des: "Harga Tinggi" },
    { id: 2, des: "A to Z" },
    { id: 3, des: "Z to A" },
    { id: 4, des: "Rating Tertinggi" },
    { id: 5, des: "Rating Terendah" },
  ];
  const dat = [2, 3, 4, 5, 6];

  const item = [
    {
      id: 0,
      tit: "Daftar Pesanan",
      des: "Infomasi terperenci mengenai pembelian",
    },
  ];

  return (
    <>
      <Container>
        <div className="pes">
          <div className="pesanan">
            <MenuPesanan item={item} />
            <DetailProfile />
          </div>
        </div>
      </Container>
    </>
  );
}
