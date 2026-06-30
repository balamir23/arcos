// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Treasury is Ownable {

    constructor(address owner)
        Ownable(owner)
    {}

    function withdraw(
        address token,
        address to,
        uint256 amount
    )
        external
        onlyOwner
    {
        IERC20(token).transfer(to, amount);
    }

    function balanceOf(
        address token
    )
        external
        view
        returns(uint256)
    {
        return IERC20(token).balanceOf(address(this));
    }

}