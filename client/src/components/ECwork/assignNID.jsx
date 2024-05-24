import "./assignNID.css";

const assignNID = ({ state }) => {
  const addNID = async (event) => {
    event.preventDefault();
    const { contract } = state;
    console.log(contract);
    const Add = document.querySelector("#Add").value;
    const NID = document.querySelector("#NID").value;

    const ANID = await contract.setNID(Add, NID);
    ANID.wait();
    alert("Assigning is successul");
  };

  return (
    <>
      <header className="head-area">
        <div className="container fix">
          <h2> Assign NID </h2>
        </div>
      </header>

      <div className="form-section">
        <form onSubmit={addNID}>
          <div className="input-area">
            <label htmlFor="">Put Address</label>
            <input type="text" id="Add" />
          </div>
          <div className="input-area">
            <label htmlFor="">Put NID</label>
            <input type="text" id="NID" />
          </div>
          <div className="input-area">
            {/* <label htmlFor="">Put NID</label> */}
            <input type="submit" value="Submit" id="submit"/>
          </div>
        </form>
      </div>
    </>
  );
};

export default assignNID;
