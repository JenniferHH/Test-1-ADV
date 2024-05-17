import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './Navbar'; 
import Transaction from './Transaction'; 
import Withdraw from './Withdraw';
import Login from './Login';
import Welcomepage from './Welcomepage';
import Footer from './Footer';
import Deposit from './deposit';
import ParentComponent from './ParentComponent';
import Etransfer from './etransfer';


const App = () => { 
  const [accountNumber, setAccountNumber] = useState('123456789'); 
  const [balance, setBalance] = useState(1000); 
  const [transactions, setTransactions] = useState([]); 

  const handleTransaction = ({ amount, type }) => { 
    const transaction = { 
      type, 
      accountNumber: Number(accountNumber), 
      amount: Number(amount), 
      timestamp: new Date().toLocaleString() 
    };

    if (type === 'deposit') { 
      setBalance(prevBalance => prevBalance + Number(amount)); 
    } else if (type === 'withdraw') { 
      setBalance(prevBalance => prevBalance - Number(amount)); 
    }

    setTransactions(prevTransactions => [...prevTransactions, transaction]);
  };

  return ( 
    <Router> 
      <div> 
        <Navbar balance={balance} /> 
        <div className="container mt-4"> 
          <Routes> 
            <Route 
              path="/" element={<Welcomepage />} 
            /> 
            <Route path="/Transaction" element={<Transaction accountNumber={accountNumber} balance={balance} transactions={transactions} />} />
            <Route path="/Withdraw" element={<Withdraw type="withdraw" onSubmit={handleTransaction} />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/deposit" element={<Deposit type="deposit" onSubmit={handleTransaction} />} />
            <Route path="/ParentComponent" element={<ParentComponent />} />
            <Route path="/etransfer" element={<Etransfer />} />
          </Routes> 
        </div> 
        <Footer balance={balance} /> 
      </div> 
    </Router> 
  ); 
}; 
  
export default App;
    
