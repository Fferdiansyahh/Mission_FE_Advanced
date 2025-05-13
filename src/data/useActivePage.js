import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function useActivePage() {
  const location = useLocation();
  const [activePage, setActivePage] = useState(null);

  useEffect(() => {
    if (location.pathname.includes("/metode")) {
      setActivePage("metode");
    } else if (location.pathname.includes("/ubah-metode")) {
      setActivePage("ubah-metode");
    } else if (location.pathname.includes("/bayar")) {
      setActivePage("bayar");
    } else if (location.pathname.includes("/detail-pembayaran")) {
      setActivePage("detail-pembayaran");
    } else {
      setActivePage(null);
    }
  }, [location.pathname]);

  return activePage;
}

export default useActivePage;