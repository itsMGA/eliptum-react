import React from "react";

export default function SignInSignUpForm({ toggleForm }) {
  return (
    <div className="signin-signup-modal">
      {/* Modal content */}
      <button onClick={toggleForm}>Close</button>
      {/* Form elements go here */}
    </div>
  );
}
