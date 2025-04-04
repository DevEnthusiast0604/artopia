import React from "react";
import { motion, useScroll } from "framer-motion";
import "./pages_styling/signup.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer.jsx";
import EmailField from "./forms_related_files/email_field.jsx";
import PasswordField1 from "./forms_related_files/password_field1.jsx";
import { useForm, Controller } from "react-hook-form";
import PasswordField2 from "./forms_related_files/password_field2.jsx";
import UsernameField from "./forms_related_files/username_field.jsx";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AxiosInstance from "./Axios/AxiosInstance.jsx";

const Signup = () => {
  const { scrollYProgress } = useScroll();

  const schema = yup.object({
    email: yup.string().email("Field expects an email address").required("Email is a required field"),
    username: yup.string().required("Username is a required field"),
    password1: yup.string().required("Password is a required field")
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[!@#$%^&*(),.?":;{}|<>+]/, "Password must contain at least one special character"),
    password2: yup.string().required("Password confirmation is a required field")
      .oneOf([yup.ref("password1"), null], "Passwords must match"),
  });

  const { control, handleSubmit, setError } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  const submission = (data) => {
    // Ensure password confirmation matches before sending to backend
    if (data.password1 !== data.password2) {
      console.error('Passwords do not match');
      return;
    }

    AxiosInstance.post("signup/", {
      email: data.email,
      username: data.username,
      password: data.password1, // Send only the validated password
    })
    .then(() => {
      navigate("/login");
    })
    .catch(error => {
      if (error.response && error.response.data) {
        const backendErrors = error.response.data;
        if (backendErrors.username) {
          setError("username", { type: "manual", message: backendErrors.username });
        }
        if (backendErrors.email) {
          setError("email", { type: "manual", message: backendErrors.email });
        }
      } else {
        console.error('Signup failed:', error);
      }
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

      {/* Signup Form */}
      <div id="signupform">
        <h1>Sign up to</h1>
        <img src="src/assets/artopialogo.png" id="logo" alt="Artopia Logo" />
        <form autoComplete="on" onSubmit={handleSubmit(submission)}>
          <label>Username:</label>
          <UsernameField control={control}/>
          <label>Email:</label>
          <EmailField control={control}/>
          <label>Password:</label>
          <PasswordField1 control={control} />
          <label>Repeat Password:</label>
          <PasswordField2 control={control} />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
