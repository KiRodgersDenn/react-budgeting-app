import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
    return(
        <table id="myTable" class=" table order-list">
        <thread>
        <tr>
            <td class="col-sm-4">{transaction.date}</td>
            <td class="col-sm-4"> 
            <Link to ={`/transactions/${index}`}>
                {transaction.name}
            </Link>
            </td>
            <td class="col-sm-4">{transaction.amount}</td>
        </tr>
        </thread>
        </table>
    );
}

export default Transaction;