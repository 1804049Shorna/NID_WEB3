import { Link, Navigate } from "react-router-dom";

const GovBody = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/putNID">PUT NID</Link>
          </li>
          <li>
            <Link to="/admin">Get User Info</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default GovBody;
