import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import AxiosInstance from "../../pages/Axios/AxiosInstance";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [token, setToken] = useState(localStorage.getItem("Token"));
  const navigate = useNavigate()

  const logoutUser = () =>{
     AxiosInstance.post(`logoutall/`,{
     })
     .then( () => {
        localStorage.removeItem("Token")
        navigate('/')
     }

     )
  }
  useEffect(() => {
    if (!token) {
      const submission = (data) => {
        AxiosInstance.post("login/", {
          username: data.username,
          password: data.password,
        })
          .then((response) => {
            localStorage.setItem("Token", response.data.token);
            setToken(response.data.token); // Update the token in the state
          })
          .catch((error) => {
            console.error("Login error", error);
          });
      };
    }
  }, []);

  return (
    <div className="navbar-container">
      <nav>
        <div className="logo">
          <Link to="/">
            <img src="src/assets/artopialogo.png" alt="Logo" />
          </Link>
        </div>
        <ul>
          <Link to="/">
            <button className="box">Home</button>
          </Link>
          <Link to="/about">
            <button className="box">About</button>
          </Link>
          <Link to="/artcafe">
            <button className="box">Creative Café</button>
          </Link>
          <Link to="/arttherapy">
            <button className="box">Brushes and Blessings</button>
          </Link>
          <Link to="/educationalart">
            <button className="box">Artistic Academia</button>
          </Link>
          <Link to="/market">
            <button className="box">Artistic Avenue</button>
          </Link>
          {!token && (
            <Link to="/login">
              <button className="box">Login</button>
            </Link>
          )}
          {token && (
            <Link to="/logout">
              <button className="box" onClick={logoutUser}>Logout</button>
            </Link>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
