// pages/AboutUs.js
import React from 'react';
import Navbar from '../components/Navbar1';
import Footer from '../components/Footer'; // <-- Ensure this exists

function AboutUs() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <div className="container flex-grow-1 py-2">
        <h4 className="text-center mb-2">About Us</h4>
        <p className="text-center small mb-3">
          We are dedicated to simplifying property management for landlords and tenants alike.
        </p>

        <div className="row gx-2">
          {[
            { title: 'Rent Payment', desc: 'Pay rent securely online.' },
            { title: 'Listings', desc: 'Find and apply for houses.' },
            { title: 'Repairs', desc: 'Submit maintenance requests.' },
            { title: 'Dashboards', desc: 'Manage leases and updates.' },
            { title: 'Reminders', desc: 'Get rent and repair alerts.' },
            { title: 'Reports', desc: 'Track revenue and activity.' },
          ].map((card, index) => (
            <div className="col-6 col-md-4 mb-2" key={index}>
              <div className="card h-100 p-2 small shadow-sm">
                <div className="card-body p-2">
                  <h6 className="card-title mb-1">{card.title}</h6>
                  <p className="card-text">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer /> {/* Now always at the bottom */}
    </div>
  );
}

export default AboutUs;
