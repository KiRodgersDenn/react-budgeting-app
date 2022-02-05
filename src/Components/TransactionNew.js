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
        <div class="form-group row">
        <label htmlFor="date" class="col-sm-2 col-form-label">Date:</label>
        <div class="col-sm-10">
        <input
          id="date"
          class="form-control"
          value={transaction.date}
          type="date"
          pattern="mm/dd/yyyy"
          required
          onChange={handleTextChange}
          placeholder="Date"
          required
        />
        </div>
        </div>
        <br/>
        <div class="form-group row">
        <label htmlFor="name" class="col-sm-2 col-form-label">Name:</label>
        <div class="col-sm-10">
        <input
          id="name"
          type="text"
          value={transaction.name}
          placeholder="Type of Transaction"
          onChange={handleTextChange}
        />
        </div>
        </div>
         <br/>
        <div class="form-group row">
        <label htmlFor="amount" class="col-sm-2 col-form-label">Amount:</label>
        <div class="col-sm-10">
        <input
          id="amount"
          type="text"
          name="amount"
          value={transaction.amount}
          placeholder="###"
          onChange={handleTextChange}
        />
        </div>
        </div>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default TransactionNewForm;
