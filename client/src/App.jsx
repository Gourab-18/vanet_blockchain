import Navbar from "./components/Navbar";
import { AllData } from "./pages/AllData";
import Web3Context from "./contexts";
import React, { useEffect, useContext } from "react";

function App() {
  window.ethereum &&
    window.ethereum.on("accountsChanged", function (accounts) {
      setTimeout(window.location.reload(false), 1000);
    });

  const { checkIfWalletIsConnected } = useContext(Web3Context);
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  return (
    <>
      <div className="min-w-screen min-h-[100vh] bg-[#000000]">
        <div className="">
          <Navbar />
        </div>
        <div className=" ">
          <AllData />
        </div>
      </div>
    </>
  );
}

export default App;
