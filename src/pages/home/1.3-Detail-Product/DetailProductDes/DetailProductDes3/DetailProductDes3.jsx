import "./DetailProductDes3.css";
import Clock from "../../../../../assets/clock-1.png";
import Play from "../../../../../assets/video_play.png";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

export default function DetailProductDes3() {
  const data = [
    "The basics of user experience design",
    "Jobs in the field of user experience",
    "The product development life cycle",
  ];
  const dat = [
    "Universal design, inclusive design, and equity-focused design",
    "Introduction to design sprints",
    "Introduction to UX Research",
  ];
  return (
    <>
      <div className="detail-des-1">
        <h1>Kamu Akan Mempelajari</h1>
        <div className="detail-des-1-1">
          <div className="des-1-1-1">
            <h2>
              Introduction to Course 1: Foundations of User Experience Design
            </h2>
            <FaChevronUp className="icon-up" />
          </div>
          {data.map((item) => (
            <div className="detail-des-1-1-1">
              <h4>{item}</h4>
              <div>
                <img src={Play} alt="#" />
                <p>Video</p>
                <img src={Clock} alt="#" />
                <p>12 Menit</p>
              </div>
            </div>
          ))}
          {dat.map((item) => (
            <div className="des-1-1-1">
              <h2>{item}</h2>
              <FaChevronDown className="icon-up" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
2;
