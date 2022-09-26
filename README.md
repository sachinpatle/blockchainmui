#  Regarding this app 
#  My understanding is written here

1.we will need the environment where we can test  ethereum transactions for that HARDHAT is 
used. also HARDHAT is used for running hardhat locally

2.for contract to be deployed on development network we need to have the some ethereum into the own wallets
because everything we need to do on etherium network need gas fees (some etherium).

3.when the transaction are deployed on the blockchain network ,then we will get the address of the  smart contract that is deployed on the blockchain network. 

4.Ropsten testnet faucet , here faucet provides the test etherium free of charge simply we have to provide  the own etherium wallet  address and test ethrium will be sended to the etherium wallet and then we can deploy our smart contract to etherium blockchain network.

5.how to make own etherium wallet?
Ans: metaMask is used to create the etherium wallets

6.alchemy : here we will deploy your blockchain smart contracts ,so its like the deployment server for  the blockchain smart contracts.

7.what is differnce between plugin and packages 
Ans : plugin they are tools for doing some functionality
      packages : package we need to develop some thing new or develop new things

8. hardhat-waffle --> it is plugin (so it is tool we should know how to use it and that its) to build smart contract tests

9. abi --> it is appication binary interface --> so what is use of ABI ?
    Why we need abi?
    Ans : how to connect to the ethereum network can we directly connect to the ethereum network 
          and the answer is no , so abi help us to connect with the ethereum ecosystem inside the ethereum network(contract to contract) or outside the ethereum network.so abi keeps all information about your contracts
          so when we deploy the smart contract then along with the address where the smart contract is deployed on the blockchain network  abi is also created.

        



10.npm package installed in for smart contracts  :  npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers


11. npx hardhat run scripts/deploy.js --network goerli --> By running this command the smart contract is deployed on the blockchain network and as soon as it gets deployed we will got one deployed address of tha contract 

like this  : 0xf4483B9Ed7491B4C6588F3109296e59C765abE56

# applying the fayman techniue for any loop hole in the understanding
 need to chec#
