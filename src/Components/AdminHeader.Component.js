import React from "react";
import userIcon from "../img/user.svg";
import downArrow from "../img/downarrow.svg";

const AdminHeader = () => {
  return (
    <>
      <header>
        <div className="lineContainer">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="userId">
          <img src={userIcon} alt="user" />
          <p>admin@website.com</p>
          <img src={downArrow} alt="arrow" />
        </div>
      </header>
    </>
  );
};

export default AdminHeader;
