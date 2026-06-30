// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/access/Ownable.sol";

contract PriceManager is Ownable {

    mapping(bytes32 => uint256) private prices;

    event PriceUpdated(
        bytes32 indexed key,
        uint256 price
    );

    constructor(address owner)
        Ownable(owner)
    {
        prices[keccak256("ARC_NAME_1Y")] = 2_000000;
        prices[keccak256("ARC_NAME_2Y")] = 3_500000;
        prices[keccak256("ARC_NAME_3Y")] = 4_800000;
        prices[keccak256("ARC_NAME_4Y")] = 5_800000;
        prices[keccak256("ARC_NAME_5Y")] = 6_500000;

        prices[keccak256("TOKEN_DEPLOY")] = 1_000000;
        prices[keccak256("NFT_DEPLOY")] = 1_500000;
        prices[keccak256("CONTRACT_DEPLOY")] = 2_000000;
    }

    function getPrice(
        bytes32 key
    )
        external
        view
        returns (uint256)
    {
        return prices[key];
    }

    function setPrice(
        bytes32 key,
        uint256 price
    )
        external
        onlyOwner
    {
        prices[key] = price;

        emit PriceUpdated(key, price);
    }

}