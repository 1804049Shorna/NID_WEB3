import { Link } from "react-router-dom";

const LocalGov= ({account}) => {

if(account==="0xf88C00985Cb760181aAAc729aedFeb17d385cE7E"){
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/admin">Get User Info</Link>
          </li>
          <li>
            <Link to="/getEditInfo">Get All Edit Request</Link>
          </li>
          
          <li>
            <Link to="/updateInfo">Update Info</Link>
          </li>
          <li>
            <Link to="/giveStatus">Give Status</Link>
          </li>
        
        </ul>
      </nav>
    </>
  )
}
  
}

export default LocalGov