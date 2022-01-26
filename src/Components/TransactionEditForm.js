import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TransactionEditForm() {
  let { index } = useParams();
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: "",
  });
  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
    .then((res)=>{
      setTransaction(res.data);
    }).catch((err)=>{
      navigate("/not-found");
    })
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${process.env.REACT_APP_API_URL}/transactions/${index}`, transaction)
    .then((res)=>{
      navigate("/transactions");
    }).catch((err)=>{
      console.log(err);
    })
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Date:</label>
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
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={transaction.name}
          placeholder="Name"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Amount:</label>
        <input
          id="category"
          type="text"
          name="amount"
          value={transaction.amount}
          placeholder="amount"
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default TransactionEditForm;
