// components/ContactUs.js
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar1';  // Import Navbar

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div>
      <Navbar /> {/* Add Navbar at the top of the page */}

      <div className="container mt-5">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="mt-3">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            className="form-control mb-3" 
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            className="form-control mb-3"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            className="form-control mb-3"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
