import React from "react";
import AdminTitle from "./AdminTitle.Component";

const Carrers = () => {
  return (
    <>
      <div className="carrersContainer">
        <AdminTitle title="Carrers" desc="carrers/vacancy" />
        <div className="carrersForm">
          <h3>Add New Vacancy</h3>
          <form action="#">
            <div className="formInput">
              <p>Job Title</p>
              <input type="text" />
            </div>
            <div className="formInput">
              <p>Corporate Title</p>
              <input type="text" />
            </div>
            <div className="formInput">
              <p>No. of Vacancy (In Number)</p>
              <input type="number" />
            </div>
            <div className="formInput">
              <p>Requirements (Separate lines using \\)</p>
              <textarea name="textarea" id="" rows="10"></textarea>
            </div>
            <div className="formInput">
              <p>Salary</p>
              <input type="text" />
            </div>
            <div className="formInput">
              <p>Job Type</p>
              <select name="type">
                <option value="1">Web Design</option>
                <option value="2">Mockup</option>
                <option value="3">Logo Design</option>
              </select>
            </div>
            <input type="button" value="Add" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Carrers;
