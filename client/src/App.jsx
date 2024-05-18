import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate
} from "react-router-dom";
import { ethers } from "ethers";
import abi from "./contractJson/chai.json";
import PInfo from "./components/PInfo";
import "./App.css"



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
        // console.log(accounts);
        // console.log(contract);
        setState({ provider, signer, contract });
      } catch (error) {
        alert(error.message || "Error occurred while initializing.");
      }
    };
    initialize();
  }, []);

  // const hideNavRoutes = ["/addUser", "/updateUser", "/deleteUser"]; // Routes where nav should be hidden

  return (
   <>

         <PInfo  state={state} ></PInfo>
   
   
      
    
   </>
  );
}



export default App;
