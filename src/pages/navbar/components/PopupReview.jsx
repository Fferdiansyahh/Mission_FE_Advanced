import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { MdOutlineStar } from "react-icons/md";

export default function PopupReview({ isOpen, onClose }) {
  const [amount, setAmount] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Topup amount:", amount);
    onClose(); // Gunakan fungsi onClose dari props untuk menutup popup
    setAmount("");
    console.log("Rating:", rating); // Tambahkan ini untuk melihat nilai rating
  };

  // star
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(rating);
  };

  if (!isOpen) {
    return null; // Jika isOpen false, jangan render popup
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 ">
        <div className="relative flex flex-col text-center justify-center gap-3  rounded-xl shadow-2xl w-full m-6  max-w-screen-sm  p-9 max-sm:p-5 border bg-white">
          <p className="text-lg font-bold text-gray-900 ">
            Tuliskan Review Terbaikmu!
          </p>
          <p className="text-gray-500 mb-3 text-base">
            Apakah kamu yakin untuk menyelesaikan pretest ini ?
          </p>

          <div className="flex justify-center gap-0.5">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              const isHalf =
                hoverRating % 1 !== 0 && starValue === Math.ceil(hoverRating);
              const isFilled = starValue <= (hoverRating || rating);

              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(starValue)}
                  onMouseMove={(e) => {
                    const rect = e.target.getBoundingClientRect();
                    const mouseX = e.clientX - rect.left;
                    const isHalfHover = mouseX < rect.width / 2;
                    setHoverRating(starValue - (isHalfHover ? 0.5 : 0));
                  }}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(hoverRating)}
                >
                  <MdOutlineStar
                    className={`cursor-pointer transition-colors duration-200 ${
                      isFilled ? "text-yellow-300" : "text-gray-300"
                    }`}
                    size={37}
                  />
                  {isHalf && (
                    <div
                      className="absolute left-0 top-0 overflow-hidden"
                      style={{ width: "50%" }}
                    >
                      <MdOutlineStar className="text-yellow-300" size={37} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <textarea
            className="p-3 border border-kedua rounded-xl focus:outline-none my-2 focus:border-pertama resize-none "
            placeholder="Masukkan Review"
          ></textarea>

          <div className="flex gap-4 justify-between max-sm:flex-col ">
            <a
              onClick={onClose}
              className="w-full py-1.5 border border-pertama rounded-xl hover:bg-gray-100 text-white transition-colors"
            >
              <p className="text-pertama">Batal</p>
            </a>
            <a
              onClick={handleSubmit}
              className="w-full py-1.5 bg-pertama rounded-xl hover:bg-green-400 transition-colors hover:cursor-pointer"
            >
              <p className="text-white">Selesai</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
