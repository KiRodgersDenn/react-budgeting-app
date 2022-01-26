import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import Transaction from "./Transaction";

function TransactionDetails(){
    const [transaction, setTransaction] = useState([]);
    let { index } = useParams();
    let navigate = useNavigate();

useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
    .then((res)=>{
        setTransaction(res.data);
    }).catch(()=>{
        navigate("/not-found");
    });
}, [index]); 

const handleDelete = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
    .then((res)=>{
        navigate("/transactions");
    }) .catch((err)=>{
        console.log(err);
    });
};

return(
    <article>
        <h2>
           Transaction Details:
        </h2>
        <h4>
            {transaction.date}
        </h4>
        <h4>
            {transaction.name}
        </h4>
        <h4>
            {transaction.from}
        </h4>
        <h4>
            {transaction.amount}
        </h4>
        <div>
         <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
            <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
            </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
    </article>
);

}

export default TransactionDetails