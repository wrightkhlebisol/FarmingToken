const CalebToken = artifacts.require('CalebToken');
const FarmToken = artifacts.require('FarmToken');

module.exports = async function (callback) {
    try {
        let calebToken = await CalebToken.deployed();
        let farmToken = await FarmToken.deployed();
        let accounts = await new web3.eth.getAccounts();

        // Returns the remaining number of tokens that spender will be 
        // allowed to spend on behalf of owner through transferFrom

        const allowanceBefore = await calebToken.allowance(accounts[0], farmToken.address);

        console.log("amount of CalebToken FarmToken is allowed to transfer on our behalf before " + allowanceBefore.toString())

        // Allow farmToken Contract send token on our behalf
        await calebToken.approve(farmToken.address, web3.utils.toWei("100", "ether"));

        // Validate farmToken can now transfer x amount 
        const allowanceAfter = await calebToken.allowance(accounts[0], farmToken.address);

        console.log("amount of CalebToken FarmToken is allowed to transfer on our behalf after " + allowanceAfter.toString());

        // Verfiy accounts[0] and farmtoken balance before and after transfer
        let calebTokenAvaliableInAccounts0Before = await calebToken.balanceOf(accounts[0]);
        let calebTokenAvaliableInFarmTokenBefore = await calebToken.balanceOf(farmToken.address);

        console.log("*** Caleb Token ***")
        console.log(
            "CalebToken available in accounts[0] before " +
            web3.utils.fromWei(calebTokenAvaliableInAccounts0Before.toString())
        )

        console.log(
            "CalebToken available in farmToken before " +
            web3.utils.fromWei(calebTokenAvaliableInFarmTokenBefore.toString())
        )

        console.log("*** Farm Token ***")

        let farmTokenAvailableInAccounts0Before = await farmToken.balanceOf(accounts[0]);
        let farmTokenAvailableInFarmTokenBefore = await farmToken.balanceOf(farmToken.address);

        console.log("Farm Token Available in Accounts[0] before " + web3.utils.fromWei(farmTokenAvailableInAccounts0Before.toString()));

        console.log("Farm Token Available in farm before " + web3.utils.fromWei(farmTokenAvailableInFarmTokenBefore.toString()));

        // Call deposit function from farmtoken
        console.log("Call Deposit Function");
        await farmToken.deposit(web3.utils.toWei("100", "ether"))

        console.log("*** Caleb Token ***")

        let calebTokenAvailableInAccounts0After = await calebToken.balanceOf(accounts[0]);
        let calebTokenAvailableInFarmTokenAfter = await calebToken.balanceOf(farmToken.address);

        console.log("CalebToken balance in accounts[0] after " + web3.utils.fromWei(calebTokenAvailableInAccounts0After));
        console.log("CalebToken balance in farmToken after " + web3.utils.fromWei(calebTokenAvailableInFarmTokenAfter));

        console.log("*** Farm Token ***")
        let farmTokenAvailableInAccounts0After = await farmToken.balanceOf(accounts[0]);
        let farmTokenAvailableInFarmTokenAfter = await farmToken.balanceOf(farmToken.address);

        console.log("FarmToken available in accounts[0] after " + web3.utils.fromWei(farmTokenAvailableInAccounts0After.toString()))
        console.log("FarmToken available in farmToken after " + web3.utils.fromWei(farmTokenAvailableInFarmTokenAfter.toString()))

        callback();
    } catch (error) {
        console.log(error)
    }

}
