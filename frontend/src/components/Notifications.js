// components/Notifications.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Notifications() {
  // Later: fetch notifications from backend
  const notifications = [
    { id: 1, text: "Rent due on 1st July." },
    { id: 2, text: "Maintenance scheduled for 5th July." },
    { id: 3, text: "New message from landlord." },
  ];

  return (
    <div className="container mt-5">
      <h2>Notifications</h2>
      <ul className="list-group mt-4">
        {notifications.map((notif) => (
          <li key={notif.id} className="list-group-item">
            {notif.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
