
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/Constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;
console.log("window ethereum obj", ethereum);

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
    return transactionsContract;
}

export const TransactionProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [currentAccount, setCurrentAccount] = useState("");
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
    const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
    console.log("formData", formData);

    const handleChange = (e, name) => {
        setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
    }

    const sendTransaction =async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");
           
            const { addressTo, amount, keyword, message } = formData;
            const transactionsContract = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);
            //this fun is for sending ethereum from one accoun to another account
            await ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                  from: currentAccount,
                  to: addressTo,
                  gas: "0x5208",
                  value: parsedAmount._hex,
                }],
              });


             //below line will create the transaction in the blockchain
              const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword);


              setIsLoading(true);
              console.log(`Loading - ${transactionHash.hash}`);
              await transactionHash.wait();
              console.log(`Success - ${transactionHash.hash}`);
              setIsLoading(false);

              const transactionsCount = await transactionsContract.getTransactionCount();

              setTransactionCount(transactionsCount.toNumber());

        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
        }
    }


    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");
            const accounts = await ethereum.request({ method: "eth_requestAccounts", });
            setCurrentAccount(accounts[0]);
            //   window.location.reload();
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
        }
    };


    const checkIfWalletIsConnect = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");

            const accounts = await ethereum.request({ method: "eth_accounts" });

            if (accounts.length) {
                setCurrentAccount(accounts[0]);

                // getAllTransactions();
            } else {
                console.log("No accounts found");
            }
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        checkIfWalletIsConnect();
        // checkIfTransactionsExists();
    }, []);


    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount, handleChange, formData, sendTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}