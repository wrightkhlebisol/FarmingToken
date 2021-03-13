const FarmToken = artifacts.require("FarmToken");

module.exports = async function (deployer, network, accounts) {
    // Deploy FarmToken
    await deployer.deploy(FarmToken);
    const farmToken = await FarmToken.deployed();
}