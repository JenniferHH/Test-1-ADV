import React, { useState } from 'react'; 
import './tran.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Etransfer = ({ type, onSubmit }) => { 
    const [accountNumber, setAccountNumber] = useState(''); 
    const [amount, setAmount] = useState(''); 

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        // Validate form inputs 
        if (!accountNumber.trim() || !amount.trim()) { 
            alert('Please enter both account number and amount.'); 
            return; 
        } 
        // Prepare transaction data 
        const transactionData = { 
            accountNumber: accountNumber.trim(), 
            amount: parseFloat(amount.trim()), // Convert amount to number 
            type: type 
        }; 
        // Check if onSubmit is a function before calling it
        if (typeof onSubmit === 'function') {
            onSubmit(transactionData);
        } else {
            console.error('onSubmit is not a function');
        }
        
        // Reset form fields after submission 
        setAccountNumber(''); 
        setAmount(''); 
    }; 

    return ( 
        <div className='from'> 
        <row>
        <Container fluid>
        <Col md={2} ></Col>
        <Col md={20}>
            <div className='from' class="col shadow p-3 mb-5 bg-body-tertiary rounded">
                <form onSubmit={handleSubmit}> 
                    <h2>{type === 'deposit' ? 'Deposit' && 'Withdraw' : 'etransfer'} Form</h2>
                    <div className="form-group"> 
                        <label htmlFor="accountNumber">account Number</label> 
                        <input 
                            type="text" 
                            className="form-control" 
                            id="accountNumber" 
                            value={accountNumber} 
                            onChange={(e) => setAccountNumber(e.target.value)} 
                            required 
                        /> 
                    </div> 
                    <div className="form-group"> 
                        <label htmlFor="amount">Amount</label> 
                        <input 
                            type="number" 
                            className="form-control" 
                            id="amount" 
                            value={amount} 
                            onChange={(e) => setAmount(e.target.value)} 
                            required 
                        /> 
                    </div> 
                    <div className='but'>
                        <button type="submit" className="btn btn-secondary" style={{marginRight: "10px"}}> 
                            Submit 
                        </button> 
                        <Link to="/Transaction">
                        <button type="cancel" class="btn btn-secondary" >Cancel</button>
                        </Link>
                    </div>
                </form>
            </div> 
            </Col>
            </Container>
            </row>
        </div>
    ); 
}; 

export default Etransfer;