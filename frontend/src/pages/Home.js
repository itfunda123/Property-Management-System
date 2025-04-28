// components/Home.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar1';
import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';

function Home() {
  return (
    <div className="m-0 p-0">
      <Navbar />

      <div id="homeCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img 
              src={image1} 
              className="d-block w-100" 
              alt="Pay Rent" 
              style={{ height: '75vh', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h2 className="fw-bold">Paying Rent Made Easy</h2>
              <p className="lead">Secure and fast online payments.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img 
              src={image2} 
              className="d-block w-100" 
              alt="Reminders" 
              style={{ height: '75vh', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h2 className="fw-bold">Get Reminders</h2>
              <p className="lead">Never miss a rent payment again.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img 
              src={image3} 
              className="d-block w-100" 
              alt="Contact Landlord" 
              style={{ height: '75vh', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h2 className="fw-bold">Contact Landlord Directly</h2>
              <p className="lead">Fast messaging through your dashboard.</p>
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
  );
}

export default Home;
