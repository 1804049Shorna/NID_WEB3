import { useState, useEffect } from "react";
import "./NID.css"

const NIDsta = ({state}) => {
  const [status, setStatus] = useState([]);

  const getstatus = async () => { 
    const { contract } = state;
   console.log(contract);
   const addr=document.querySelector("#add").value
   const stat = await contract.get_status(addr);
   console.log(stat)
   setStatus(stat);
  
   alert("Fetched successully");
 };


  return (
   <>
     <div>
        <h1>Status</h1>
        <input type="text" name="" id="add" />
        <button onClick={getstatus}>Get Users</button>

        <ul className="Ul-compo">
       
            <li >
              <strong>Document Verfication:</strong> {status.isDocumentVerified}
              <br />
              <strong>Call For Biometric:</strong> {status.call_for_biometric}
              <br />
              <strong>NID Ready :</strong> {status.is_NID_assigned}
              <br />
              {/* <strong>Nationality:</strong> {user.nationality} */}
            </li>
        
        </ul>
     </div>
   </>
  )
}

export default NIDsta