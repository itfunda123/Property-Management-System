// components/SendMessage.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SendMessage() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message sent:', message);
    // Later: send message to backend
  };

  return (
    <div className="container mt-5">
      <h2>Send Message</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="5"
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}

export default SendMessage;
