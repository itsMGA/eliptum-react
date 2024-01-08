import React from "react";
import "./style.css";
import Navbar from "./Navbar"
import { useState, useEffect } from "react";


export default function App() {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const handleNavbarHover = () => {
    console.log('hovered');
    setIsNavbarExpanded(true);
  };

  const handleNavbarLeave = () => {
    console.log('not hovered');
    setIsNavbarExpanded(false);
  };
  
  const [selectedOption, setSelectedOption] = useState("home");

  const renderContent = () => {
    switch (selectedOption) {
      case "home":

        return <text className="content" text="">Home</text>;        
      case "products":
        return <text text="">"Automate"</text>;        
      case "shop":
        return <text text="">Shoppping Spree</text>;        
      case "contact":
        return <text text="">Hello, we'll be back soon</text>;        
      default:
        return <text text="">Home</text>;        
    }
  };

  return (
    <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
    <Navbar setSelectedOption={setSelectedOption} handleNavbarHover={handleNavbarHover} handleNavbarLeave={handleNavbarLeave} isNavbarExpanded={isNavbarExpanded}/>
    <main className={`content ${isNavbarExpanded ? 'shiftContent' : isNavbarExpanded === false ? 'shiftContentBack' : ''}`}>
                    {renderContent()}
      </main>
    
  </body>
  </html>


  );
}
