import Navbar from "./components/Navbar";
import { AllData } from "./pages/AllData";

function App() {
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
