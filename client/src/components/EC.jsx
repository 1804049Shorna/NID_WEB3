import { Link, Navigate } from "react-router-dom";

const EC = ({account}) => {
   
   if( account === "0x8cDB6fb980524018A491681826190fa7153Bc9aD"){
      return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/admin">Get User Info</Link>
          </li>
          <li>
            <Link to="/assignNID">Assign NID</Link>
          </li>

          <li>
            <Link to="/giveStatus">Give Status</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
  

};

export default EC;
