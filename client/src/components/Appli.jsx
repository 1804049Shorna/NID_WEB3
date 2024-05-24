import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
  useNavigate
} from "react-router-dom";

const Appli = ({ state, account }) => {

  const [navigateTo, setNavigateTo] = useState(null);
    


  if (account === "0x1613d968665C978C3a5b7A08653185377DFbEDb8") {
    return (
      <>
        <nav>
          <ul>
            <li>
            <Link to="/apply" >Apply Now</Link>
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
  }
  
};

export default Appli;
