import React from "react";
import dasboardIcon from "../img/dashboard.svg";
import portfolioIcon from "../img/portfolio.svg";
import carrersIcon from "../img/carrers.svg";
import contactIcon from "../img/contact.svg";
import adminLogo from "../img/admin_logo.svg";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="sideBar">
        <div className="logo">
          <div className="navCircle">
            <img src={adminLogo} alt="logo" />
          </div>
        </div>
        <nav>
          <NavLink to="/admin/" exact>
            <div className="navTitle">
              <img src={dasboardIcon} alt="dashboard" />
              <p>Dashboard</p>
            </div>
            <div className="navLine"></div>
          </NavLink>
          <NavLink to="/admin/portfolio" exact>
            <div className="navTitle">
              <img src={portfolioIcon} alt="portfolio" />
              <p>Portfolio</p>
            </div>
            <div className="navLine"></div>
          </NavLink>
          <NavLink to="/admin/carrers" exact>
            <div className="navTitle">
              <img src={carrersIcon} alt="carrers" />
              <p>Carrers</p>
            </div>
            <div className="navLine"></div>
          </NavLink>
          <NavLink to="/admin/contact" exact>
            <div className="navTitle">
              <img src={contactIcon} alt="contact" />
              <p>Contact</p>
            </div>
            <div className="navLine"></div>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
