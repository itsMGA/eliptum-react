import React from "react";
import { motion } from "framer-motion";
// Import form components here. For example:
// import ServiceFormA from './ServiceFormA';
// import ServiceFormB from './ServiceFormB';

function getFormComponentForService(serviceName) {
  // Adjust the function to return a function that renders the JSX
  switch (serviceName) {
    case 'Business to Business':
      return () => (
        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore iste error assumenda aut reiciendis recusandae? Ipsum beatae doloribus sapiente eius explicabo sequi rerum, tempora autem rem laborum doloremque nostrum similique.</div>
      );
    case 'Service Name 2':
      return () => (
        <div>TESDSDDSD</div>
      );
    default:
      return () => <div>NO FORM FOUND</div>;
  }
}
export default function Service({
  name,
  imageName,
  className,
  desc,
  selectedServiceIndex,
  index,
}) {
  const isSelected = selectedServiceIndex === index; // Check if the service is selected
  const FormComponent = getFormComponentForService(name); // Get the specific form component for this service

  const combinedClassName = `feature-container ${className} ${isSelected ? "card-selected" : ""}`;

  return (
    <div className={combinedClassName}>
      <div className={`feature-box-1 ${className}`}>
        <motion.div layout="position" className="icon">
          <motion.i layout="position" className={imageName}></motion.i>
        </motion.div>
        {!isSelected && ( // Conditionally render the service content
          <div className="feature-content">
            <h1>{name}</h1>
            <p>{desc}</p>
          </div>
        )}
      </div>
      <div className="service-form-content">
        {isSelected && FormComponent && <FormComponent />}
      </div>
    </div>
  );
}
