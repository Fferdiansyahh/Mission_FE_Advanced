import React from "react";
import Book from "/src/assets/book.svg";
import Bag from "/src/assets/bag.svg";
import Profile from "/src/assets/profile.svg";
import ImgPes from "/src/assets/p-1.png";
import "./DetailPesanan.css";

export default function DetailPesanan(props) {
  const {
    title = "Daftar Pesanan",
    des = "Infomasi terperenci mengenai pembelian",
  } = props;

  const menu = [
    { image: Profile, tit: "Profil Saya" },
    { image: Book, tit: "Kelas Saya" },
    { image: Bag, tit: "Pesanan Saya" },
  ];

  const detail = [
    {
      id: 0,
      tx: "Berhasil",
      bg: "#e0fddf",
      cr: "#38d189",
    },
    {
      id: 1,
      tx: "Gagal",
      bg: "#FCE3D1",
      cr: "#FF5C2B",
    },
    {
      id: 2,
      tx: "Belum bayar",
      bg: "#FFF7D7CC",
      cr: "#FFBD3A",
    },
    {
      id: 3,
      tx: "Berhasil",
      bg: "#e0fddf",
      cr: "#38d189",
    },
    {
      id: 4,
      tx: "Berhasil",
      bg: "#e0fddf",
      cr: "#38d189",
    },
  ];
  const { id, dpImg, dpImgU } = props;
  return (
    <>
      {detail.map((item) => (
        <div key={item.id} className="d-p-1">
          <div className="d-p-1-3">
            <div className="d-p-1-3-1">
              <div className="d-p-p">
                <p>No. Invoice: </p>
              </div>
              <a>Hel/VI/10062023</a>

              <div className="d-p-p">
                <p> Waktu Pembayaran : </p>
              </div>
              <p> 10 Juni 2023. 14.17</p>
            </div>
            <div
              style={{ color: `${item.cr}`, backgroundColor: `${item.bg}` }}
              className="d-p-1-3-2"
            >
              {item.tx}
            </div>
          </div>
          <div className="d-p-1-1">
            <div className="d-p-1-1-1">
              <div className="d-p-1-1-1-1">
                <img className="d-p-img-u" src={ImgPes} alt="#" />
                <h3>
                  Belajar Microsoft Office dan Google Workspace untuk Pemula
                </h3>
              </div>
              <div className="d-p-1-1-2">
                {" "}
                <p>Harga</p> <h1>Rp. 300.000</h1>
              </div>
            </div>
          </div>
          <div className="d-p-1-2">
            <p>Total Pembayaran</p>
            <div>
              <h1>Rp. 300.000</h1>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
