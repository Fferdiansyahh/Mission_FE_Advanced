import { FaSearch } from "react-icons/fa";
import Dropdown from "../../1.2-All-Product/components/Dropdown/Dropdown";
import DropdownItem from "../../1.2-All-Product/components/DropdownItem/DropdownItem";

export default function Search() {
  const items = [
    { id: 0, des: "Harga Rendah" },
    { id: 1, des: "Harga Tinggi" },
    { id: 2, des: "A to Z" },
    { id: 3, des: "Z to A" },
    { id: 4, des: "Rating Tertinggi" },
    { id: 5, des: "Rating Terendah" },
  ];
  return (
    <div className="pesanan-2-1">
      <div className="input-wrapper">
        <input placeholder="Cari Kelas"></input>
        <FaSearch id="search-icon" />
      </div>
      <Dropdown
        buttonText="Urutkan"
        content={
          <>
            {items.map((item) => (
              <DropdownItem key={item.id}>{item.des}</DropdownItem>
            ))}
          </>
        }
      />
    </div>
  );
}
