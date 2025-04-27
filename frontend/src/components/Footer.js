// components/Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3 mt-5">
      <p className="mb-0">© 2025 Rent Collection System. All rights reserved.</p>
      <div>
        <a href="/privacy-policy" className="mx-2">Privacy Policy</a>
        <a href="/terms-of-service" className="mx-2">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
