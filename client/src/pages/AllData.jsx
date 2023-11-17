import React from "react";
import { useState, useContext } from "react";
import data from "../data/data";
import Web3Context from "../contexts";
import { initializeVehicleInfo } from "../contexts/useContracts/writeContracts";

import { getVehicleData } from "../contexts/useContracts/readContracts";

export const AllData = () => {
  var causes = ["Hii", "Bye"];
  const [vehileData, setVehicleData] = useState(data.slice(0, 10));

  const [flag, setFlag] = useState(11);

  const { connectWallet, account, contract, checkIfWalletIsConnected } =
    useContext(Web3Context);

  console.log(contract);

  const arr = [
    "Good Road",
    "Good Traffic",
    "Bad Road",
    "Moderate Road",
    "Bad Traffic",
    "Moderate Traffic",
  ];

  const addVehicleData = async (e) => {
    e.preventDefault();
    console.log("Hii");
    // localStorage.removeItem("flag");
    // localStorage.setItem("flag", flag);

    const { Vehicle_ID, Vehicle_Type, Trust_Score, Community_Neighborhood } =
      data[localStorage.getItem("flag")];
    // this is write
    await initializeVehicleInfo(
      contract,
      account,
      Vehicle_ID,
      Vehicle_Type,
      Trust_Score,
      Community_Neighborhood
    );

    alert("Vehicle Data fetched");

    console.log("Next line"); // not working

    // thois is read contract
    const { vehicle_id, vehicle_type, trust, sector } = await getVehicleData(
      contract,
      Vehicle_ID
    );
    const obj = {
      Vehicle_ID: vehicle_id,
      Vehicle_Type: Vehicle_Type,
      Trust_Score: trust,
      Community_Neighborhood: sector,
    };

    console.log(obj);
    localStorage.setItem("flag", Number(localStorage.getItem("flag")) + 1);
    console.log(localStorage.getItem("flag"));

    setVehicleData([...vehileData, obj]);
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="mt-8 flex min-h-[70vh] flex-col items-center justify-center pb-24 font-sans font-semibold text-slate-100">
        {account.currentAccount && (
          <>
            <div className="mb-4">
              <h1>Dashboard</h1>
            </div>
            <button
              className="mb-4  bg-[rgb(210,65,134)] px-6  py-3 text-center  text-sm font-medium uppercase text-white hover:opacity-80"
              onClick={addVehicleData}
            >
              <h1>Fetch Data</h1>
            </button>
            <div className="relative mt-8 w-[80vw]   bg-[rgb(55,56,56)] shadow-md sm:rounded-lg">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="text-xs uppercase dark:text-gray-400">
                  <tr className="text-slate-10 font-sans font-semibold">
                    <th scope="col" className="px-6 py-3  ">
                      Vehicle Id
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Vehicle Type
                    </th>
                    <th scope="col" className="px-6 py-3  ">
                      Trust Value
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Report
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Sector
                    </th>
                    {/* <th scope="col" className="px-6 py-3">
                  Need Met?
                </th> */}
                  </tr>
                </thead>
                <tbody>
                  {vehileData.length > 0 &&
                    vehileData?.map((show, index) => {
                      return (
                        <tr
                          className="text-slate-10 border-b border-gray-200 font-sans font-semibold dark:border-gray-700"
                          key={index}
                        >
                          <th
                            scope="row"
                            className="whitespace-nowrap px-6 py-4 font-medium text-gray-900  dark:text-white"
                          >
                            {show.Vehicle_ID}
                          </th>
                          <td className="text-slate-10 px-6 py-4 font-sans font-semibold">
                            {show.Vehicle_Type}
                          </td>
                          <td className="px-6 py-4 "> {show.Trust_Score}</td>
                          <td className="px-6 py-4">
                            {arr[Math.floor(Math.random() * 6)]}
                          </td>
                          <td className="text-slate-10 px-6 py-4 font-sans font-semibold">
                            {show.Community_Neighborhood}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
};
