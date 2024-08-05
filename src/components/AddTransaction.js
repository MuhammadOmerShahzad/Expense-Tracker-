
import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState'; 

export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext); 
    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000), 
            description,
            transactionAmount: +transactionAmount 
        };

        addTransaction(newTransaction); 

        
        setDescription('');
        setTransactionAmount('');
    };

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='description'>Description</label>
                    <input
                        type='text'
                        id='description'
                        placeholder='Detail of Transaction'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='transactionAmount'>Transaction Amount:</label>
                    <input
                        type='number'
                        id='transactionAmount'
                        placeholder='Enter Transaction Amount'
                        value={transactionAmount}
                        onChange={(e) => setTransactionAmount(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn'>
                    Add Transaction
                </button>
            </form>
        </div>
    );
};

export default AddTransaction;
