// pages/AboutUs.js
import React from 'react';
import Navbar from '../components/Navbar1'; // <-- Import Navbar

function AboutUs() {
  return (
    <div>
      <Navbar /> {/* Include the Navbar */}

      <div className="container mt-5">
        <h1 className="mb-4">About Us</h1>
        <p>
          Welcome to our Property Management System. We specialize in simplifying the way tenants,
          landlords, and property managers interact. Our mission is to provide a seamless digital
          experience for managing rentals, collecting rent, and maintaining properties.
        </p>
        <p>
          Whether you're a tenant looking for your next home or a landlord managing multiple
          properties, our platform offers the tools and insights needed to make informed decisions,
          track important details, and streamline communications.
        </p>

        <h3 className="mt-5 mb-4">What We Offer</h3>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Online Rent Payment</h5>
                <p className="card-text">
                  Easily pay your rent through our secure online portal and keep track of your
                  payment history with just a few clicks.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Property Listings</h5>
                <p className="card-text">
                  Browse available properties with detailed descriptions, images, and pricing, then
                  apply directly from the platform.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Maintenance Requests</h5>
                <p className="card-text">
                  Tenants can submit repair requests online, and property managers can track
                  progress and communicate updates efficiently.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Tenant & Landlord Dashboards</h5>
                <p className="card-text">
                  Personalized dashboards help users manage leases, documents, and important
                  notifications all in one place.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Automated Reminders</h5>
                <p className="card-text">
                  Never miss a due date with our email and SMS notifications for rent, maintenance,
                  and other important updates.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Reports & Insights</h5>
                <p className="card-text">
                  Generate detailed reports on rental income, maintenance activity, and tenant
                  feedback to improve your property management decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
