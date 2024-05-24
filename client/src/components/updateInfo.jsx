import { Link } from "react-router-dom";

const updateInfo = () => {
  return (
    <>
      <nav>
        <ul>
        <li>
            <Link to="/updatePersonalInfo">Update Personal Info</Link>
          </li>
          <li>
            <Link to="/updateGaurInfo">Update Family Info</Link>
          </li>
          <li>
            <Link to="/updateEduInfo">Update Education Info</Link>
          </li>
          <li>
            <Link to="/updateAddInfo">Update Address Info</Link>
          </li> 
        </ul>
      </nav>
    </>
  )
}

export default updateInfo