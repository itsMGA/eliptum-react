import React from "react";
import "./style.css";
import "./services-style.css";
import Service from "./Service";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import { services_data } from "./services_data";
import { motion, AnimatePresence } from "framer-motion";

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
        setSelectedServiceIndex(null);
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
    <motion.div
      layout="position"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
      transition={{ layout: { type: "spring", stiffness: 100, damping: 12.5 } }}
      onClick={() => handleServiceClick(index)}
      key={index}
    >
      <Service
        name={item.name}
        imageName={item.imageName}
        className={item.className}
        desc={item.desc}
        selectedServiceIndex={selectedServiceIndex}
        index={index} // Add this line
      />
    </motion.div>
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
              <section className="" id="services"                       className={`row services-row${
                        selectedServiceIndex !== null ? " ss-services-row" : ""
                      }`}>
                
                <div className="container">
                  <AnimatePresence>
                    {selectedServiceIndex === null && (
                      <motion.div
                        initial={{ opacity: 1, height: "auto" }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                        className="row services-desc"
                      >
                        <div className="page-header">
                          <div className="section-title">
                            <h2>Services</h2>
                            <p>
                              Enhance efficiency, reliability, and quality with
                              automated test solutions.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    <div
                      className={`row services-row${
                        selectedServiceIndex !== null ? " ss-services-row" : ""
                      }`}
                    >
                      {/* {" "} */}
                      {selectedServiceIndex === null
                        ? services
                        : services[selectedServiceIndex]}
                    </div>
                  </AnimatePresence>
                </div>
              </section>
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
