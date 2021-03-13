// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CalebToken is ERC20 {
	constructor() public ERC20("CalebToken", "CTKN") {
		_mint(msg.sender, 1000000000000000000000000);
	}
}
