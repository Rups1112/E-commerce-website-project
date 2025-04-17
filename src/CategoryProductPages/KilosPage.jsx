import React, { useState } from "react";
import "../CategoryProductPages/KilosPage.css";

const KilosPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

const kiloProducts = [
  {
    id: 1,
    prodName: "Basmati Rice (5kg)",
    price: 450,
    quantity: "5 kg",
    description:"Grocery",
    image: "../src/assets/KilosProductImg/BasmatiRice.jpg",
    cid:1,
    userId:1    
  },
  {
    id: 2,
    prodName: "Wheat Flour (10kg)",
    price: 350,
    quantity: "10 kg",
    description:"Grocery",
    image: "../src/assets/KilosProductImg/wheat.jpg",
    cid:1,
    userId:1  
  },
  {
    id: 3,
    prodName: "Sugar (2kg)",
    price: 350,
    quantity: "10 kg",
    description:"Grocery",
    image: "../src/assets/KilosProductImg/Suagar.jpg",
    cid:1,
    userId:1  
  },
  {
    id: 4,
    prodName: "Toor Dal (1kg)",
    price: 150,
    quantity: "1 kg",
    description:"Grocery",
    image: "../src/assets/KilosProductImg/BasmatiRice.jpg",
    cid:1,
    userId:1  
  },
  {
    id: 5,
    prodName: "Toor Dal (1kg)",
    price: 150,
    quantity: "1 kg",
    description:"Grocery",
    image: "../src/assets/KilosProductImg/ToorDal.jpeg",
    cid:1,
    userId:1  
    
  },
  {
    id: 6,
    prodName: "Toor Dal (1kg)",
    price: 150,
    quantity: "1 kg",
    description:"Grocery",
    image: "../src/assets/KilosProductImg/Suagar.jpg",
    cid:1,
    userId:1  
  },
  {
    id: 7,
    prodName: "Toor Dal (1kg)",
    price: 150,
    quantity: "1 kg",
    description:"Grocery",
    image: "../src/assets/KilosProductImg/ToorDal.jpeg",
    cid:1,
    userId:1  
  },
  {
    id: 8,
    prodName: "Toor Dal (1kg)",
    price: 150,
    quantity: "1 kg",
    description:"Grocery",
    image: "../src/assets/KilosProductImg/wheat.jpg",
    cid:1,
    userId:1  
  },
  {
    id: 9,
    prodName: "Toor Dal (1kg)",
      price: 150,
    quantity: "1 kg",
    description:"Grocery",
    image: "../src/assets/KilosProductImg/BasmatiRice.jpg",
    cid:1,
    userId:1  
  },
  {
    id: 10,
    prodName: "Toor Dal (1kg)",
    price: 150,
    quantity: "1 kg",
    description:"Grocery",
    image: "../src/assets/KilosProductImg/ToorDal.jpeg",
    cid:1,
    userId:1  
  }
  ,
  {
    id: 11,
    prodName: "Wheat Flour (10kg)",
    price: 350,
    quantity: "10 kg",
    description:"Grocery",
    image: "../src/assets/KilosProductImg/wheat.jpg",
    cid:1,
    userId:1  
  },
  {
    id: 12,
    prodName: "Sugar (2kg)",
      price: 90,
    quantity: "2 kg",
    description:"Grocery",
    image: "../src/assets/KilosProductImg/BasmatiRice.jpg",
    cid:1,
    userId:1  
  }
];    const handleProductClick = (product) => {
  setSelectedProduct(product);
  setShowPopup(true);
};

const handleClosePopup = () => {
  setShowPopup(false);
};

const handleIncrement = () => {
  setQuantity(quantity + 1);
};

const handleDecrement = () => {
  if (quantity > 1) {
    setQuantity(quantity - 1);
  }
};

const handleAddToCart = () => {
  const existingProduct = cart.find((product) => product.id === selectedProduct.id);
  if (existingProduct) {
    const updatedCart = cart.map((product) => {
      if (product.id === selectedProduct.id) {
        return { ...product, quantity: product.quantity + quantity };
      }
      return product;
    });
    setCart(updatedCart);
  } else {
    setCart([...cart, { ...selectedProduct, quantity }]);
  }
  console.log(`Added ${quantity} ${selectedProduct.prodName} to cart`);
};

const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

return (
  <div className="kilos-container">
    <h2 className="kilos-title">Kilos Category</h2>
    <div className="kilos-grid">
      {kiloProducts.map((product) => (
        <div key={product.id} className="kilos-card" onClick={() => handleProductClick(product)}>
          <img src={product.image} alt={product.prodName} className="kilos-image" />
          <div className="kilos-details">
            <h4>{product.prodName}</h4>
            <p>Price: ₹{product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Description:{product.description}</p>
          </div>
        </div>
      ))}
    </div>
    {showPopup && (
      <div className="popup-overlay">
        <div className="popup-content">
          <h2>{selectedProduct.prodName}</h2>
          <img src={selectedProduct.image} alt={selectedProduct.prodName} />
          <p>Price: ₹{selectedProduct.price}</p>
          <p>Quantity: {selectedProduct.quantity}</p>
          <p>Description:{selectedProduct.description}</p>
          <div className="quantity-controls">
            <button onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={handleClosePopup}>Close</button>
        </div>
      </div>
    )} {cart.length > 0 && (
      <div>
        <h2>Cart</h2>
        {cart.map((product) => (
          <div key={product.id}>
            <p>{product.prodName}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Price: ₹{product.price * product.quantity}</p>
          </div>
        ))}
        <p>Total Price: ₹{cart.reduce((acc, product) => acc + product.price * product.quantity, 0)}</p>
      </div>
    )}
    {cart.length === 0 && <p>Cart is empty</p>}
  </div>

);
};

export default KilosPage;
