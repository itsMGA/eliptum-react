import React from "react";

export default function Service(props) {
  const combinedClassName = `feature-container ${
    props.selectedServiceIndex !== null ? "card-selected" : ""
  }`;
  return (
    <div className={combinedClassName}>
      <div className={`feature-box-1 ${props.className}`}>
        <div className="icon">
          <i className={props.imageName}></i>
        </div>
        <div className="feature-content">
          <h5>{props.name}</h5>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}
