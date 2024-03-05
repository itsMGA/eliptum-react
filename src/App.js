import React, { useState } from "react";
import LoggedInUserComponent from "./app_components/loggedInUserComponents/LoggedInUserComponent";
import LandingPage from "./app_components/landingPage/LandingPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginStateChange = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      {isLoggedIn ? (
        <LoggedInUserComponent />
      ) : (
        <LandingPage onSignInSignUp={handleLoginStateChange} />
      )}
    </div>
  );
}

export default App;
