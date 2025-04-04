import React from "react";
import { CartProvider, useCart } from "react-use-cart";
import './pages_styling/cart.css'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer.jsx";


const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return (
    <>
      <Navbar />
      <p>Your cart is empty</p>
    </>
  );  return (
    <div className="cart">
      <Navbar/>
      <h1>Cart ({totalUniqueItems})</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <div className="cart-item">

              <div className="cart-item-details">
                
                <div className="cart-item-buttons">
                <span>{item.quantity} x {item.name}</span>
                  <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                  <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                  <button onClick={() => removeItem(item.id)}>&times;</button>
                </div>
                <img src={item.image} alt={item.name} className="cart-item-image" />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Footer/>

    </div>
  );
};

export default Cart;
