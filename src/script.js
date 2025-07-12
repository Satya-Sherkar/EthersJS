// Import everything from ethersJS library
import { ethers, formatEther } from "ethers";
import dotenv from "dotenv";
dotenv.config({quiet:true});

// Coonecting to ethereum
const url = `https://mainnet.infura.io/v3/${process.env.API_KEY}`;
const provider = new ethers.JsonRpcProvider(url);

// check balance 
const ADDRESS = "0x4838b106fce9647bdf1e7877bf73ce8b0bad5f97"; // Random address from etherscan
const balance = await provider.getBalance(ADDRESS); 

// log balance 
console.log(`\nBalance of ${ADDRESS} is ${formatEther(balance)} ETH\n`);



