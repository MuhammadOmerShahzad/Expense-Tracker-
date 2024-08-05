import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState'; 

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);


    const amounts = transactions.map(transaction => transaction.transactionAmount);
    const totalIncome = amounts.filter(amount => amount > 0).reduce((acc, amount) => acc + amount, 0);
    const totalExpenses = amounts.filter(amount => amount < 0).reduce((acc, amount) => acc + amount, 0) * -1;


    const currentBalance = (totalIncome - totalExpenses).toFixed(2);

    return (
        <div>
            <h4>Current Balance</h4>
            <h1>${currentBalance}</h1>
        </div>
    );
};

export default Balance;
