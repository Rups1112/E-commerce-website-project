import React from "react";
import "../homeCss/CategoryBar.css"; // Import the CSS file

const categories = [
  { name: "Kilos", image: "src/assets/categoryimg/beauty.png" },
  { name: "Mobiles", image: "src/assets/categoryimg/mobile.png" },
  { name: "Fashion", image: "src/assets/categoryimg/fashion.png" },
  { name: "Electronics", image: "src/assets/categoryimg/electronics.png" },
  { name: "Home & Furniture", image: "src/assets/categoryimg/Furniture.png" },
  { name: "Appliances", image: "src/assets/categoryimg/appliences.png" },
  { name: "Grocery", image: "src/assets/categoryimg/mobile.png" },
  { name: "Beauty", image: "src/assets/categoryimg/beauty.png" },
  { name: " Toys & More", image: "src/assets/categoryimg/appliences.png" }
];

const CategoryBar = () => {
  return (
    <div className="category-bar">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          <img src={category.image} alt={category.name} className="category-icon" />
          <span className="category-name">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryBar;