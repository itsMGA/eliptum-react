import React, { useState, useEffect, useRef } from "react";
import "./SignInSignUpForm.css";
import { FaUser, FaLock, FaLockOpen } from "react-icons/fa";

const SignInSignUpForm = ({ toggleForm }) => {
  const [formType, setFormType] = useState("signin");
  const [rememberMe, setRememberMe] = useState(false); // State to track the checkbox
  const formRef = useRef();

  useEffect(() => {
    const checkClickOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        toggleForm();
      }
    };

    document.addEventListener("mousedown", checkClickOutside);
    return () => {
      document.removeEventListener("mousedown", checkClickOutside);
    };
  }, [toggleForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "signin") {
      console.log("Login logic here", { rememberMe });
    } else if (formType === "signup") {
      console.log("Register logic here");
    } else if (formType === "reset") {
      console.log("Reset password logic here");
    }
  };
  const handleCheckboxClick = () => {
    setRememberMe(!rememberMe);
  };
  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const getHeader = () => {
    switch (formType) {
      case "signin":
        return "Sign In";
      case "signup":
        return "Sign Up";
      case "reset":
        return "Password Recovery";
      default:
        return "Welcome";
    }
  };

  return (
    <div className="overlay">
      <div className={`signin-signup-modal ${formType}`} ref={formRef}>
        <h1>{getHeader()}</h1>
        <button className="close-button" onClick={toggleForm}>
          &times;
        </button>

        <form className="form-content" onSubmit={handleSubmit}>
          {formType === "signin" && (
            <div className="singup-box">
              <div className="input-box">
                <input
                  type="text"
                  placeholder={
                    formType === "signin" ? "Username" : "New Username"
                  }
                />
                <FaUser className="icon-login" />
              </div>
              <div className="input-box">
                <input type="password" placeholder="Password" />
                <FaLock className="icon-login" />
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  className="futuristic-checkbox"
                />
                <label
                  htmlFor="rememberMe"
                  className="checkbox-label"
                  onClick={handleCheckboxClick}
                >
                  Remember Me
                </label>
              </div>
            </div>
          )}

          {formType === "signup" && (
            <>
              <div className="input-box">
                <input type="text" placeholder="Username" />
                <FaUser className="icon-login" />
              </div>
              <div className="input-box">
                <input type="password" placeholder="Password" />
                <FaUser className="icon-login" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Email" />
                <FaUser className="icon-login" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Phone number (optional)" />
                <FaUser className="icon-login" />
              </div>
            </>
          )}

          {formType === "reset" && (
            <>
              <div className="input-box reset-pass-box">
                <input type="password" placeholder="Current Password" />
                <FaLock
                  className={`icon-login ${formType === "reset" ? "icon-reset-current" : ""}`}
                />
                <input type="password" placeholder="New Password" />
                <FaLockOpen
                  className={`icon-login ${formType === "reset" ? "icon-reset-new" : ""}`}
                />
              </div>
            </>
          )}

          <button className="submitbtn" type="submit">
            {formType === "signin"
              ? "Sign In"
              : formType === "signup"
                ? "Sign Up"
                : "Reset Password"}
          </button>
        </form>
        <div className="account-actions">
          {formType !== "reset" && (
            <div className="signup-box">
              {formType === "signin" ? (
                <p>Don't have an account?</p>
              ) : (
                <p>Already have an account?</p>
              )}
              <a
                href="#"
                onClick={() =>
                  setFormType(formType === "signin" ? "signup" : "signin")
                }
              >
                {formType === "signin" ? "Sign Up" : "Sign In"}
              </a>
            </div>
          )}

          {formType === "signin" && (
            <a
              href="#"
              className="forgot-pass"
              onClick={() => setFormType("reset")}
            >
              Forgot Password?
            </a>
          )}

          {formType === "reset" && (
            <button
              className="back-to-signin"
              onClick={() => setFormType("signin")}
            >
              Back to Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default SignInSignUpForm;
