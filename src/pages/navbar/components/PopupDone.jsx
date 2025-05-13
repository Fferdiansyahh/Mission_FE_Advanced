import React, { useState } from "react";
import Done from "/src/assets/task-done.png";
import { useNavigate } from "react-router-dom";
import hitungHasilUjian from "../../../data/hitungHasil";
import questions from "../../../data/soal";

const PopupDone = ({ isOpen, onClose, onConfirm, selectedOptions }) => {
  if (!isOpen) {
    return null; // Jika isOpen false, jangan render popup
  }

  const handleSelesai = () => {
    const hasilUjian = hitungHasilUjian(questions, selectedOptions); // Menghitung hasil berdasarkan jawaban yang dipilih
    onConfirm(hasilUjian); // Mengirim hasil ujian ke parent untuk diproses lebih lanjut
    onClose(); // Menutup popup setelah konfirmasi
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 ">
        <div className="relative flex flex-col text-center justify-center gap-3  rounded-xl shadow-2xl w-full m-6  max-w-screen-sm  p-9 max-sm:p-5 border bg-white">
          <div className="justify-center flex pb-6">
            <img className="max-w-sm" src={Done}></img>
          </div>
          <p className="text-lg font-bold text-gray-900 ">Selesaikan Pretest</p>
          <p className="text-gray-500 mb-5 text-base">
            Apakah kamu yakin untuk untuk menyelesaikan pretest ini ?
          </p>

          <div className="flex gap-4 justify-between max-sm:flex-col ">
            <a
              onClick={onClose}
              className="w-full py-1.5 border border-pertama rounded-xl hover:bg-gray-100 text-white transition-colors"
            >
              <p className="text-pertama">Batal</p>
            </a>
            <a
              onClick={onConfirm}
              className="w-full py-1.5 bg-pertama rounded-xl hover:bg-green-400 transition-colors hover:cursor-pointer"
            >
              <p className="text-white">Selesai</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupDone;
