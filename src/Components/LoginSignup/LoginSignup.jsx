import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

import user_icon from "../Assets/icons8-user-24.png";
import email_icon from "../Assets/icons8-email-24.png";
import password_icon from "../Assets/icons8-password-24.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const url = action === "Sign Up" ? "http://127.0.0.1:5000/register" : "http://127.0.0.1:5000/login";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        navigate("/home");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              name="username"
              placeholder="Name"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            name="email"
            placeholder="Email Id"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
        <div className="submit" onClick={handleSubmit}>
          Submit
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
