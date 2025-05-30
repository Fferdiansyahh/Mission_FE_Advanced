import "./Pesanan.css";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../../store/redux/profileSlice";
import { selectUser } from "../../../store/redux/authSlice";
import MenuPesanan from "./Menu/MenuPesanan";
import DetailProfile from "./Profile/DetailProfile";
import Container from "../../navbar/Container";
export default function ProfilSaya() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  // const { loading } = useSelector((state) => state.profile);

  useEffect(() => {
    if (user?.uid) {
      dispatch(fetchUserProfile(user.uid));
    }
  }, [dispatch, user]);

  const item = [
    {
      id: 0,
      tit: "Daftar Pesanan",
      des: "Infomasi terperenci mengenai pembelian",
    },
  ];

  return (
    <>
      <Container>
        <div className="pes">
          <div className="pesanan">
            <MenuPesanan item={item} />
            <DetailProfile />
          </div>
        </div>
      </Container>
    </>
  );
}
