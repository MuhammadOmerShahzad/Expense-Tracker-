import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState'; 

export const AccountSummary = () => {
    const { transactions } = useContext(GlobalContext);

    
    const amounts = transactions.map(transaction => transaction.transactionAmount);
    const totalIncome = amounts.filter(amount => amount > 0).reduce((acc, amount) => acc + amount, 0).toFixed(2);
    const totalExpenses = (amounts.filter(amount => amount < 0).reduce((acc, amount) => acc + amount, 0) * -1).toFixed(2);

    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus'>${totalIncome}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className='money minus'>${totalExpenses}</p>
            </div>
        </div>
    );
};

export default AccountSummary;
