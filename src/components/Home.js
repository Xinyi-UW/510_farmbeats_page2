import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCamera, faEnvelope, faBell, faCog, faMoon, faSignOutAlt, faChevronRight, faPlus, faCheckCircle, faCircle, faUserCircle, faRobot } from '@fortawesome/free-solid-svg-icons';
import './Dashboard2.css';
import { getChatCompletion } from '../api/openai.js';
import './Home.css';
import { Link } from 'react-router-dom'; // 导入 Link 组件
import logo1 from '../assets/images/logo.jpg';

const Dashboard2 = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleChatbot = () => {
    const chatbotWindow = document.getElementById('chatbot-window');
    chatbotWindow.style.display = chatbotWindow.style.display === 'none' || chatbotWindow.style.display === '' ? 'flex' : 'none';
  };

  const sendMessage = async () => {
    if (input.trim()) {
      const userMessage = { role: 'user', content: input.trim() };
      setMessages([...messages, userMessage]);
      setInput('');
      setLoading(true); // Start loading
      setError(null); // Clear previous errors

      console.log('Sending message:', input.trim()); // Log the message being sent

      try {
        const botResponse = await getChatCompletion(input.trim());
        console.log('Received bot response:', botResponse); // Log the response from the bot
        const botMessage = { role: 'assistant', content: botResponse };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
        setLoading(false); // Stop loading
      } catch (error) {
        console.error('Error sending message:', error);
        setError('Sorry, something went wrong.');
        setLoading(false); // Stop loading
      }
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar bg-green-700 d-flex flex-column align-items-center py-4">
        <FontAwesomeIcon icon={faHome} className="text-white text-xl mb-4" />
        <FontAwesomeIcon icon={faCamera} className="text-white text-xl mb-4" />
        <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl mb-4" />
        <FontAwesomeIcon icon={faBell} className="text-white text-xl mb-4" />
        <FontAwesomeIcon icon={faCog} className="text-white text-xl mb-4" />
        <FontAwesomeIcon icon={faMoon} className="text-white text-xl mt-auto mb-4" />
        <FontAwesomeIcon icon={faSignOutAlt} className="text-white text-xl mb-4" />
      </div>

      <div className="main-content flex-1">
        <header className="header">
          <div className="d-flex align-items-center">
          <img src={logo1} alt="Row 4" className="logo" />
            <span className="font-bold text-lg ml-2">Farmbeats</span>
          </div>
          <h1 className="text-green-700 text-3xl font-bold">Sentinel</h1>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-green-700 text-xl mr-4" />
            <FontAwesomeIcon icon={faUserCircle} className="text-green-700 text-xl" />
          </div>
        </header>

        <section className="dashboard-section p-4">
          <h2 className="text-green-700 font-bold">Dashboard</h2>
          <div className="d-flex justify-content-between">
            <div className="chart-section bg-white p-4 shadow rounded">
              <h3 className="font-bold">Peaweevil Detection</h3>
              <img src="images/img-7BKi7ExM9wxOINZ3nLM3UCdk.png" alt="Peaweevil Detection Graph" className="w-100" />
              <button className="btn btn-outline-secondary mt-4">Switch to Weekly View</button>
            </div>
            <div className="device-list">
              <h3 className="font-bold text-green-700">My Device List</h3>
              <Link to="/dashboard" className="device-item d-flex justify-content-between align-items-center p-2 mt-2 shadow-sm rounded text-decoration-none">
                <span>Device 1</span>
                <span>Update 2h ago</span>
                <FontAwesomeIcon icon={faChevronRight} className="text-orange-600" />
              </Link>
              <div className="device-item d-flex justify-content-between align-items-center p-2 mt-2 shadow-sm rounded">
                <span>Device 1</span>
                <span>Update 2h ago</span>
                <FontAwesomeIcon icon={faChevronRight} className="text-orange-600" />
              </div>
              <div className="device-item d-flex justify-content-between align-items-center p-2 mt-2 shadow-sm rounded">
                <span>Device 2</span>
                <span>Update 24h ago</span>
                <FontAwesomeIcon icon={faChevronRight} className="text-orange-600" />
              </div>
              <button className="btn btn-warning d-flex align-items-center mt-4">
                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                Add New Device
              </button>
            </div>
          </div>
        </section>

        <section className="warning-section p-4">
          <h2 className="text-green-700 font-bold">Warning List</h2>
          <div className="warning-item bg-white p-4 mt-2 shadow rounded d-flex justify-content-between align-items-center">
            <div>
              <h3 className="font-bold">Warning: High Level of Pea Weevil Infestation Detected</h3>
              <p className="mb-1"><strong>Timestamp:</strong> 2024-05-20 08:45 AM</p>
              <p>Our system has detected a significant increase in the number of pea weevils in your field. Immediate inspection and appropriate pest control measures are recommended to protect your crops.</p>
            </div>
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-xl" />
          </div>
          <div className="warning-item bg-white p-4 mt-2 shadow rounded d-flex justify-content-between align-items-center">
            <div>
              <h3 className="font-bold">Warning: Sensor Malfunction</h3>
              <p className="mb-1"><strong>Timestamp:</strong> 2024-05-20 09:15 AM</p>
              <p>Anomalies have been detected in the sensor data. Please check the device connections or contact technical support for assistance.</p>
            </div>
            <FontAwesomeIcon icon={faCircle} className="text-grey-600 text-xl" />
          </div>
          <div className="warning-item bg-white p-4 mt-2 shadow rounded d-flex justify-content-between align-items-center">
            <div>
              <h3 className="font-bold">Warning: Low Device Battery</h3>
              <p className="mb-1"><strong>Timestamp:</strong> 2024-05-20 10:05 AM</p>
              <p>The device battery level has dropped below 20%. Please replace the battery or connect to a power source to ensure continuous monitoring.</p>
            </div>
            <FontAwesomeIcon icon={faCircle} className="text-grey-600 text-xl" />
          </div>
          <div className="warning-item bg-white p-4 mt-2 shadow rounded d-flex justify-content-between align-items-center">
            <div>
              <h3 className="font-bold">Warning: Pea Weevil Detection Failed</h3>
              <p className="mb-1"><strong>Timestamp:</strong> 2024-05-20 12:30 PM</p>
              <p>The device failed to detect pea weevils. Please ensure the camera and sensors are clean and unobstructed, and check for any technical issues.</p>
            </div>
            <FontAwesomeIcon icon={faCircle} className="text-grey-600 text-xl" />
          </div>
        </section>

        <section className="contact-section p-4">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" className="form-control" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" className="form-control" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" className="form-control" rows="5" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </section>
      </div>

      <div className="chatbot" onClick={toggleChatbot}>
        <FontAwesomeIcon icon={faRobot} className="text-2xl" />
      </div>

      <div className="chatbot-window" id="chatbot-window">
        <div className="chatbot-header">Chatbot</div>
        <div className="chatbot-messages" id="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              {message.content}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            id="chatbot-input"
            placeholder="Type a message..."
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
        {error && <div className="error-message">{error}</div>}
        {loading && <div className="loading-message">Loading...</div>}
      </div>
    </div>
  );
};

export default Dashboard2;


