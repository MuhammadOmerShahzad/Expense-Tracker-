import React, {useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Transaction } from './Transactions';


export const TransactionHistory  =()=> {
    const {transactions}=useContext(GlobalContext)

    return (
        <div className=''>
            <h3>Transaction History</h3>
            <ul className='list'>
                {transactions.map(transaction=>(
                    <Transaction key={transaction.id}
                    transaction={transaction}/>
                ))
                }
            </ul>
        </div>
    )
}

export default TransactionHistory;