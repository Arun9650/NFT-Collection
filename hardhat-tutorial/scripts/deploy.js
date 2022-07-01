const {ethers} = require("hardhat");
require("dotenv").config({path: ".env"});

const {WHITELIST_CONTRACT_ADDRESS, METADATA_URL} = require("../constants/index");


async function main() {

    const whitelistContract = WHITELIST_CONTRACT_ADDRESS;

    const meradataURl  = METADATA_URL;


    const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs")

    const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
        meradataURl,
        whitelistContract
    )

    console.log(
        "Crypto Devs Contract Address:",
        deployedCryptoDevsContract.address
    );
}


main().then(() => process.exit(0)).catch((err) => {console.error(err);
process.exit(1)});