const CalebToken = artifacts.require("CalebToken");
const FarmToken = artifacts.require("FarmToken");

module.exports = async function (callback) {
    calebToken = await CalebToken.deployed();
    farmToken = await FarmToken.deployed();

    balance = await calebToken.balanceOf(farmToken.address);
    console.log(web3.utils.fromWei(balance.toString()));
    callback();
}