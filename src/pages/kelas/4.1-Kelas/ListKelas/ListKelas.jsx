import "./ListKelas.css";
import "../../../navbar/NavbarKelas.css";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import star from "../../../../assets/star.svg";
import ceklis from "../../../../assets/ceklis.png";

import PopupReview from "../../../navbar/components/PopupReview";
import { useNavigate } from "react-router-dom";

export default function ListKelas(props) {
  const { metodee, display, dataKelas = [] } = props;
  const [isKelasOneOpen, setIsKelasOneOpen] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const handleKelasOneClick = () => {
    setIsKelasOneOpen(!isKelasOneOpen);
  };
  const handlePaymentSelect = (itemId, itemType) => {
    setSelectedPayment({ id: itemId, det: itemType });
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const navigate = useNavigate();
  const handleNavigate = (tlList) => {
    const routes = {
      "Rangkuman: ": "/rangkuman",
      "Soal: ": "/soal",
    };

    if (routes[tlList]) {
      navigate(routes[tlList]);
    }
  };

  return (
    <main className="">
      <div
        className="h-14 border border-primary-100 flex px-5
      bg-white"
      >
        <h6 className="text-lg font-semibold content-center">Daftar Modul</h6>
      </div>
      <div className="list-kelas-b-1">
        <h1>{metodee}</h1>
        <div className="list-kelas-b-1-1">
          <div className="list-kelas-b-1-1-1" onClick={handleKelasOneClick}>
            <div>
              <h2>Introduction to HR</h2>
            </div>
            <div>
              <FaChevronDown
                className={`arrow-icon ${isKelasOneOpen ? "open" : ""}`}
              />
            </div>
          </div>

          {isKelasOneOpen && (
            <div className="list">
              {dataKelas.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleNavigate(item.tlList)}
                  className={`flex justify-between p-4 rounded-xl border border-${item.br}  bg-${item.bg} cursor-pointer`}
                >
                  <div className="hr-i">
                    <img src={item.img} alt={item.kelas} />
                    <div>
                      <p className="text-base">
                        {item.tlList}
                        {item.kelas}
                      </p>
                      <p className="text-sm">{item.det}</p>
                    </div>
                  </div>

                  {selectedPayment?.id === item.id &&
                    selectedPayment?.det === item.det && (
                      <img src={ceklis} alt="Terpilih" />
                    )}
                </div>
              ))}
            </div>
          )}

          <div className="list-kelas-b-1-1-1">
            <div>
              <h2>Introduction to HR</h2>
            </div>
            <div>
              <FaChevronDown />
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={openPopup}
        className="h-14 border border-primary-100 flex px-5
      bg-yellow-300 items-center gap-2"
      >
        <img
          className="border-black w-5 h-5 content-center"
          src={star}
          alt=""
        />
        <p className="text-lg font-bold content-center text-white">
          Beri Review & Rating
        </p>
      </div>
      {isPopupOpen && <PopupReview isOpen={isPopupOpen} onClose={closePopup} />}
    </main>
  );
}
