// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

interface IPriceManager {
    function getPrice(bytes32 key) external view returns (uint256);
}

contract ArcNameService is ERC721, Ownable, ReentrancyGuard {

    IERC20 public immutable usdc;
    IPriceManager public immutable priceManager;
    address public treasury;

    uint256 private nextTokenId = 1;

    struct NameRecord {
        string name;
        uint256 expiresAt;
    }

    mapping(string => uint256) public nameToTokenId;
    mapping(uint256 => NameRecord) public records;
    mapping(address => string) public reverseRecords;

    event NameRegistered(
        address indexed owner,
        string name,
        uint256 tokenId,
        uint256 expiresAt
    );

    constructor(
        address usdcAddress,
        address treasuryAddress,
        address priceManagerAddress
    )
        ERC721("Arc Name Service", "ARCNS")
        Ownable(msg.sender)
    {
        usdc = IERC20(usdcAddress);
        treasury = treasuryAddress;
        priceManager = IPriceManager(priceManagerAddress);
    }

    function isAvailable(
        string memory name
    )
        public
        view
        returns(bool)
    {
        uint256 tokenId = nameToTokenId[name];

        if(tokenId == 0){
            return true;
        }

        return records[tokenId].expiresAt < block.timestamp;
    }

    function _priceKey(
        uint256 years_
    )
        internal
        pure
        returns(bytes32)
    {
        if(years_ == 1) return keccak256("ARC_NAME_1Y");
        if(years_ == 2) return keccak256("ARC_NAME_2Y");
        if(years_ == 3) return keccak256("ARC_NAME_3Y");
        if(years_ == 4) return keccak256("ARC_NAME_4Y");

        return keccak256("ARC_NAME_5Y");
    }

    function register(
        string calldata name,
        uint256 years_
    )
        external
        nonReentrant
    {
        require(bytes(name).length > 2,"Invalid");

        require(years_ >= 1 && years_ <= 5,"Years");

        require(isAvailable(name),"Taken");

        uint256 price =
            priceManager.getPrice(
                _priceKey(years_)
            );

        require(
            usdc.transferFrom(
                msg.sender,
                treasury,
                price
            ),
            "Payment failed"
        );

        uint256 tokenId = nextTokenId++;

        _safeMint(
            msg.sender,
            tokenId
        );

        uint256 expires =
            block.timestamp +
            (years_ * 365 days);

        records[tokenId] = NameRecord(
            name,
            expires
        );

        nameToTokenId[name] = tokenId;

        reverseRecords[msg.sender] = name;

        emit NameRegistered(
            msg.sender,
            name,
            tokenId,
            expires
        );
    }
    
function renew(
    string calldata name,
    uint256 years_
)
    external
    nonReentrant
{
    require(years_ >= 1 && years_ <= 5, "Years");

    uint256 tokenId = nameToTokenId[name];

    require(tokenId != 0, "Name not found");

    require(ownerOf(tokenId) == msg.sender, "Not owner");

    uint256 price =
        priceManager.getPrice(
            _priceKey(years_)
        );

    require(
        usdc.transferFrom(
            msg.sender,
            treasury,
            price
        ),
        "Payment failed"
    );

    if (records[tokenId].expiresAt < block.timestamp) {
        records[tokenId].expiresAt = block.timestamp;
    }

    records[tokenId].expiresAt += years_ * 365 days;
}

function resolve(
    string calldata name
)
    external
    view
    returns(address)
{
    uint256 tokenId = nameToTokenId[name];

    require(tokenId != 0, "Name not found");

    return ownerOf(tokenId);
}

function reverseResolve(
    address owner
)
    external
    view
    returns(string memory)
{
    return reverseRecords[owner];
}

function getExpiration(
    string calldata name
)
    external
    view
    returns(uint256)
{
    uint256 tokenId = nameToTokenId[name];

    require(tokenId != 0, "Name not found");

    return records[tokenId].expiresAt;
}

function getNameRecord(
    string calldata name
)
    external
    view
    returns(
        address owner,
        uint256 expiresAt
    )
{
    uint256 tokenId = nameToTokenId[name];

    require(tokenId != 0, "Name not found");

    owner = ownerOf(tokenId);

    expiresAt = records[tokenId].expiresAt;
}
}