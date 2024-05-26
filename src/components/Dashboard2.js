import React from 'react';
import './Dashboard2.css';

function Dashboard2() {
  return (
    <div className="dashboard">
      <header>
        <div className="logo">
          <img src="https://via.placeholder.com/150" alt="Logo" />
          <h1>Sentinel</h1>
        </div>
        <div className="profile">
          <img src="https://via.placeholder.com/50" alt="Profile" />
        </div>
      </header>
      <main>
        <div className="sidebar">
          <ul>
            <li>Home</li>
            <li>Library</li>
            <li>Settings</li>
          </ul>
        </div>
        <div className="content">
          <div className="header">
            <h2>Device 1 Picture Library</h2>
            <div className="date-selector">
              <button>&lt;</button>
              <span>May 2024</span>
              <button>&gt;</button>
            </div>
          </div>
          <div className="pictures">
            <div className="picture">
              <div className="picture-time">capture time:</div>
              <div className="peaewevil-num">
                peaewevil num:
                <button>-</button>
                <span>n</span>
                <button>+</button>
              </div>
            </div>
            <div className="picture">
              <div className="picture-time">capture time:</div>
              <div className="peaewevil-num">
                peaewevil num:
                <button>-</button>
                <span>n</span>
                <button>+</button>
              </div>
            </div>
            <div className="picture">
              <div className="picture-time">capture time:</div>
              <div className="peaewevil-num">
                peaewevil num:
                <button>-</button>
                <span>n</span>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="controls">
          <h3>Picture Capture Interval</h3>
          <input type="range" min="1" max="24" />
          <button>Save Changes</button>
          <button>Apply to All</button>
          <button>Capture Now</button>
          <button>Request Maintenance</button>
        </div>
      </main>
    </div>
  );
}

export default Dashboard2;
