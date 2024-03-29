import React, { useState, useEffect, useRef } from "react";
import "./SignInSignUpForm.css";
import {
  FaUser,
  FaLock,
  FaLockOpen,
  FaExclamationCircle,
} from "react-icons/fa";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "./phone_style.css";
import { encryptData } from "./encryptUtil"; // adjust the path according to your project structure
import axiosInstance from "../../axiosConfig";


const SignInSignUpForm = ({ toggleForm, onLoginSuccess }) => {
  const [formType, setFormType] = useState("signin");
  const [rememberMe, setRememberMe] = useState(false); // State to track the checkbox
  const formRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [highlight_red, sethighlight_red] = useState(""); // State for success message
  const [login_email, setLoginEmail] = useState("");
  const [login_password, setLoginPassword] = useState("");

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

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

  useEffect(() => {
    setErrorMessage("");
  }, [formType]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message
    setSuccessMessage(""); // Reset success message
    sethighlight_red("");

    if (formType === "signin") {
      console.log("we're siging in ");
      if (!validateEmail(login_email)) {
        setErrorMessage("Invalid email format");
        sethighlight_red("email");
        return;
      }

      if (!login_password || login_password.length === 0) {
        setErrorMessage("No password provided");
        sethighlight_red("password");
        return;
      }
      try {
        const public_key_r = await axiosInstance.get("/get-public-key", {
          withCredentials: true,
        });

        const publicKey = public_key_r.data.publicKey;
        const csrfToken = public_key_r.data.csrf_token;
        console.log(csrfToken);
        const encryptedPassword = await encryptData(
          login_password,
          publicKey,
          false,
        );

        const response = await axiosInstance.post(
          "/user/login",
          {
            email: login_email,
            password: encryptedPassword,
          },
          {
            withCredentials: true,
            headers: {
              "X-CSRFToken": csrfToken,
            },
          },
        );

        if (response.status === 200) {
          setSuccessMessage("You have been successfully logged in.");
          console.log("logged in with success");

          setTimeout(() => {
            localStorage.setItem("access_token", response.data.access_token); // Assuming 'token' is the JWT token
            onLoginSuccess();
            toggleForm();
          }, 1000);
        }
      } catch (error) {
        if (error.response) {
          console.log(error.response.data.message);
          console.log(error.response);
          setErrorMessage(error.response.data.message);
        }
      }
    } else if (formType === "signup") {
      if (!username || username.length < 3 || username.length > 15) {
        setErrorMessage("Username must be 3-15 characters long");
        sethighlight_red("username");
        return;
      }
      if (!validateEmail(email)) {
        setErrorMessage("Invalid email format");
        sethighlight_red("email");
        return;
      }
      if (!password || password.length < 8) {
        setErrorMessage("Password must be at least 8 characters long");
        sethighlight_red("password");
        return;
      }

      try {
        const public_key_r = await axiosInstance.get(
          "/get-public-key",
          {
            withCredentials: true, // This is crucial for cookies to be sent and received in cross-origin requests
          },
        );
        const publicKey = public_key_r.data.publicKey;
        const csrfToken = public_key_r.data.csrf_token;
        console.log(csrfToken);
        const encryptedPassword = await encryptData(password, publicKey, false);

        const response = await axiosInstance.post(
          "/user/create",
          {
            username,
            password: encryptedPassword,
            email,
            phone_number: phoneNumber,
          },
          {
            withCredentials: true,
            headers: {
              "X-CSRFToken": csrfToken,
            },
          },
        );

        if (response.status === 201) {
          setSuccessMessage("Account created successfully!");
          setTimeout(() => {
            setFormType("signin");
          }, 1000);
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          console.log(error.response.data.message);
          console.log(error.response);
          setErrorMessage(error.response.data.message);
          if (error.response.data.message === "Email already used") {
            sethighlight_red("email");
          } else if (error.response.data.message === "User already exists") {
            sethighlight_red("username");
          }
        } else {
          setErrorMessage("An unexpected error occurred" + error);
        }
      }
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
    <div className="overlay-signin">
      <div className={`signin-signup-modal ${formType}`} ref={formRef}>
        <h1>{getHeader()}</h1>
        <button className="close-button" onClick={toggleForm}>
          &times;
        </button>

        <form className="form-content" onSubmit={handleSubmit}>
          {formType === "signin" && (
            <div className="singup-box">
              <div
                className={`input-box ${highlight_red === "email" ? "error_field_highlight" : ""}`}
              >
                <input
                  name="email"
                  type="text"
                  placeholder="E-Mail"
                  value={login_email}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
                <FaUser className="icon-login" />
              </div>
              <div
                className={`input-box ${highlight_red === "password" ? "error_field_highlight" : ""}`}
              >
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={login_password}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                <FaLock className="icon-login" />
              </div>
              <div className="checkbox-container">
                <input
                  name="checkbox"
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
              {errorMessage && (
                <div className="error-container fade-in">
                  <FaExclamationCircle className="error-icon" />
                  <span className="error-message">{errorMessage}</span>
                </div>
              )}
            </div>
          )}
          {formType === "signup" && (
            <>
              <div
                className={`input-box ${highlight_red === "username" ? "error_field_highlight" : ""}`}
              >
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <FaUser className="icon-login" />
              </div>
              <div
                className={`input-box ${highlight_red === "password" ? "error_field_highlight" : ""}`}
              >
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FaUser className="icon-login" />
              </div>
              <div
                className={`input-box ${highlight_red === "email" ? "error_field_highlight" : ""}`}
              >
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FaUser className="icon-login" />
              </div>
              <div
                className={`input-box ${highlight_red === "phone" ? "error_field_highlight" : ""}`}
              >
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(value) => setPhoneNumber("+" + value)}
                  country="ro"
                />
              </div>
              {errorMessage && (
                <div className="error-container fade-in">
                  <FaExclamationCircle className="error-icon" />
                  <span className="error-message">{errorMessage}</span>
                </div>
              )}
            </>
          )}
          {formType === "reset" && (
            <>
              <div className="input-box reset-pass-box">
                <input
                  type="password"
                  placeholder="Current Password"
                  name="password"
                />
                <FaLock
                  className={`icon-login ${formType === "reset" ? "icon-reset-current" : ""}`}
                />
                <input
                  type="password"
                  placeholder="New Password"
                  name="new-password"
                />
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
        {successMessage && (
          <div className="success-message">
            <div className="success-icon">✓</div>
            {successMessage}
          </div>
        )}
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
