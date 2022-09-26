
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
    console.log({
        provider,
        signer,
        transactionsContract
    })
}

export const TransactionProvider = ({ children }) => {
    return (
        <TransactionContext.Provider value={{ VALUE:"test"}}>
            {children}
        </TransactionContext.Provider>
    )
}