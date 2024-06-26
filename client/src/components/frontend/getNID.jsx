import { useState, useEffect } from "react";
import "./getNID.css"

const getNID = ({state}) => {

  const { contract } = state;
  console.log(contract);
  const [nid, setnid] = useState("");
  const gnid = async (event) => {
    event.preventDefault();
    const { contract } = state;
    console.log(contract);

    const Add = document.querySelector("#gnid").value;
    const gn = await contract.getNID(Add);
    setnid(gn);
    console.log(gn);
  };




  return (
   <>
     <header className="head-area">
        <div className="container fix">
          <h2> Get Your NID </h2>
        </div>
      </header>
      <div className="form-section">
        <form onSubmit={gnid}>
          <div className="input-area">
            <label htmlFor="">Address</label>
            <input type="text" id="gnid" />
          </div>

          <div className="input-area">
            {/* <label htmlFor="">Put NID</label> */}
            <input type="submit" value="Submit" id="submit" />
          </div>
        </form>
        <div className="display-area">
          <p>NID:{nid}</p>
        </div>
      </div>
   </>
  )
}

export default getNID
