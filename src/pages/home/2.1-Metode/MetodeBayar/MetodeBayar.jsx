import "./MetodeBayar.css";
import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import imgBank from "../../../../assets/bca.png";
import imgBankBNI from "../../../../assets/bni.png";
import imgBankBRI from "../../../../assets/bri.png";
import imgBankMandiri from "../../../../assets/mandiri.png";
import imgDana from "../../../../assets/dana.png";
import imgOvo from "../../../../assets/ovo.png";
import imgLink from "../../../../assets/link-aja.png";
import imgShopee from "../../../../assets/shopee.png";
import jcb from "../../../../assets/jcb.png";
import visa from "../../../../assets/visa.png";
import mc from "../../../../assets/mc.png";
import ceklis from "../../../../assets/ceklis.png";

export default function MetodeBayar(props) {
  const { metode, display } = props;
  const dataTransferBank = [
    { id: 0, img: imgBank, bank: "BCA", type: "transferBank" },
    { id: 1, img: imgBankBNI, bank: "BNI", type: "transferBank" },
    { id: 2, img: imgBankBRI, bank: "BRI", type: "transferBank" },
    { id: 3, img: imgBankMandiri, bank: "Mandiri", type: "transferBank" },
  ];

  const dataEWallet = [
    { id: 4, img: imgDana, bank: "Dana", type: "eWallet" },
    { id: 5, img: imgOvo, bank: "Ovo", type: "eWallet" },
    { id: 6, img: imgLink, bank: "LinkAja", type: "eWallet" },
    { id: 7, img: imgShopee, bank: "Shopee", type: "eWallet" },
  ];

  const dataKartu = [{ id: 8, type: "kartu" }];

  const [isTransferBankOpen, setIsTransferBankOpen] = useState(false);
  const [isEWalletOpen, setIsEWalletOpen] = useState(false);
  const [isKartuOpen, setIsKartuOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleTransferBankClick = () => {
    setIsTransferBankOpen(!isTransferBankOpen);
  };

  const handleEWalletClick = () => {
    setIsEWalletOpen(!isEWalletOpen);
  };

  const handleKartuClick = () => {
    setIsKartuOpen(!isKartuOpen);
  };

  const handlePaymentSelect = (itemId, itemType) => {
    setSelectedPayment({ id: itemId, type: itemType });
  };

  return (
    <div className="met-b-des-b-1">
      <h1>{metode}</h1>
      <div className="met-b-des-b-1-1">
        <div className="met-b-des-b-1-1-1" onClick={handleTransferBankClick}>
          <div>
            <h2>Transfer Bank</h2>
          </div>
          <div>
            <FaChevronDown
              className={`arrow-icon ${isTransferBankOpen ? "open" : ""}`}
            />
          </div>
        </div>
        {isTransferBankOpen && (
          <div className="list">
            {dataTransferBank.map((item) => (
              <div
                key={item.id}
                className={`met-b-des-b-1-1-1 bank-item ${
                  selectedPayment?.id === item.id &&
                  selectedPayment?.type === item.type
                    ? "selected"
                    : ""
                }`}
                onClick={() => handlePaymentSelect(item.id, item.type)}
              >
                <div>
                  <img src={item.img} alt={item.bank} />
                  <h4>Bank {item.bank}</h4>
                </div>
                {selectedPayment?.id === item.id &&
                  selectedPayment?.type === item.type && (
                    <img src={ceklis} alt="Terpilih" />
                  )}
              </div>
            ))}
          </div>
        )}

        <div className="met-b-des-b-1-1-1" onClick={handleEWalletClick}>
          <div>
            <h2>E-Wallet</h2>
          </div>
          <div>
            <FaChevronDown
              className={`arrow-icon ${isEWalletOpen ? "open" : ""}`}
            />
          </div>
        </div>
        {isEWalletOpen && (
          <div className="list">
            {dataEWallet.map((item) => (
              <div
                key={item.id}
                className={`met-b-des-b-1-1-1 bank-item ${
                  selectedPayment?.id === item.id &&
                  selectedPayment?.type === item.type
                    ? "selected"
                    : ""
                }`}
                onClick={() => handlePaymentSelect(item.id, item.type)}
              >
                <div>
                  <img src={item.img} alt={item.bank} />
                  <h4>{item.bank}</h4>
                </div>
                {selectedPayment?.id === item.id &&
                  selectedPayment?.type === item.type && (
                    <img src={ceklis} alt="Terpilih" />
                  )}
              </div>
            ))}
          </div>
        )}

        <div className="met-b-des-b-1-1-1" onClick={handleKartuClick}>
          <div>
            <h2>Kartu Kredit/Debit</h2>
          </div>
          <div>
            <FaChevronDown
              className={`arrow-icon ${isKartuOpen ? "open" : ""}`}
            />
          </div>
        </div>

        {isKartuOpen && (
          <div className="list">
            {dataKartu.map((item) => (
              <div
                key={item.id}
                className={`met-b-des-b-1-1-1 bank-item ${
                  selectedPayment?.id === item.id &&
                  selectedPayment?.type === item.type
                    ? "selected"
                    : ""
                }`}
                onClick={() => handlePaymentSelect(item.id, item.type)}
              >
                <div>
                  <img src={mc} alt="Mastercard" />
                  <img src={visa} alt="Visa" />
                  <img src={jcb} alt="JCB" />
                </div>
                {selectedPayment?.id === item.id &&
                  selectedPayment?.type === item.type && (
                    <img src={ceklis} alt="Terpilih" />
                  )}
              </div>
            ))}
          </div>
        )}
        <a className="d-b" href="/detail-pembayaran">
          <button className="buy-button" style={{ display: `${display}` }}>
            Bayar Sekarang
          </button>
        </a>
      </div>
    </div>
  );
}
