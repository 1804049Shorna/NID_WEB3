import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,

} from "react-router-dom";
import { ethers } from "ethers";
import abi from "./contractJson/chai.json";
import PInfo from "./components/frontend/PInfo";
import GInfo from "./components/backend/GInfo";
import Edit from "./components/frontend/requEdit";
import Ap from "./components/Appli";
import NI from "./components/frontend/NIDsta";
import LOG from "./components/LocalGov";
import NID from "./components/frontend/getNID";
import GEDIT from "./components/backend/getEdit"
import WEL from "./components/welcome"
import "./App.css";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [account, setAccount] = useState("");

  useEffect(() => {
    const initialize = async () => {
      const contractAddress = "0xdaAE5bF9F3f8146584876ad0608E52Dd50bB82CB";
      const contractABI = abi.abi;

      try {
        if (!window.ethereum) {
          alert("Please install MetaMask!");
        }
        const { ethereum } = window;
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        setAccount(accounts[0]);

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
    
        // console.log(contract);
        setState({ provider, signer, contract });
          
 

      
      } catch (error) {
        alert(error.message || "Error occurred while initializing.");
      }
    };
    initialize();

    const redirectBasedOnAccount = (account) => {

      if (account === "0x1613d968665C978C3a5b7A08653185377DFbEDb8") {
        console.log("In redirection")
        return <Navigate to="/applicant" replace />;
      } else if (account === "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65") {
        return <Navigate to="/LocalGov" replace />;
      }
      // Handle other accounts or default route if not matched
     
    };

    redirectBasedOnAccount(account)
  }, [account]);

   
 
  

  return (
    <>
        
      <Routes>
        <Route path="/" element={<WEL></WEL>}></Route>
        <Route path="/applicant" element={<Ap></Ap>}></Route>
        <Route path="/LocalGov" element={<LOG></LOG>}></Route>


        <Route path="/apply" element={<PInfo state={state} />}></Route>

        <Route path="/admin" element={<GInfo state={state} />}></Route>
        <Route path="/RequestEdit" element={<Edit></Edit>}></Route>
        <Route path="/Status" element={<NI></NI>}></Route>
        <Route path="/getnid" element={<NID></NID>}></Route>
        <Route path="/getEditInfo" element={<GEDIT></GEDIT>}></Route>
      </Routes>

   
    </>
  );
}

export default App;
