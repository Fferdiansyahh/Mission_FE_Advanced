import Serti from "/src/assets/sertifikat.png";
import imgU from "/src/assets/u-2.png";

import Footer1 from "../../navbar/Footer-1";

import playL from "../../../assets/play-l.svg";
import check from "../../../assets/check.svg";
import rangkum from "../../../assets/book.svg";
import quiz from "../../../assets/quiz.svg";

import Down from "../../../assets/dow.png";
import Container from "../../navbar/Container";
import { MdOutlineStar } from "react-icons/md";

export default function Sertifikat() {
  return (
    <>
      <Container>
        <main className="flex  max-sm:w-full w-dvw  flex-row h-max box-border  max-sm:flex-col justify-center">
          <section className="w-full mx-30 max-sm:w-auto gap-9 my-16 max-sm:mt-7  max-sm:mx-5 flex flex-col justify-center items-center box-border ">
            <div className="w-full flex">
              <p className="overflow-hidden text-ellipsis whitespace-nowrap w-64 text-kelima ">
                Beranda / Desain / Gapai Karier Impianmu sebagai Seorang UI/UX
                Designer & Product Managez.
              </p>
              <p className="text-kelima"> / </p>
              <p>Sertifikat</p>
            </div>

            <div className="w-full  h-full  p-6 flex flex-col gap-9 bg-white border border-kedua rounded-lg box-border">
              <div className="flex bg-keempat h-max max-h-90  max-sm:h-60 w-full justify-center items-center rounded-lg">
                <img
                  id="sertifikat-image"
                  className=" w-full h-full max-w-100  max-sm:h-50"
                  src={Serti}
                  alt="Play "
                />
              </div>

              <div className="flex justify-between max-sm:flex-col gap-6">
                <div className="max-w-full flex flex-col gap-3">
                  <div>
                    <h6 className="text-base font-semibold mb-2">
                      Big 4 Auditor Financial Analyst
                    </h6>
                    <p className="text-sm text-kelima font-medium !text-left ">
                      Mulai transformasi dengan instruktur profesional, harga
                      yang terjangkau, dan kurikulum terbaik
                    </p>
                  </div>

                  <div className="flex flex-row gap-3 items-center">
                    <img className="h-10 w-10" src={imgU}></img>
                    <div className="flex flex-col">
                      <p className="font-medium text-base !text-left ">
                        Jenna Ortega
                      </p>
                      <div className="flex flex-row gap-1">
                        <p className="text-kelima text-sm ">
                          Senior Accountant di
                        </p>
                        <p className="text-sm font-semibold text-kelima ">
                          {" "}
                          Gojek
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center ">
                    <div className="flex gap-2 items-center ">
                      <MdOutlineStar className="text-yellow-300" size={24} />
                      <MdOutlineStar className="text-yellow-300" size={24} />
                    </div>

                    <div className=" w-6 h-6">
                      <MdOutlineStar className=" text-gray-300" size={24}>
                        <div className="absolute overflow-hidden w-1/2">
                          <MdOutlineStar
                            className=" text-yellow-300"
                            size={24}
                          />
                        </div>
                      </MdOutlineStar>
                    </div>
                    <MdOutlineStar className="text-gray-300" size={24} />
                    <MdOutlineStar className="text-gray-300" size={24} />
                    <p className="text-kelima text-sm font-medium">3.5 (86)</p>
                  </div>
                </div>
                <a
                  href={Serti}
                  download="Sertifikat.jpg"
                  className="flex gap-4 px-6.5 py-2.5 justify-center border h-max items-center border-pertama w-max max-sm:w-full rounded-xl"
                >
                  <img className="h-4" src={Down} alt="Download Icon" />
                  <p className="text-pertama font-semibold text-normal">
                    Download Sertifikat
                  </p>
                </a>
              </div>
            </div>
          </section>
        </main>
      </Container>
    </>
  );
}
