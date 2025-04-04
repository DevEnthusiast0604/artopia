import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, useScroll } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./pages_styling/login.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer.jsx";
import UsermailField from "./forms_related_files/email_user_field.jsx";
import PasswordField from "./forms_related_files/passwordfield.jsx";
import AxiosInstance from "./Axios/AxiosInstance.jsx";

const Login = () => {
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const [ShowMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submission = (data) => {
    AxiosInstance.post("login/", {
      username: data.username,
      password: data.password,
    })
     .then((response) => {
        console.log(response);
        localStorage.setItem("Token", response.data.token);
        const userId = response.data.userId;
        navigate(`/userprofile/${userId}`);
      })
     .catch((error) => {
        setShowMessage(true);
        setErrorMessage(error.response.data.error);
        console.error("Error during login", error);
      });
  };

  return (
    <div>
      <Navbar />
      {/* Upper Scroll Bar */}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Login Form */}
      <div id="loginform">
        <h1>Login to</h1>
        <img src="src/assets/artopialogo.png" id="logo" alt="Logo" />
        <form autoComplete="on" onSubmit={handleSubmit(submission)}>
          <label htmlFor="usermail">Username or Email:</label>
          <UsermailField control={control} />
          <label htmlFor="password">Password:</label>
          <PasswordField control={control} />
          <input type="submit" value="Submit" />
          
          {/* Error Message */}
          {ShowMessage && <p className="error-message">{errorMessage}</p>}

          {/* Redirect Page to SignUp */}
          <p>Forgot your password? Click to reset it!</p>
          <input type="button" value="Reset password" className="ResetPass" />
          <p>Still Haven't Joined Our Community Yet?</p>
          <Link to="/signup">
            <input type="button" value="Sign Up" className="SignUpButton" />
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
