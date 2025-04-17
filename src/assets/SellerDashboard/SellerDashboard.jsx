import React from "react";
import { Link } from "react-router-dom";

const SellerDashboard = () => {
  return (
    <div>
      <h2>Seller Dashboard</h2>
      <ul>
        <li>
          <Link to="/seller/add-product">Add Product</Link>
        </li>
        <li>
          <Link to="/seller/view-products">View Products</Link>
        </li>
        <li>
          <Link to="/seller/search-products">Search Products</Link>
        </li>
        <li>
          <Link to="/seller/delete-product">Delete Product</Link>
        </li>
        <li>
          <Link to="/seller/update-product">Update Product</Link>
        </li>
      </ul>
    </div>
  );
};

export default SellerDashboard;
