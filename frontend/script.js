const contractAddress = "0xcd3e564072f664cabed275cc4ebcb096d96e0c80";
const abi = [
  "function addEcho(string ipfsHash, string description) external",
  "function getAllEchoes() view returns (tuple(address user, string ipfsHash, string description, uint256 timestamp)[])"
];

let provider, signer, contract;

async function init() {
  if (!window.ethereum) return alert("Install MetaMask");
  provider = new ethers.BrowserProvider(window.ethereum);
  signer = await provider.getSigner();
  contract = new ethers.Contract(contractAddress, abi, signer);
}

async function uploadToIPFS(file) {
  return "Qm" + Math.random().toString(36).substring(2, 10);
}

document.getElementById("uploadBtn").onclick = async () => {
  const file = document.getElementById("audioFile").files[0];
  const desc = document.getElementById("desc").value.trim();
  if (!file || !desc) return alert("Please add audio and description");

  const ipfsHash = await uploadToIPFS(file);
  const tx = await contract.addEcho(ipfsHash, desc);
  await tx.wait();
  alert("Echo uploaded!");
  loadEchoes();
};

async function loadEchoes() {
  const list = document.getElementById("echoList");
  const echoes = await contract.getAllEchoes();
  list.innerHTML = "";
  echoes.forEach(e => {
    const div = document.createElement("div");
    div.className = "echo-card";
    div.innerHTML = `
      <p><strong>${e.description}</strong></p>
      <audio controls src="https://ipfs.io/ipfs/${e.ipfsHash}"></audio>
      <small>${new Date(Number(e.timestamp) * 1000).toLocaleString()}</small>
    `;
    list.appendChild(div);
  });
}

window.onload = async () => {
  await init();
  await loadEchoes();
};
