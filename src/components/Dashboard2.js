import React, { useState } from 'react';
import './Dashboard2.css';
import testimage1 from '../assets/images/farm1.png';
import testimage2 from '../assets/images/farm2.png';
import testimage3 from '../assets/images/farm3.png';
import logo1 from '../assets/images/logo.jpg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

function Dashboard2() {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  return (
    <div className="dashboard">
      <header>
        <div className="logo">
        <img src={logo1} alt="Row 4" className="logo" />
          <h1>Sentinel</h1>
        </div>
        <div className="profile">
          <img src="https://via.placeholder.com/50" alt="Profile" />
        </div>
      </header>
      <main>
        <div className="sidebar">
          <ul>
            <Link to="/" className="home-link">Home</Link>
            <li>Library</li>
            <li>Settings</li>
          </ul>
        </div>
        <div className="content">
          <div className="header2">
            <h2>Device 1 Picture Library</h2>
            <div className="date-selector">
              <button>&lt;</button>
              <DatePicker 
                selected={startDate} 
                onChange={handleDateChange} 
                dateFormat="MMMM d, yyyy"
                className="date-picker"
              />
              <button>&gt;</button>
            </div>
          </div>
          <div className="pictures">
            <div className="picture">
              <img src={testimage1} alt="Row 1" className="testimage" />
              <div className="picture-info">
                <div className="picture-time">Capture time:</div>
                <div className="peaewevil-num">
                  Peaweevil num:
                  <button>-</button>
                  <span>n</span>
                  <button>+</button>
                </div>
              </div>
            </div>
            <div className="picture">
              <img src={testimage2} alt="Row 2" className="testimage" />
              <div className="picture-info">
                <div className="picture-time">Capture time:</div>
                <div className="peaewevil-num">
                  Peaweevil num:
                  <button>-</button>
                  <span>n</span>
                  <button>+</button>
                </div>
              </div>
            </div>
            <div className="picture">
              <img src={testimage3} alt="Row 3" className="testimage" />
              <div className="picture-info">
                <div className="picture-time">Capture time:</div>
                <div className="peaewevil-num">
                  Peaweevil num:
                  <button>-</button>
                  <span>n</span>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="controls">
          <h3>Picture Capture Interval</h3>
          <input type="range" min="1" max="24" />
          <button>Save Changes</button>
          <button>Apply to All</button>
          <button className="biggerbutton">Capture Now</button>
          <button className="biggerbutton">Request Maintenance</button>
        </div>
      </main>
    </div>
  );
}

export default Dashboard2;

