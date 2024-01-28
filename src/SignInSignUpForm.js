import React, { useState, useEffect, useRef } from "react";
import "./SignInSignUpForm.css";

const SignInSignUpForm = ({ toggleForm }) => {
  const [formType, setFormType] = useState("signin");
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
      // Add sign-in API call logic here
      console.log("Sign in logic here");
    } else if (formType === "signup") {
      // Add sign-up API call logic here
      console.log("Sign up logic here");
    } else if (formType === "reset") {
      // Add reset password API call logic here
      console.log("Reset password logic here");
    }
  };

  return (
    <div className="overlay">
      <div className={`signin-signup-modal ${formType}`} ref={formRef}>
        <button className="close-button" onClick={toggleForm}>
          &times;
        </button>

        <form onSubmit={handleSubmit}>
          {formType !== "reset" && (
            <input
              type="text"
              placeholder={formType === "signin" ? "Username" : "New Username"}
            />
          )}
          {formType !== "signup" && (
            <input type="password" placeholder="Password" />
          )}
          {formType === "reset" && (
            <>
              <input type="password" placeholder="Old Password" />
              <input type="password" placeholder="New Password" />
            </>
          )}
          <button type="submit">
            {formType === "signin"
              ? "Sign In"
              : formType === "signup"
                ? "Sign Up"
                : "Reset Password"}
          </button>
        </form>

        {formType !== "reset" && (
          <button
            onClick={() =>
              setFormType(formType === "signin" ? "signup" : "signin")
            }
          >
            {formType === "signin"
              ? "Need an account? Sign Up"
              : "Already have an account? Sign In"}
          </button>
        )}

        {formType === "signin" && (
          <button onClick={() => setFormType("reset")}>Forgot Password?</button>
        )}

        {formType === "reset" && (
          <button onClick={() => setFormType("signin")}>Back to Sign In</button>
        )}
      </div>
    </div>
  );
};

export default SignInSignUpForm;
