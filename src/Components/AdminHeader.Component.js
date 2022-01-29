import React from "react";
import userIcon from "../img/user.svg";
import downArrow from "../img/downarrow.svg";
import triangle from "../img/triangle.svg";

const AdminHeader = () => {
  const tooltip = () => {
    var x = document.querySelector(".logout-tooltip");
    if (x.style.visibility === "visible") {
      x.style.visibility = "hidden";
    } else {
      x.style.visibility = "visible";
    }
  };
  return (
    <>
      <header>
        <div className="lineContainer">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="userId" onClick={() => tooltip()}>
          <img src={userIcon} alt="user" />
          <p>admin@website.com</p>
          <img src={downArrow} alt="arrow" />
          <div className="logout-tooltip">
            <img src={triangle} alt="triangle" />
            <div className="logout-wrapper">
              <p>Logout</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AdminHeader;
