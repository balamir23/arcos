// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ArcNameService is ERC721, Ownable {

    uint256 private nextTokenId = 1;

    struct NameRecord {
        string name;
        uint256 expiresAt;
    }

    mapping(string => uint256) public nameToTokenId;

    mapping(uint256 => NameRecord) public records;

    event NameRegistered(
        address indexed owner,
        string name,
        uint256 tokenId,
        uint256 expiresAt
    );

    constructor()
        ERC721("Arc Name Service", "ARCNS")
        Ownable(msg.sender)
    {}

    function isAvailable(
        string memory name
    )
        public
        view
        returns (bool)
    {
        uint256 tokenId = nameToTokenId[name];

        if (tokenId == 0) {
            return true;
        }

        return records[tokenId].expiresAt < block.timestamp;
    }

    function register(
        string memory name,
        uint256 years_
    )
        external
    {
        require(bytes(name).length > 2, "Invalid name");

        require(years_ >= 1 && years_ <= 5, "Invalid period");

        require(isAvailable(name), "Name already registered");

        uint256 tokenId = nextTokenId++;

        uint256 expiresAt =
            block.timestamp + (years_ * 365 days);

        _safeMint(msg.sender, tokenId);

        records[tokenId] = NameRecord({
            name: name,
            expiresAt: expiresAt
        });

        nameToTokenId[name] = tokenId;

        emit NameRegistered(
            msg.sender,
            name,
            tokenId,
            expiresAt
        );
    }

}