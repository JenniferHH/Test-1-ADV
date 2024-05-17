import React, { useState } from 'react'; 
import './tran.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Deposit = ({ type, onSubmit }) => { 
    const [accountNumber, setAccountNumber] = useState(''); 
    const [amount, setAmount] = useState(''); 

    const handleSubmit = (e) => { 
        e.preventDefault(); 
       
        if (!accountNumber.trim() || !amount.trim()) { 
        alert('Please enter both account number and amount.'); 
        return; 
         } 
        
        const transactionData = { 
            accountNumber: accountNumber.trim(), 
            amount: parseFloat(amount.trim()),
            type: type 
        }; 
       
        onSubmit(transactionData); 
        
        
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
                    <h2>{type === 'deposit' ? 'Deposit' : 'Withdraw'} Form</h2>
                    <div className="form-group"> 
                        <label htmlFor="accountNumber">Account Number</label> 
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
                        <button type="submit" class="btn btn-secondary" style={{marginRight: "10px"}} > 
                            Submit 
                        </button> 
                    </div>
                </form> 
            </div> 
            </Col>
            </Container>
            </row>
        </div>
    ); 
}; 

export default Deposit;
