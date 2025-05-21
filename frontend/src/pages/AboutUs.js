// pages/AboutUs.js
import React from 'react';
import Navbar from '../components/Navbar1';

function AboutUs() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <div className="container flex-grow-1 my-3">
        <h2 className="mb-3 text-center">About Us</h2>
        <p className="text-center small">
          We are dedicated to making renting easier and more efficient. Our Property Management System
          provides a user-friendly platform for tenants and landlords to manage their rental needs seamlessly.
        </p>

        <div className="row mt-3">
          {[
            { title: 'Online Rent Payment', desc: 'Securely pay rent and view payment history.' },
            { title: 'Property Listings', desc: 'Browse and apply for available properties.' },
            { title: 'Maintenance Requests', desc: 'Submit and track repair requests easily.' },
            { title: 'User Dashboards', desc: 'Manage leases, payments, and notifications.' },
            { title: 'Automated Reminders', desc: 'Stay updated with timely alerts.' },
            { title: 'Reports & Insights', desc: 'Get valuable reports on performance.' },
          ].map((card, index) => (
            <div className="col-sm-6 col-md-4 mb-3" key={index}>
              <div className="card h-100 p-2 small shadow-sm">
                <div className="card-body">
                  <h6 className="card-title">{card.title}</h6>
                  <p className="card-text">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
