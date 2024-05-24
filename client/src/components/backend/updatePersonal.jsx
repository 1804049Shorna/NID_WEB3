import { useState, useEffect } from "react";
import "./updatePersonal.css";

const updatePersonal = ({state}
    
) => {
    const adduser = async (event) => {
        event.preventDefault();
        const { contract } = state;

    const name = document.querySelector("#name").value;
    const gender = document.querySelector("#gender").value;
    const bloodgrp = document.querySelector("#blood").value;
    const birthcir = document.querySelector("#birthCir").value;
    const dofbirth = document.querySelector("#date").value;
    const pofbirth = document.querySelector("#Place").value;

    const ADD = await contract.addUserpersonal(
        name,
        gender,
        bloodgrp,
        birthcir,
        dofbirth,
        pofbirth
      );
      ADD.wait();
      alert("Updating is succesful");


    }





  return (
    <>
      <header className="head-area">
        <div className="container fix">
          <h2> Update Personal Info </h2>
        </div>
      </header>

      <div className="form-section">
        <form onSubmit={adduser}>
          <div className="peron-info">
            <div className="col-6">
              <div className="inputbox">
                <div className="label-div">
                  <label htmlFor="">Name</label>
                </div>

                <input type="text" required="required" id="name" />
              </div>
              <div className="inputbox">
                <div className="label-div">
                  <label htmlFor="">Gender</label>
                </div>
                <input type="text" required="required" id="gender" />
              </div>
              <div className="inputbox">
                <div className="label-div">
                  <label htmlFor="">Blood Group</label>
                </div>
                <input type="text" required="required" id="blood" />
              </div>
            </div>

            <div className="col-6">
              <div className="inputbox">
                <div className="label-div">
                  <label htmlFor="">Birth Cirtificate Number</label>
                </div>

                <input type="text" required="required" id="birthCir" />
              </div>
              <div className="inputbox">
                <div className="label-div">
                  <label htmlFor="">Date Of Birth</label>
                </div>

                <input type="date" required="required" id="date" />
              </div>
              <div className="inputbox">
                <div className="label-div">
                  <label htmlFor="">Place Of Birth</label>
                </div>

                <input type="text" required="required" id="Place" />
              </div>
            </div>
          </div>
           <div className="inputbox">
              <input type="submit" value="Update" id="submit" />
            </div>
        </form>
      </div>
    </>
  );
};

export default updatePersonal;
