import React from 'react'; 
import { Link } from 'react-router-dom'; 
import Table from 'react-bootstrap/Table';
import './home.css';

const Transaction = ({ accountNumber, balance, transactions }) => { 
    return ( 
        <div> 
            <div className='text'>
            <h4 class = 'display-6'>Do you know you can earn the money back in every tansaction?</h4>
            </div>
            <div className='accounttext'>
            <p><strong>Account Number:</strong> {accountNumber}</p> 
            <p><strong>Balance:</strong> ${balance}</p>
            </div>
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group" style={{width: '30%'}} className='button'>
                < Link to="/etransfer" className="btn btn-outline-secondary" style={{marginRight: "10px"}}> 
                    E Transfer 
                </Link> 
                {/* Link to Deposit page */} 
                < Link to="/deposit" className="btn btn-outline-secondary" style={{marginRight: "10px"}}> 
                    Deposit 
                </Link> 
                {/* Link to Withdraw page */} 
                <Link to="/Withdraw" className="btn btn-outline-secondary"> 
                    Withdraw 
                </Link> 
            </div> 
            <div className='tran'>
            <h3>Transactions: 
            </h3>
            </div>
            <Table striped bordered hover responsive > 
                <thead> 
                    <tr> 
                        <th>#</th> 
                        <th>Date</th> 
                        <th>Type</th> 
                        <th>Amount</th> 
                        <th>Account Number</th>
                    </tr> 
                </thead>
                <tbody> 
                 {transactions.map((transaction, index) => (
                    <tr> {/* Ensure each row is wrapped in a <tr> tag */}
                        <td>{index + 1}</td> 
                        <td>{transaction.timestamp}</td> 
                        <td>{transaction.type === 'deposit' ? 'Deposit' || 'etransfer' : 'Withdraw' }</td> 
                        <td>${transaction.amount}</td> 
                        <td>{transaction.accountNumber}</td>
                    </tr> 
                ))} 
        </tbody> 
            </Table>
            
            </div>

    ); 
}; 

export default Transaction;



    