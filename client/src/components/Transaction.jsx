import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { shortenAddress } from '../utils/shortenAddress';
import useFetch from '../hooks/useFetch';

const TransactionCard = ({addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
    const gifUrl = useFetch({ keyword });
    
    return (
        <div className='bg-[#181918] m-4 flex flex-1 
            2xl:min-w-[450px]
            2xl:max-w-[500px]
            sm:min-w-[270px]
            sm:max-w-[300px]
            flex-col p-3 rounded-md hover:shadow-2xl
        '>
            <div className='flex flex-col items-center w-full mt-3 font-manrope transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 translate-x-4 hover:skew-y-0 skew-y-2 hover:bg-indigo-500 duration-300 rounded-md font-sans'>
                <div className='w-full mb-6 p-2'>
                    <a href={`https://ropsten.etherscan.io/address/${addressFrom}`}>
                        <p className='text-white text-sm'>From: {shortenAddress(addressFrom)}</p>
                    </a>
                    <a href={`https://ropsten.etherscan.io/address/${addressTo}`}>
                        <p className='text-white text-sm'>To: {shortenAddress(addressTo)}</p>
                    </a>
                    <p className='text-white text-sm'>Amount: {amount} ETH</p>
                    {message && (
                        <>
                            <br />
                            <p className='text-white text-base'>Message: {message}</p>
                        </>
                    )}
                </div>
                        <img src={gifUrl || url} alt="gif" className='mt-3 w-full h-64 2x:h-96 rounded-md shadow-lg object-cover' />

                        <div className='font-poppins hover:bg-white hover:text-black ease-in-out duration-300 bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl'>
                            <p className='text-white font-bold hover:text-black ease-in-out duration-300'>{timestamp}</p>
                        </div>
            </div>
        </div>
    )
}

const Transaction = () => {
    const { currentAccount, transactions } = useContext(TransactionContext);
    return (
        <div className='flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions py-10'>
            <div className='flex flex-col md:p-12 py-12 px-4'>
                {currentAccount ? (
                    <h3 className='text-white text-3xl text-center my-2 font-poppins'>Latest Transactions</h3>
                ) : (
                    <h3 className='text-white text-3xl text-center my-2 font-poppins'>Connect your wallet to see the latest transactions</h3>
                )}

                <div className='flex flex-wrap justify-center items-center mt-10'>
                    {transactions.reverse().map((transaction, i) => (
                        <TransactionCard key={i} {...transaction}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Transaction;