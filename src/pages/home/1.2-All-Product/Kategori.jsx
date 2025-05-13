import "./Kategori.css";
import React, { useState } from "react";

import Home23 from "../home-2/Home23";
import Book from "../../../assets/book.png";

import Clock from "../../../assets/clock.png";
import Shop from "../../../assets/shop.png";

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

import Dropdown from "./components/Dropdown/Dropdown";
import DropdownItem from "./components/DropdownItem/DropdownItem";
import Home21 from "../home-2/Home21";
import Container from "../../navbar/Container";

export default function Kategori() {
  const items = [
    { id: 0, des: "Harga Rendah" },
    { id: 1, des: "Harga Tinggi" },
    { id: 2, des: "A to Z" },
    { id: 3, des: "Z to A" },
    { id: 4, des: "Rating Tertinggi" },
    { id: 5, des: "Rating Terendah" },
  ];
  const dat = [2, 3, 4, 5, 6];
  const filter1 = [
    "Pemasaran",
    "Digital & Teknologi",
    "Pengembangan Diri",
    "Bisnis Managemen",
  ];
  const filter2 = ["Kurang dari 4 Jam", "4- Jam", "Lebih dari 8 Jam"];

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

  const [isBidangOpen, setIsBidangOpen] = useState(true);
  const [isHargaOpen, setIsHargaOpen] = useState(true);
  const [isDurasiOpen, setIsDurasiOpen] = useState(true);

  const handleBidangClick = () => {
    setIsBidangOpen(!isBidangOpen);
  };
  const handleHargaClick = () => {
    setIsHargaOpen(!isHargaOpen);
  };
  const handleDurasiClick = () => {
    setIsDurasiOpen(!isDurasiOpen);
  };

  return (
    <>
      <Container>
        <div className="kat">
          <Home21 />
          <div className="kategori">
            <div className="kategori-1">
              <div className="k-1-1-1">
                <h6>Filter</h6>
                <p>Reset</p>
              </div>
              <div className="k-1-1-2">
                <div>
                  <a className="k-1-1-2-1" onClick={handleBidangClick}>
                    <img src={Book} alt="#"></img> <h6>Bidang Study</h6>
                  </a>
                  <FaChevronDown
                    className={`arrow-icon ${isBidangOpen ? "open" : ""}`}
                  />
                </div>
                {isBidangOpen && (
                  <div className="k-1-1-2-2">
                    {filter1.map((item) => (
                      <div className="k-1-1-2-2-1">
                        <a></a>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="k-1-1-2">
                <div onClick={handleHargaClick}>
                  <a className="k-1-1-2-1">
                    <img src={Shop} alt="#"></img> <h6>Harga</h6>
                  </a>
                  <FaChevronDown
                    className={`arrow-icon ${isHargaOpen ? "open" : ""}`}
                  />
                </div>
                {isHargaOpen && (
                  <div className="k-1-1-2-2">
                    {filter1.map((item) => (
                      <div className="k-1-1-2-2-1">
                        <a></a>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="k-1-1-2">
                <div>
                  <a className="k-1-1-2-1" onClick={handleDurasiClick}>
                    <img src={Clock} alt="#"></img> <h6>Durasi</h6>
                  </a>
                  <FaChevronDown
                    className={`arrow-icon ${isDurasiOpen ? "open" : ""}`}
                  />
                </div>
                {isDurasiOpen && (
                  <div className="k-1-1-2-2">
                    {filter2.map((item) => (
                      <div className="k-1-1-2-2-1">
                        <a></a>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="kategori-2">
              <div className="kategori-2-1">
                <Dropdown
                  buttonText="Urutkan"
                  content={
                    <>
                      {items.map((item) => (
                        <DropdownItem key={item.id}>{item.des}</DropdownItem>
                      ))}
                    </>
                  }
                />
                <div className="input-wrapper-k">
                  <input placeholder="Cari Kelas"></input>
                  <FaSearch id="search-icon" />
                </div>
              </div>
              <div className="kategori-2-2">
                {data.map((item) => (
                  <Home23 {...item} />
                ))}
              </div>
              <div className="kategori-2-3">
                <a className="kategori-2-3-1">
                  <FaChevronLeft className="icon-page" />
                </a>
                <a className="kategori-2-3-2">
                  <p>1</p>
                </a>
                {dat.map((item) => (
                  <a className="kategori-2-3-3">
                    <p>{item}</p>
                  </a>
                ))}
                <a className="kategori-2-3-1">
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
