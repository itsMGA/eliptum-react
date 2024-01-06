import React from "react";
import "./style.css";
import Navbar from "./Navbar"
import { useState, useEffect } from "react";
import Fader from "./Fader";


export default function App() {

  const [selectedOption, setSelectedOption] = useState("home");

  const renderContent = () => {
    switch (selectedOption) {
      case "home":
        return <Fader text="Home"></Fader>;        
      case "products":
        return <Fader text="Automate </>"></Fader>;        
      case "shop":
        return <Fader text="Shoppping Spree"></Fader>;        
      case "contact":
        return <Fader text="Hello, we'll be back soon"></Fader>;        
      default:
        return <Fader text="Home"></Fader>;        
    }
  };
  
  return (
    <html><head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script defer src="theme.js"></script>
      <link rel="stylesheet" href="style.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
    <Navbar setSelectedOption={setSelectedOption} />
        <main>
        <main>{renderContent()}</main>
      </main>
    
  </body>
  </html>


  );
}
