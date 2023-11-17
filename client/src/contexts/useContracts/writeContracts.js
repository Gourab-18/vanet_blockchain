const initializeVehicleInfo = async (
  contract,
  account,
  vehicle_id,
  vehicle_type,
  trust,
  sector
) => {


  await contract.methods
    .getVehicleData(vehicle_id, vehicle_type, Math.floor(trust), sector)
    .send({ from: account.currentAccount });
};

export { initializeVehicleInfo };
