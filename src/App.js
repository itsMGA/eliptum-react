import React from "react";
import "./style.css";
import "./products.css";
import Product from "./Product";
import Navbar from "./Navbar"
import { useState, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { productData, responsive } from "./product_data";



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


  const product = productData.map((item) => (
    <Product
      name={item.name}
      svg={item.svg}
      price={item.price}
      description={item.description}
    />
    ));

  const renderContent = () => {
    switch (selectedOption) {
      case "home":
        return <text text="">Home</text>;  

      case "products":
        return <>
          <Carousel showDots={true} responsive={responsive}>
            {product}
          </Carousel>
        </>
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
