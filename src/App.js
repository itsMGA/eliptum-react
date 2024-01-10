import React from "react";
import "./style.css";
import "./services-style.css";
import Service from "./Service";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import { services_data } from "./services_data";

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

  const [selectedServiceIndex, setSelectedServiceIndex] = useState(null);

  const [isServiceSelected, setIsServiceSelected] = useState(false);

  const handleServiceClick = (index) => {
    console.log("Clicked service index:", index); // Add a log to track the index clicked

    if (index >= 0 && index < services_data.length) {
      // Check if index is within range
      if (isServiceSelected && selectedServiceIndex === index) {
        setIsServiceSelected(false); // If already selected, deselect
        console.log(false);
      } else {
        setSelectedServiceIndex(index);
        setIsServiceSelected(true); // Select the service
        console.log(true);
      }
    } else {
      console.error("Invalid index or index out of range");
    }
  };

  const services = services_data.map((item, index) => (
    <div key={index} onClick={() => handleServiceClick(index)}>
      <Service
        name={item.name}
        imageName={item.imageName}
        className={item.className}
        desc={item.desc}
      />
    </div>
  ));

  const renderContent = () => {
    switch (selectedOption) {
      case "home":
        return <text text="">Home</text>;

      case "services":
        return (
          <>
            <div>
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
              />
              {!isServiceSelected ? (
                <section className="section services-section" id="services">
                  <div className="container">
                    <div className="row">
                      <div className="page-header">
                        <div className="section-title">
                          <h2>Services</h2>
                          <p>
                            Enhance efficiency, reliability, and quality with
                            automated test solutions.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row services-row">{services}</div>
                  </div>
                </section>
              ) : (
                <div
                  className={`selected-service ${
                    isServiceSelected ? "active" : ""
                  }`}
                >
                  {services[selectedServiceIndex]}
                </div>
              )}
            </div>
          </>
        );

      case "shop":
        return <text text="">Shopping Spree</text>;

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
