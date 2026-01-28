// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IBaseLoopsNFT {
    function balanceOf(address owner) external view returns (uint256);
}

contract BaseEcho {
    struct Echo {
        address user;
        string ipfsHash;
        string description;
        uint256 timestamp;
    }

    address public owner;
    IBaseLoopsNFT public baseLoopsNFT;
    Echo[] private echoes;

    event NewEcho(address indexed user, string ipfsHash, uint256 timestamp);

    constructor(address _baseLoopsNFT) {
        owner = msg.sender;
        baseLoopsNFT = IBaseLoopsNFT(_baseLoopsNFT);
    }

    function addEcho(string calldata ipfsHash, string calldata description) external {
        require(baseLoopsNFT.balanceOf(msg.sender) > 0, "BaseLoops NFT required");
        Echo memory newEcho = Echo(msg.sender, ipfsHash, description, block.timestamp);
        echoes.push(newEcho);
        emit NewEcho(msg.sender, ipfsHash, block.timestamp);
    }

    function getAllEchoes() external view returns (Echo[] memory) {
        return echoes;
    }

    function totalEchoes() external view returns (uint256) {
        return echoes.length;
    }
}
