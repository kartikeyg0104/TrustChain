import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import "../Styles/Login.css";

const auth = getAuth(app);

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }
    
    if (formData.mobile.length < 10) {
      alert("Please enter a valid mobile number!");
      return;
    }
    
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      alert(`Sign up successful! Welcome ${formData.name}!`);
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSignUp}>
        <h2>Create Your Account</h2>
        
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="input-group">
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleInputChange}
            pattern="[0-9]{10,15}"
            required
          />
        </div>
        
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password (min 6 characters)"
            value={formData.password}
            onChange={handleInputChange}
            minLength="6"
            required
          />
        </div>
        
        <div className="input-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            minLength="6"
            required
          />
        </div>
        
        <button type="submit" className="login-button">
          <span>Create Account</span>
        </button>
        
        <div className="login-links">
          Already have an account?
          <Link to="/">Login here</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;