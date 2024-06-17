import React, { useContext } from 'react';
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle} from 'react-icons/bs';

import { TransactionContext } from "../context/TransactionContext";
import { Loader } from './';
import { shortenAddress } from '../utils/shortenAddress';

const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white';

const Input = ({ placeholder, name, value, type, handleChange }) => (
    <input 
        placeholder={placeholder}
        type={type}
        step='0.0001'
        value={value}
        onChange={(e) => handleChange(e, name)}
        className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
    />
);


const Welcome = () => {
    const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);

    //console.log(connectWallet);


    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;

        e.preventDefault();

        if(!addressTo || !amount || !keyword || !message ) return;

        sendTransaction();
    }
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-center w-4/5 justify-between md:p-20">
                <div className="flex flex-1 items-start flex-col mf:mr-40">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">Send Crypto <br /> across the world</h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base font-manrope">Explore the crypto world. Buy and sell cryptocurrencies easily on krypt </p>
                    {!currentAccount && (
                        <button
                            type="button"
                            onClick={connectWallet}
                            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                        >
                            <p className="text-white text-base font-semibold text-sm font-poppins">
                                Connect Wallet
                            </p>
                        </button>
                    )}
                    
                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10 font-manrope text-[24px]">
                        <div className={`rounded-tl-2xl ${commonStyles} hover:opacity-80 transition duration-200 ease-in-out hover:font-press text-[15px] hover:-translate-x-1`}>
                            Reliability
                        </div>
                        <div className={`${commonStyles} hover:opacity-80 transition duration-200 ease-in-out hover:font-press text-[15px] hover:-translate-y-1`}>
                            Security
                        </div>
                        <div className={`rounded-tr-2xl ${commonStyles} hover:opacity-80 transition duration-200 ease-in-out hover:font-press text-[15px] hover:translate-x-1`}>
                            Ethereum
                        </div>
                        <div className={`rounded-bl-2xl ${commonStyles} hover:opacity-80 transition duration-200 ease-in-out hover:font-press text-[15px] hover:-translate-x-1`}>
                            Web 3.0
                        </div>
                        <div className={`${commonStyles} hover:opacity-80 transition duration-200 ease-in-out hover:font-press text-[15px] hover:translate-y-1`}>
                            Low Fees
                        </div>
                        <div className={`rounded-br-2xl ${commonStyles} hover:opacity-80 transition duration-200 ease-in-out hover:font-press text-[15px] hover:translate-x-1`}>
                            Blockchain
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism drop-shadow-2xl" >
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 boder-white flex justify-center items-center">
                                    <SiEthereum fontSize={20} color='#fff'/>
                                </div>
                                <BsInfoCircle fontSize={17} color='#fff'/>
                            </div>
                            <div>
                                <p className="text-white font-light text-xs">
                                    {shortenAddress(currentAccount)}
                                </p>                                
                                <p className="text-white font-swmibold text-lg mt-1">
                                    Ethereum
                                </p>                                
                            </div>
                        </div>
                    </div>
                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <Input placeholder='Address To' name='addressTo' type='text' handleChange={handleChange}/>
                        <Input placeholder='Amount (ETH)' name='amount' type='number' handleChange={handleChange}/>
                        <Input placeholder='Keyword (GiF or MEME)' name='keyword' type='text' handleChange={handleChange}/>
                        <Input placeholder='Enter Message' name='message' type='text' handleChange={handleChange}/>
                    
                        <div className="h-[1px] w-full bg-gray-400 my-2"/>


                        {isLoading ? (
                            <Loader/>
                        ) : (
                            <button type="button" onClick={handleSubmit} className='font-poppins text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
                                Send Now
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Welcome;