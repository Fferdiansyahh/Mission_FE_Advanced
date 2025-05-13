import DetailProductBuy from "../DetailProductBuy/DetailProductBuy.jsx";
import "./DetailProductDes.css";
import DetailProductDes1 from "./DetailProductDes1/DetailProductDes1";
import DetailProductDes2 from "./DetailProductDes2/DetailProductDes2.jsx";
import DetailProductDes3 from "./DetailProductDes3/DetailProductDes3.jsx";
import DetailProductDes4 from "./DetailProductDes4/DetailProductDes4.jsx";
import ImgBuy from "../../../../assets/card-1.jpeg";

export default function DetailProductDes() {
  return (
    <div className="product-des">
      <div className="product-des-1">
        <DetailProductDes1 />
        <DetailProductDes2 />
        <DetailProductDes3 />
        <DetailProductDes4 />
      </div>
      <div className="product-des-2">
        <DetailProductBuy image={ImgBuy} display="none" />
      </div>
    </div>
  );
}
