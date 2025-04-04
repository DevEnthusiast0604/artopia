import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./pages_styling/market.css";
import { motion, useScroll } from "framer-motion";
import { CartProvider, useCart } from "react-use-cart";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Footer from "../components/Footer/Footer.jsx";

const Market = () => {
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      name: "Malm",
      price: 9900,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "src/assets/painting.jpg", // Example image URL
    },
    {
      id: 2,
      name: "Nordli",
      price: 16500,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "src/assets/painting.jpg", // Example image URL
    },
    {
      id: 3,
      name: "Kullen",
      price: 4500,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "src/assets/painting.jpg", // Example image URL
    },
    {
      id: 4,
      name: "Wraith",
      price: 600,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "src/assets/painting.jpg", // Example image URL
    },
  ];

  const { scrollYProgress } = useScroll();

  // JavaScript function to allow only numbers in textarea
  const handleTextareaInput = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  };

  return (
    <div className="market">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />

      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Products</h2>
          </div>
          <Popup
            trigger={
              <button className="buttonpopup">
                <img className="buttonimg" src="src/assets/plus.png" />
              </button>
            }
            modal
            contentStyle={{
              backgroundColor: "#D492DC",
              padding: "20px",
              borderRadius: "10px",
              zIndex: "1000",
              width: "30%",
            }}
          >
            <span>
              <form method="post">
                <img className="uploadpic" src="src/assets/uploadpic.png" />
                <input type="file" />

                <textarea
                  rows="2"
                  placeholder="What's your product price in roman numerals?"
                  className="textareapop"
                  onInput={handleTextareaInput}
                ></textarea>
                
                <p style={{ fontFamily: "sans-serif", fontSize: "14px" }}>
                  Upload Picture
                </p>
                <textarea
                  rows="2"
                  placeholder="write your product's name"
                  className="textareapop3"
                ></textarea>
                <textarea
                  rows="2"
                  placeholder="write your product's description"
                  className="textareapop2"
                ></textarea>
                <button type="submit">Post</button>
              </form>
            </span>
          </Popup>
          <p className="popupp">Sell Your Art</p>
          <div className="row">
            {products.map((p) => (
              <div key={p.id} className="col-sm-6 col-lg-4">
                <div className="box">
                  <div className="img-box">
                    <img src={p.image} alt={p.name} />
                    <button className="add_cart_btn" onClick={() => addItem(p)}>
                      <span>Add To Cart</span>
                    </button>
                  </div>
                  <div className="detail-box">
                    <h5>
                      {p.name} <br /> {p.description}{" "}
                    </h5>

                    <div className="product_info">
                      <h5>
                        <span>$</span> {p.price}
                      </h5>
                      <div className="star_container">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="btn_box">
            <a href="/cart" className="view_more-link">
              View Cart
            </a>
          </div>
        </div>
      </section>
      <Footer/>

    </div>
  );
};

export default Market;
