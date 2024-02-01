import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './AppHeader.css';

const AppHeader = () => {
  // Get the username from the URL parameters or set it to the default value
  const username = new URLSearchParams(window.location.search).get('username') || 'Emon';

  return (
    <header className="App-header">
      <div className="header-container">
        <h1>CPTP</h1>
        <nav>
          <ul>
            <li><a href={`mailto:schrodingersrats@gmail.com?subject=Hey`} target="_blank" rel="noopener noreferrer">Contact</a></li>
            <li><a href="https://ignite312.github.io/ME" target="_blank" rel="noopener noreferrer">About Me</a></li>
            {/* Add more navigation options as needed */}
          </ul>
        </nav>
      </div>
      <div className="project-description">
        <h5>
        A Competitive Programming tool and resource-sharing page. I will try to add all kinds of Data Structure and Algorithmic Resources, as well as Competitive Programming stuff here. Feel free to ask me anything...
        </h5>
        <div className="additional-options">
          <Link to="/CPTP">Get User Problem List in CF By Category</Link>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
