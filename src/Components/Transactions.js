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

    return (
        <div className="Transactions">
            <table>
                <thead>
                    <tr>
                        <th>Date:</th>
                        <th>Name:</th>
                        <th>Amount:</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index)=>{
                        return < Transaction key={index} transaction={transaction} index={index} />;
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Transactions