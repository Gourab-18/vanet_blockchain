const getVehicleData = async (contract, id) => {


  if (!contract) {
    return [];
  }

  const { vehicle_id, vehicle_type, trust, sector } = await contract.methods
    .vehicleData(id)
    .call();

  return { vehicle_id, vehicle_type, trust, sector };
};

export { getVehicleData };
