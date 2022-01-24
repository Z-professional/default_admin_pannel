import React from "react";
import AdminTitle from "./AdminTitle.Component";
import BarChart from "./BarChart.Component";
import increaseIcon from "../img/increaseArrow.svg";
import decreaseIcon from "../img/decreaseArrow.svg";

const Dashboard = () => {
  return (
    <>
      <div className="dashboardContainer">
        <AdminTitle title="Dashboard" desc="Data Visualization, Statistics" />
        <div className="visits-wrapper">
          <div className="total-visits">
            <p>Total Visits</p>
            <p>20,000</p>
          </div>
          <div className="todays-visits">
            <div className="todays-visits-tit">
              <p>Today's Visits</p>
              <img src={increaseIcon} alt="" />
              <img src={decreaseIcon} alt="" />
            </div>
            <p className="highlighted">168</p>
          </div>
        </div>
        <AdminTitle title="Overview" desc="Data Visualization, Statistics" />
        <BarChart />
      </div>
    </>
  );
};

export default Dashboard;
