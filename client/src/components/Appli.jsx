import { Link } from "react-router-dom";

const Appli = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/apply">Apply Now</Link>
          </li>
          <li>
            <Link to="/RequestEdit">Reuest For Edit </Link>
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
  );
};

export default Appli;
