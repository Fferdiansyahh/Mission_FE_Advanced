import "../../login/Login.css";
import React, { useState, useRef, useEffect } from "react";

export default function Home22(props) {
  const [activeCategory, setActiveCategory] = useState("Semua Kelas");
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineOffset, setUnderlineOffset] = useState(0);
  const categoryRefs = useRef({});

  const {
    wd = "lvw",
    categories = [
      "Semua Kelas",
      "Pemasaran",
      "Desain",
      "Pengembangan Diri",
      "Bisnis",
    ],
  } = props;

  useEffect(() => {
    if (categoryRefs.current[activeCategory]) {
      const currentCategory = categoryRefs.current[activeCategory];
      setUnderlineWidth(currentCategory.offsetWidth / 2);
      setUnderlineOffset(currentCategory.offsetLeft);
    }
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };
  return (
    <div
      className={`flex items-center space-x-6 relative overflow-x-scroll box-border scrollbar-hide whitespace-nowrap py-2 max-sm:w-18/20 w-${wd}`}
    >
      {categories.map((category) => (
        <div
          key={category}
          ref={(el) => (categoryRefs.current[category] = el)}
          className={`cursor-pointer text-gray-500 ${
            activeCategory === category ? "text-orange-500 font-semibold" : ""
          }`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </div>
      ))}
      <div
        className="bg-orange-500 h-1 rounded-full justify-start absolute bottom-0 transition-all duration-300"
        style={{
          width: `${underlineWidth}px`,
          transform: `translateX(${underlineOffset}px)`,
        }}
      />
    </div>
  );
}
