// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Vehicles {
    struct Vehicle {
        string vehicle_id;
        string vehicle_type;
        //    once voting has started, the list of participants who have voted
        uint256 trust;
        
        string report;
    }
    mapping(string => Vehicle) public vehicleData;

    string[] public v_id;

    function getVehicleData(
        string memory vehicle_id,
        string memory vehicle_type,
        uint256 trust,
        string memory report
    ) public {
        Vehicle memory obj;
        obj.vehicle_id = vehicle_id;
        obj.vehicle_type = vehicle_type;
        obj.trust = trust;
        obj.report = report;

        vehicleData[vehicle_id] = obj;
        v_id.push(vehicle_id);
    }

    function showVehicleData() public view returns (string[] memory) {
        return v_id;
    }
}
