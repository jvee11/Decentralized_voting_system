require('dotenv').config();
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
app.use(
    fileUpload({
        extended:true
    })
)
app.use(express.static(__dirname));
app.use(express.json());
const path = require("path");
const ethers = require('ethers');

var port = 3000;

const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const {abi} = require('./artifacts/contracts/Voting.sol/Voting.json');
const provider = new ethers.providers.JsonRpcProvider(API_URL);

const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "mainindex.html"));
})

app.get("/mainindex.html", (req, res) => {
    res.sendFile(path.join(__dirname, "mainindex.html"));
})

app.post("/vote", async (req, res) => {
    try {
      const vote = req.body.vote;
      if (!vote) {
        return res.status(400).send("Missing vote value in request body.");
      }
  
      const isVotingActive = await contractInstance.getVotingStatus();
  
      if (isVotingActive) {
        console.log("Adding the candidate in voting contract...");
        const tx = await contractInstance.addCandidate(vote);
        await tx.wait();
        res.send("The candidate has been registered in the smart contract.");
      } else {
        res.status(403).send("Voting is finished.");
      }
    } catch (error) {
      console.error("Error during vote:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  

app.listen(port, function () {
    console.log("App is listening on port 3000")
});