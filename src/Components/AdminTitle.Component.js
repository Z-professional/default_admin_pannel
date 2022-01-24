import React from "react";

const AdminTitle = ({ title, desc }) => {
  return (
    <>
      <div className="Title">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </>
  );
};

export default AdminTitle;
