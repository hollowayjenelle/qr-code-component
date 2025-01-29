import React from "react";
import qrcode from "../images/qrcode.png";
import "./Card.css";

const Card: React.FC = () => {
  return (
    <div className="cardContainer">
      <img
        src={qrcode}
        alt="qr code that leads to Frontend Masters"
        className="cardImg"
      />
      <div className="cardText">
        <h4 className="cardHeading">
          Improve your front-end skills by building projects
        </h4>
        <p className="cardParagraph">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default Card;
