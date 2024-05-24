import { useState, useEffect } from "react";
import "./putNID.css";

const putNID = ({ state }) => {
  const { contract } = state;
  console.log(contract);
  const [add, setAdd] = useState("");
  const gadd = async (event) => {
    event.preventDefault();
    const { contract } = state;
    console.log(contract);

    const Add = document.querySelector("#pnid").value;
    const pn = await contract.getNID_Holder(Add);
    setAdd(pn);
    console.log(pn);
  };

  return (
    <>
      <header className="head-area">
        <div className="container fix">
          <h2> Get User </h2>
        </div>
      </header>

      <div className="form-section">
        <form onSubmit={gadd}>
          <div className="input-area">
            <label htmlFor="">NID</label>
            <input type="text" id="pnid" />
          </div>

          <div className="input-area">
            {/* <label htmlFor="">Put NID</label> */}
            <input type="submit" value="Submit" id="submit" />
          </div>
        </form>
        <div className="display-area">
          <p>Address:{add}</p>
        </div>
      </div>
    </>
  );
};

export default putNID;
