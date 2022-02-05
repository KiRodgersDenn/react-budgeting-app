import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function Transactions() {
    const [transactions, setTransactions] = useState([]);
    useEffect(()=>{
        axios.get(API_URL + "/transactions")
        .then((res)=>{
            setTransactions(res.data);
        }) .catch((err)=>{
            throw err;
        });
    }, []);

    const amountArr = transactions.map((transaction)=>{
        return transaction.amount
    });

    const total = amountArr.reduce((acc, curr)=>{
        return Number(acc) + Number(curr);
    },0)

    const highlight = () => {
        if (total < 1000){
            return <div className="text-danger">Bank Acount Total:{total.toFixed(2)}</div>
        }else if (total > 0){
            return <div className="text-success">Bank Acount Total:{total.toFixed(2)}</div>
        }
    }

    return (
        <div className="Transactions">
            <h1>
                {highlight()}
                {/* Account Total: ${total.toFixed(2)} */}
            </h1>
            
                    {/* <tr> */}
                        {/* <th>Date:</th>
                        <th>Name:</th>
                        <th>Amount:</th> */}
                    {/* </tr> */}
                <ul className="list-group">
                    {transactions.map((transaction, index)=>(< Transaction key={index} transaction={transaction} index={index} />))}
                </ul>
        </div>
    )
}



export default Transactions