import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Service from "./Service";
import "./services-style.css";
import { getFormComponentForService } from './servicesForms/getFormComponentForService'; // Assuming this is the function from your first component

export default function ServicesComponent({
  services,
  selectedServiceIndex,
  handleServiceClick,
  onFormSubmitSuccess,
}) {
  const renderService = (item, index) => (
    <motion.div
      layout="position"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
        index={index}
      />
    </motion.div>
  );

  const FormComponent = selectedServiceIndex !== null ? getFormComponentForService(services[selectedServiceIndex].name, onFormSubmitSuccess) : null;

  const handleFormClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <section className={`section service-section ${selectedServiceIndex !== null ? "selected-serv-section" : ""}`}>
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
                    <p>Enhance efficiency, reliability, and quality with automated test solutions.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            <div className={`row services-row ${selectedServiceIndex !== null ? "ss-services-row" : ""}`}>
              {selectedServiceIndex === null ? services.map(renderService) : renderService(services[selectedServiceIndex], selectedServiceIndex)}
              {selectedServiceIndex !== null && FormComponent && (
                <div className="service-form-content" onClick={handleFormClick}>
                  <FormComponent />
                </div>
              )}
            </div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
