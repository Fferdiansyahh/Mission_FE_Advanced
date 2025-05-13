import "./DetailProduct.css";
import DetailProductDes from "./DetailProductDes/DetailProductDes";
import DetailProductUp from "./DetailProductUp/DetailProductUp";
import CardImg1 from "../../../assets/card-1.jpeg";
import CardImg2 from "../../../assets/card-2.jpeg";
import CardImg3 from "../../../assets/card-3.jpeg";
import CardImgU1 from "../../../assets/u-1.png";
import CardImgU2 from "../../../assets/u-2.png";
import CardImgU3 from "../../../assets/u-3.png";
import Home23 from "../home-2/Home23";
import Container from "../../navbar/Container";
export default function DetailProduct() {
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
  ];

  return (
    <>
      <Container>
        <div className="pdetail-1">
          <DetailProductUp />
          <DetailProductDes />
          <div className="b-2-1">
            <h1>Video Terkait Lainnya</h1>
            <p>Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!</p>
          </div>
          <div className="b-2-3">
            {data.map((item) => (
              <Home23 {...item} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
