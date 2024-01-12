import React from "react";

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
  const combinedClassName = `feature-container ${className} ${
    isSelected ? "card-selected" : ""
  }`;

  return (
    <div className={combinedClassName}>
      <div className={`feature-box-1 ${className}`}>
        <div className="icon">
          <i className={imageName}></i>
        </div>
        {!isSelected && ( // Conditionally render the text
          <div className="feature-content">
            <h5>{name}</h5>
            <p>{desc}</p>
          </div>
        )}
      </div>
    </div>
  );
}
