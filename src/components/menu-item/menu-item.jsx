import React from "react";

import "./menu-item.scss";

const MenuItem = ({ itemDetails }) => {
  const { title, imageUrl, size } = itemDetails;
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
