import React from "react";
import Book from "/src/assets/book.svg";
import Bag from "/src/assets/bag.svg";
import Profile from "/src/assets/profile.svg";
import "./MenuPesanan.css";
import { FaUser } from "react-icons/fa";
import { MdBook, MdShoppingBasket } from "react-icons/md";

export default function MenuPesanan(props) {
  const { item } = props;
  const currentPath = window.location.pathname;

  const menu = [
    { id: 0, image: Profile, tit: "Profil Saya", link: "/profil-saya" },
    { id: 1, image: Book, tit: "Kelas Saya", link: "/kelas-saya" },
    { id: 2, image: Bag, tit: "Pesanan Saya", link: "/pesanan" },
  ];

  const getIconByTitle = (title, isActive) => {
    const color = isActive ? "enam" : "kedua";
    if (title === "Profil Saya")
      return <FaUser className={`w-5 h-5 text-${color}`} />;
    if (title === "Kelas Saya")
      return <MdBook className={`w-5 h-5 text-${color}`} />;
    if (title === "Pesanan Saya")
      return <MdShoppingBasket className={`w-5 h-5 text-${color}`} />;
    return null;
  };
  return (
    <>
      <div className="menu">
        <div className="m-1">
          <h1 className="text-xl font-semibold">{item[0].tit}</h1>
          <p>{item[0].des}</p>
        </div>
        <div className="m-2">
          {menu.map((item) => {
            const isActive = currentPath === item.link;
            return (
              <a
                href={item.link}
                key={item.id}
                className={`menu-c ${
                  isActive ? "bg-tujuh border !border-enam" : ""
                } hover:bg-green-50`}
              >
                {getIconByTitle(item.tit, isActive)}
                <p className={` ${isActive ? "!text-enam" : "text-tujuh"} `}>
                  {item.tit}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
