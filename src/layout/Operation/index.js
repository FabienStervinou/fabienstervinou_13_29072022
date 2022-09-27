import React from 'react';

function Operation (data) {
  const operation = data.data; 
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{operation.title}</h3>
        <p className="account-amount">${operation.amount}</p>
        <p className="account-amount-description">{operation.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

export default Operation;