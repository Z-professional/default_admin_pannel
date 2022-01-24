import React from "react";
import SideBar from "../Components/SideBar.Component";
import { Routes, Route } from "react-router-dom";
import AdminHeader from "../Components/AdminHeader.Component";
import Dashboard from "../Components/Dashboard.Component";
import Portfolio from "../Components/Portfolio.Component";
import Carrers from "../Components/Carrers.Component";
import Contact from "../Components/Contact.Component";
const AdminPanel = () => {
  return (
    <>
      <div className="dFlex">
        <SideBar />
        <div className="mainContent">
          <AdminHeader />
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/portfolio" exact element={<Portfolio />} />
            <Route path="/carrers" exact element={<Carrers />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
