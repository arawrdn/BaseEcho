![Built on Base](https://img.shields.io/badge/Built%20on%20Base-blue?logo=coinbase)
![Base Ecosystem Project](https://img.shields.io/badge/Base%20Ecosystem%20Project-0052ff?logo=coinbase)
![Base Verified Contract](https://img.shields.io/badge/Base%20Verified%20Contract-0f67ff?logo=coinbase)


# BaseEcho

**BaseEcho** is a decentralized voice note dApp built on the **Base Network** — allowing anyone to record short audio messages, store their IPFS hash on-chain, and make their voice eternal on Base.

This project is a **continuation of [BaseLoops]**, extending its **NFT utility** to grant access and identity for voice creators.

---

## Features
- Upload and register voice notes (≤30s)
- Store audio hash & metadata on Base
- Play public echoes directly from IPFS
- BaseLoops NFT acts as access token
- Transparent, on-chain, and immutable

---

## Tech Stack
- Solidity `^0.8.24`
- Base Network (Mainnet)
- Web3.Storage (IPFS)
- Vanilla JS + Ethers.js
- NFT Utility from BaseLoops

---

## Smart Contract Overview
The `BaseEcho.sol` contract stores:
- `ipfsHash`
- `description`
- `timestamp`
- `owner`

Each echo is linked to the sender’s wallet and can only be added by wallets holding the **BaseLoops NFT**.

---

## 🌍 Deployment
1. Deploy `BaseEcho.sol` on Base Network.  
2. Configure IPFS upload via your chosen gateway.  
3. Launch `frontend/index.html` on GitHub Pages.
