const CalebToken = artifacts.require("CalebToken");
const FarmToken = artifacts.require("FarmToken");

module.exports = async function (deployer, network, accounts) {
    // Deploy CalebToken
    await deployer.deploy(CalebToken);
    const calebToken = await CalebToken.deployed();

    // Deploy FarmToken
    await deployer.deploy(FarmToken, calebToken.address);
    const farmToken = await FarmToken.deployed();
}