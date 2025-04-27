// components/Home.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar1';  // Import Navbar
import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';

function Home() {
  return (
    <div>
      <Navbar /> {/* Include the Navbar at the top of the page */}

      <div className="container mt-5">
        <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner rounded">
            <div className="carousel-item active">
              <img src={image1} className="d-block w-100" alt="Pay Rent" style={{ height: '75%' }} />
              <div className="carousel-caption d-none d-md-block">
                <h5>Paying Rent Made Easy</h5>
                <p>Secure and fast online payments.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={image2} className="d-block w-100" alt="Reminders" style={{ height: '75%' }} />
              <div className="carousel-caption d-none d-md-block">
                <h5>Get Reminders</h5>
                <p>Never miss a rent payment again.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={image3} className="d-block w-100" alt="Contact Landlord" style={{ height: '75%' }} />
              <div className="carousel-caption d-none d-md-block">
                <h5>Contact Landlord Directly</h5>
                <p>Fast messaging through your dashboard.</p>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
