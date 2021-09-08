import Web3 from "web3";

// window.ethereum.enable();

let web3: Web3;

if (
  typeof window !== "undefined" &&
  typeof (window as any).web3 !== "undefined"
) {
  // We are in the browser and metamask is running
  (window as any).ethereum.enable();
  web3 = new Web3((window as any).web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider("PROVIDER_URL");
  web3 = new Web3(provider);
}

export default web3;
