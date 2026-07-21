import React from "react";
import "./UserCard.css";
import images from "/public/Mercedes.png";

const UserCard = () => {
  return (
    <div className="user-container">
      <p id="user-name">Mercedes</p>
      <img id="user-img" src={images} alt=""></img>
      <p id="user-desc">Car</p>
    </div>
  );
};

export default UserCard;
