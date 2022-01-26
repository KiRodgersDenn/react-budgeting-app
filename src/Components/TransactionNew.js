import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function TransactionNewForm() {
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: "",
  });
  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/transactions`, transaction)
    .then((res)=>{
      navigate("/transactions");
    }).catch((err)=>{
      console.log(err);
    })
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="date"
          pattern="mm/dd/yyyy"
          required
          onChange={handleTextChange}
          placeholder="Date"
          required
        />
        <br/>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={transaction.name}
          placeholder="Type of Transaction"
          onChange={handleTextChange}
        />
         <br/>
        <label htmlFor="category">Amount:</label>
        <input
          id="amount"
          type="text"
          name="amount"
          value={transaction.amount}
          placeholder="###"
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default TransactionNewForm;
