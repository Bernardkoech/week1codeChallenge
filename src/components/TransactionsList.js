import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transactions}) {

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
        <th>
            <h3 className="ui center aligned header">ID</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Action</h3>
            
            
          </th>
        </tr>
        {transactions.map((transaction)=>(
                    
           <Transaction 
           key={transaction.id}
           transaction={transaction}
           />


          
        ))}
         
      </tbody>
    </table>
  );
}

export default TransactionsList;