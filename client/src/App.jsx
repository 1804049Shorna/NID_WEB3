import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
  useNavigate

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
import UP from "./components/backend/updatePersonal";
import UG  from "./components/backend/updateGaurdian";
import UE from "./components/backend/upEdu";
import UA from "./components/backend/updateAdd";
import UI from "./components/updateInfo";
import GS from "./components/backend/giveStatus";
import ANID from "./components/ECwork/assignNID";
import EC from "./components/EC";
import PNID from "./components/otherBody/putNID";
import GB from "./components/GovBody";
import "./App.css";


function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [account, setAccount] = useState("");
  const navigate = useNavigate();

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
        console.log(accounts);
        setAccount(accounts[0]);
        console.log(account);

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

   
  
  }, [account]);

   
  const redirectBasedOnAccount = (account) => {

      if (account === "0x1613d968665C978C3a5b7A08653185377DFbEDb8".toLowerCase()) {
        console.log("In redirection")
        return <Navigate to="/applicant" replace />;
       
        // return <Ap />;
   

      } else if (account === "0xf88C00985Cb760181aAAc729aedFeb17d385cE7E".toLowerCase()) {

        console.log("In Local")
  
        return <Navigate to="/LocalGov" replace />;
      }
      else if (account === "0x8cDB6fb980524018A491681826190fa7153Bc9aD".toLowerCase()){
        console.log("In EC")
        return <Navigate to="/EC" replace />;
      }
     
     
    };

  

  return (
    <>
           {redirectBasedOnAccount(account)} 
        
      <Routes>
        <Route path="/" element={<WEL></WEL>}></Route>
        <Route path="/applicant" element={<Ap  state={state} account="0x1613d968665C978C3a5b7A08653185377DFbEDb8"></Ap>}></Route>
        <Route path="/LocalGov" element={<LOG   state={state} account="0xf88C00985Cb760181aAAc729aedFeb17d385cE7E"></LOG>}></Route>
        <Route path="/EC" element={<EC  state={state} account="0x8cDB6fb980524018A491681826190fa7153Bc9aD"></EC>}></Route>
        <Route path="/GB" element={<GB></GB>}></Route>



        <Route path="/apply" element={<PInfo state={state} />}></Route>

        <Route path="/admin" element={<GInfo state={state} />}></Route>
        <Route path="/RequestEdit" element={<Edit state={state}></Edit>}></Route>
        <Route path="/Status" element={<NI state={state}></NI>}></Route>
        <Route path="/getnid" element={<NID state={state}></NID>}></Route>
        <Route path="/getEditInfo" element={<GEDIT state={state}></GEDIT>}></Route>
        <Route path="/updatePersonalInfo" element={<UP state={state}></UP>}></Route>
        <Route path="/updateGaurInfo" element={<UG state={state}></UG>}></Route>
        <Route path="/updateEduInfo" element={<UE state={state}></UE>}></Route>
        <Route path="/updateAddInfo" element={<UA state={state}></UA>}></Route>
        <Route path="/updateInfo" element={<UI></UI>}></Route>
        <Route path="/giveStatus" element={<GS state={state}></GS>}></Route>
        <Route path="/assignNID" element={<ANID state={state}></ANID>}></Route>
        <Route path="/putNID" element={<PNID state={state}></PNID>}></Route>
      </Routes>

   
    </>
  );
}

export default App;
