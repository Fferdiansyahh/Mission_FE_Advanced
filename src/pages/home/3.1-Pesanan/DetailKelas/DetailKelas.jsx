import React from "react";
import Book from "/src/assets/book.svg";
import Bag from "/src/assets/bag.svg";
import Clock from "/src/assets/clock-1.png";
import Profile from "/src/assets/profile.svg";
import ImgKel from "/src/assets/card-6.jpeg";

import ImgU from "/src/assets/u-7.png";
import "./DetailKelas.css";

export default function DetailKelas() {
  const menu = [
    { image: Profile, tit: "Profil Saya" },
    { image: Book, tit: "Kelas Saya" },
    { image: Bag, tit: "Pesanan Saya" },
  ];

  const detail = [
    {
      modul: 12,
      id: 0,
      pg: 100,
      tx: "Selesai",
      bg: "#e0fddf",
      cr: "#38d189",
    },

    {
      modul: 2,
      id: 2,
      pg: 28,
      tx: "Sedang Berjalan",
      bg: "#FFF7D7CC",
      cr: "#FFBD3A",
    },
    {
      modul: 2,
      id: 3,
      pg: 28,
      tx: "Sedang Berjalan",
      bg: "#FFF7D7CC",
      cr: "#FFBD3A",
    },
  ];

  return (
    <>
      {detail.map((item) => (
        <div key={item.id} className="d-k-1">
          <div className="d-k-1-3">
            <div className="d-k-1-3-1">
              <p>{item.modul} /12 Modul </p>{" "}
              <p className="d-k-f">Terselesaikan</p>
            </div>
            <div
              style={{ color: `${item.cr}`, backgroundColor: `${item.bg}` }}
              className="d-k-1-3-2"
            >
              {item.tx}
            </div>
          </div>
          <div className="d-k-1-1">
            <img className="d-k-img" src={ImgKel} alt="#" />
            <div className="d-k-m">
              <h2>Big 4 Auditor Financial Analyst</h2>
              <div className="d-k-t-p">
                <p>
                  Mulai transformasi dengan instruktur profesional, harga yang
                  terjangkau, dan kurikulum terbaik
                </p>
              </div>
              <div className="d-k-1-1-1">
                <a>
                  <img className="d-k-img-u" src={ImgU} alt="#" />
                </a>
                <div>
                  <h3>Jenna Ortega</h3>
                  <div
                    style={{
                      display: "flex",
                      gap: 2,
                    }}
                    className="d-k-1-1-2-1"
                  >
                    <p>Senior Accountant</p>
                    <div className="d-k-p-d">
                      <p>di</p>
                      <h5>Gojek</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-k-1-1-2">
                <img src={Book}></img>
                <p>12 Modul</p>
                <img src={Clock}></img>
                <p>360 Menit</p>
              </div>
            </div>
          </div>
          <div className="d-k-1-2">
            <div className="flex w-full">
              <div className="d-k-bar">
                <p className="whitespace-nowrap">Progres Kelas : </p>
                <h4 className=" flex items-center ">{item.pg}%</h4>
              </div>
              <div className="progress-bar-c">
                <div className="progress-bar-1">
                  <div
                    className="progress-bar-2"
                    style={{ width: `${item.pg}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {item.pg === 100 ? (
              <div className="d-k-1-2-btn">
                <button className="k-btn-1">Unduh Sertifikat</button>
                <button className="k-btn-2">Lihat Kelas Detail</button>
              </div>
            ) : (
              <div className="w-full">
                <a href="/kelas">
                  <button className="k-btn-3">Lanjutan pembelajaran</button>
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
