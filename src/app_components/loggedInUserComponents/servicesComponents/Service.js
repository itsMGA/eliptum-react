import React from "react";
import { motion } from "framer-motion";

export default function Service({
  name,
  imageName,
  className,
  desc,
  selectedServiceIndex,
  index,
}) {
  const isSelected = selectedServiceIndex === index; // Check if the service is selected

  // Use the `isSelected` variable to conditionally apply a class or style
  const combinedClassName = `feature-container ${className} ${isSelected ? "card-selected" : ""
    }`;

  return (
    <div className={combinedClassName}>
      <div className={`feature-box-1 ${className}`}>
        <motion.div layout="position" className="icon">
          <motion.i layout="position" className={imageName}></motion.i>
        </motion.div>
        {!isSelected && ( // Conditionally render the text
          <div className="feature-content">
            <h1>{name}</h1>
            <p>{desc}</p>
          </div>
        )}
      </div>
    </div>
  );
}
