import { ethers } from "https://cdn.jsdelivr.net/npm/ethers@6.10.0/dist/ethers.min.js";

let provider;
let signer;
let address;
let balance;

const connectButton = document.getElementById("connectButton");
const connectLabel = document.getElementById("connectLabel");
const checkBalanceButton = document.getElementById("checkBalanceButton");

async function connectWallet() {
    if (window.ethereum !== undefined) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        address = await signer.getAddress();
        connectButton.innerHTML = "Connected";
        connectButton.disabled = true;
        connectLabel.innerHTML = `${address}`;
    } else {
        alert("MetaMask not found");
    }

}
async function checkBalance() {
    balance = await provider.getBalance(address);
    const balanceLabel = document.getElementById("balanceLabel");
    balanceLabel.innerHTML = `Balance: ${ethers.formatEther(balance)} ETH`;   
}

connectButton.onclick = connectWallet;
checkBalanceButton.onclick = checkBalance;