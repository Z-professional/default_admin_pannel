import React from "react";
import AdminTitle from "./AdminTitle.Component";

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
            </div>
            <p className="highlighted">168</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
