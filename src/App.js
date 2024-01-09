import React from "react";
import "./style.css";
import "./products.css";
import Product from "./Product";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./product_data";

export default function App() {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const handleNavbarHover = () => {
    console.log("hovered");
    setIsNavbarExpanded(true);
  };

  const handleNavbarLeave = () => {
    console.log("not hovered");
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
        return (
          <>
            <div>
              <link
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
                rel="stylesheet"
              />

              <section className="section services-section" id="services">
                <div className="container">
                  <div className="row">
                    <div className="page-header">
                      <div className="section-title">
                        <h2>Services</h2>
                        <p>
                          I design and develop services for customers of all
                          sizes, specializing in creating stylish, modern
                          websites
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row services-row">
                    <div className="feature-container">
                      <div className="feature-box-1 frontend">
                        <div className="icon">
                          <i className="fa fa-desktop"></i>
                        </div>
                        <div className="feature-content">
                          <h5>Frontend</h5>
                          <p>
                            I design and develop services for customers of all
                            sizes, specializing in creating stylish, modern
                            websites.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="feature-container">
                      <div className="feature-box-1 backend">
                        <div className="icon">
                          <i className="fa fa-user"></i>
                        </div>
                        <div className="feature-content">
                          <h5>Backend</h5>
                          <p>
                            I design and develop services for customers of all
                            sizes, specializing in creating stylish, modern
                            websites.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="feature-container">
                      <div className="feature-box-1 integration">
                        <div className="icon">
                          <i className="fa fa-comment"></i>
                        </div>
                        <div className="feature-content">
                          <h5>Integration</h5>
                          <p>
                            I design and develop services for customers of all
                            sizes, specializing in creating stylish, modern
                            websites.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </>
        );
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
        <Navbar
          setSelectedOption={setSelectedOption}
          handleNavbarHover={handleNavbarHover}
          handleNavbarLeave={handleNavbarLeave}
          isNavbarExpanded={isNavbarExpanded}
        />

        <main
          className={`content ${
            isNavbarExpanded
              ? "shiftContent"
              : isNavbarExpanded === false
                ? "shiftContentBack"
                : ""
          }`}
        >
          {renderContent()}
        </main>
      </body>
    </html>
  );
}
