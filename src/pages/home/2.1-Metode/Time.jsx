import React, { useState, useEffect } from "react";
import "./Metode.css"; // Pastikan file CSS ini ada

export default function Time() {
  const initialTime = [0, 50, 55]; 
  const [timeLeft, setTimeLeft] = useState([...initialTime]); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        const updatedTime = [...prevTime]; 

        if (updatedTime[2] > 0) {
          updatedTime[2]--; // Kurangi detik
        } else {
          if (updatedTime[1] > 0) {
            updatedTime[1]--; // Kurangi menit
            updatedTime[2] = 59; // Set detik ke 59
          } else {
            if (updatedTime[0] > 0) {
              updatedTime[0]--; // Kurangi jam
              updatedTime[1] = 59; // Set menit ke 59
              updatedTime[2] = 59; // Set detik ke 59
            } else {
              // Waktu habis, hentikan interval
              clearInterval(intervalId);
            }
          }
        }
        return updatedTime;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (value) => String(value).padStart(2, "0");

  return (
    <div className="time">
      <p>Selesikan Pesanan dalam</p>
      {timeLeft.map((item, index) => (
        <React.Fragment key={index}>
          <div className="time-1">
            <h7>{formatTime(item)}</h7>
          </div>
          {index < timeLeft.length - 1 && <p className="separator"> : </p>}
        </React.Fragment>
      ))}
    </div>
  );
}