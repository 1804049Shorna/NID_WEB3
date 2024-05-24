import { useState, useEffect } from "react";
import "./getEdit.css"

const getEdit = ({state}) => {

  const [requests, setrequ] = useState([]);


    const getuser = async () => { 
       const { contract } = state;
      console.log(contract);
      const requ = await contract.getEditInfo();
      console.log(requ)
      setrequ(requ);
      // await userlist.wait();
      alert("Fetched successully");
    };


  
  return (

    <>
    
    <div>
        <h1>User List</h1>
        <button onClick={getuser}>Get Users</button>
        <ul className="Ul-compo">
          {requests.map((requ, index) => (
            <li key={index}>
              <strong>Address:</strong> {requ.add}
              <br />
              <strong>Section:</strong> {requ.section}
              <br />
              <strong>Field:</strong> {requ.division}
              <br />
              {/* <strong>Nationality:</strong> {user.nationality} */}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default getEdit