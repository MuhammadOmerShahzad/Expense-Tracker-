
import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState'; 




export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li className='plus'>
            {transaction.description}
            <span>{transaction.transactionAmount}</span>
            <button 
                className='delete-btn' 
                onClick={() => deleteTransaction(transaction.id)}
            >
                X
            </button>
        </li>
    );
};
