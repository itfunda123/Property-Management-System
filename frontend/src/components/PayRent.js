// components/PayRent.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PayRent() {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Rent payment submitted:', amount);
    // Later: send this to backend!
  };

  return (
    <div className="container mt-5">
      <h2>Pay Rent</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Pay Now</button>
      </form>
    </div>
  );
}

export default PayRent;
