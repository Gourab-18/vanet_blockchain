const SimpleStorage = artifacts.require("Vehicles");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
};
