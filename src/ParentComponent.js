
import React from 'react';
import Withdraw from './Withdraw';

const ParentComponent = () => {
    const handleSubmit = (transactionData) => {
        
        console.log("Transaction data submitted:", transactionData);
    };

    return (
        <div>
            <Withdraw type="deposit" onSubmit={handleSubmit} />
        </div>
    );
};

export default ParentComponent;
