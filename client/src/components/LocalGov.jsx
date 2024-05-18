import { Link } from "react-router-dom";

const LocalGov= () => {
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
            <Link to="/Status"> Check Status</Link>
          </li>
          <li>
            <Link to="/getnid"> Get NID</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default LocalGov