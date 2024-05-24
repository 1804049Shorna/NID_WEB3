import React from 'react'

const requEdit = ({state}) => {

  const reEdit = async (event) => {
    event.preventDefault();
    const { contract } = state;
    console.log(contract);
    const Add = document.querySelector("#Add").value;
    const section = document.querySelector("#sec").value;
    const field = document.querySelector("#fi").value;

    const ReEdit = await contract.editAddressInfo(Add,section,field);
    ReEdit.wait();
    alert("Request is successul");
  };


  return (
   <>
    <header className="head-area">
        <div className="container fix">
          <h2> Fill up these section for Edit  </h2>
        </div>
      </header>

      <div className="form-section">
        <form onSubmit={reEdit}>
          <div className="input-area">
            <label htmlFor="">Your Address</label>
            <input type="text" id="Add" />
          </div>
          <div className="input-area">
            <label htmlFor="">Section</label>
            <input type="text" id="sec" />
          </div>
          <div className="input-area">
            <label htmlFor="">Field</label>
            <input type="text" id="fi" />
          </div>
          <div className="input-area">
            {/* <label htmlFor="">Put NID</label> */}
            <input type="submit" value="Submit" id="submit"/>
          </div>
        </form>
      </div>

   </>
  )
}

export default requEdit