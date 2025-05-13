import React from "react";
import { GoCheck } from "react-icons/go";

export default function Stepper({ activePage }) {
  const pages = ["metode", "ubah-metode", "bayar", "detail-pembayaran"];

  const getStepStatus = (page) => {
    if (pages.indexOf(page) < pages.indexOf(activePage)) {
      return "completed";
    } else if (page === activePage) {
      return "active";
    } else {
      return "inactive";
    }
  };

  return (
    <div className="flex items-center justify-center space-x-5">
      {/* Langkah 1: Pilih Metode */}
      <div className="flex items-center">
        <div
          className={`relative w-6 h-6 rounded-full flex items-center justify-center ${
            getStepStatus("metode") === "completed" &&
            getStepStatus("ubah-metode") === "active"
              ? "bg-white border-3 border-pertama"
              : getStepStatus("metode") === "completed"
              ? "bg-pertama"
              : getStepStatus("metode") === "active"
              ? "bg-white border-3 border-pertama"
              : "bg-white border-3 border-gray-400"
          }`}
        >
          {getStepStatus("metode") === "active" && (
            <div className="w-3 h-3 rounded-full bg-pertama"></div>
          )}

          {getStepStatus("metode") === "completed" &&
          getStepStatus("ubah-metode") === "active" ? (
            <div className="w-3 h-3 rounded-full bg-pertama"></div>
          ) : (
            getStepStatus("metode") === "completed" && (
              <GoCheck className=" text-white" />
            )
          )}

          {getStepStatus("metode") === "inactive" && (
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          )}
        </div>
        <span
          className={`ml-2 font-semibold text-sm ${
            getStepStatus("metode") === "active" ||
            getStepStatus("ubah-metode") === "active"
              ? "text-gray-900"
              : "text-gray-500"
          }`}
        >
          Pilih Metode
        </span>
      </div>

      <div className="flex items-center">
        {/* Garis penghubung 1 */}
        <div
          className={`h-1 w-16 max-sm:w-4 flex justify-end ${
            getStepStatus("bayar") === "completed" ||
            getStepStatus("bayar") === "active"
              ? "bg-pertama"
              : "bg-gray-400"
          }`}
        ></div>

        {/* Langkah 2: Bayar */}
        <div className="flex items-center">
          <div
            className={`relative w-6 h-6 rounded-full flex items-center justify-center ${
              getStepStatus("bayar") === "completed"
                ? "bg-pertama"
                : getStepStatus("bayar") === "active"
                ? "bg-white border-3 border-pertama"
                : "bg-white border-3 border-gray-400"
            }`}
          >
            {getStepStatus("bayar") === "completed" && (
              <GoCheck className=" text-white" />
            )}
            {getStepStatus("bayar") === "active" && (
              <div className="w-3 h-3 rounded-full bg-pertama"></div>
            )}
            {getStepStatus("bayar") === "inactive" && (
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            )}
          </div>
          <span
            className={`ml-2 font-semibold text-sm ${
              getStepStatus("bayar") === "active"
                ? "text-gray-900"
                : "text-gray-500"
            }`}
          >
            Bayar
          </span>
        </div>
      </div>

      <div className="flex items-center">
        {/* Garis penghubung 2 */}
        <div
          className={`h-1 w-16 max-sm:w-4 ${
            getStepStatus("detail-pembayaran") === "completed" ||
            getStepStatus("bayar") === "completed" ||
            getStepStatus("detail-pembayaran") === "active"
              ? "bg-pertama"
              : "bg-gray-400"
          }`}
        ></div>

        {/* Langkah 3: Detail-pembayaran */}
        <div className="flex items-center">
          <div
            className={`relative w-6 h-6 rounded-full flex items-center justify-center ${
              getStepStatus("detail-pembayaran") === "completed"
                ? "bg-pertama"
                : getStepStatus("detail-pembayaran") === "active"
                ? "bg-white border-3 border-pertama"
                : "bg-white border-3 border-gray-400"
            }`}
          >
            {getStepStatus("detail-pembayaran") === "completed" && (
              <GoCheck className=" text-white" />
            )}
            {getStepStatus("detail-pembayaran") === "active" && (
              <div className="w-3 h-3 rounded-full bg-pertama"></div>
            )}
            {getStepStatus("detail-pembayaran") === "inactive" && (
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            )}
          </div>
          <span
            className={`ml-2 font-semibold text-sm ${
              getStepStatus("detail-pembayaran") === "active"
                ? "text-gray-900"
                : "text-gray-500"
            }`}
          >
            Selesai
          </span>
        </div>
      </div>
    </div>
  );
}
