import React from "react";
import { useState } from "react";
import data from "../data/data";

export const AllData = () => {
  var causes = ["Hii", "Bye"];
  const [vehileData, setVehicleData] = useState(data.slice(0,10));

  console.log(vehileData[0]);

  return (
    <>
      {/* <Navbar /> */}
      <div className="mt-8 flex min-h-[70vh] flex-col items-center justify-center font-sans font-semibold text-slate-100 pb-24">
        <div className="mb-4">
          <h1>All Causes</h1>
        </div>
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
                      <td className="px-6 py-4 "> {show.Eccentricity}</td>
                      <td className="px-6 py-4">Gou</td>
                      {/* <td className="px-6 py-4">Bou</td> */}

                      {/* <td className="px-6 py-4">No</td> */}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
