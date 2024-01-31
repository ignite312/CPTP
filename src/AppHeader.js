import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './AppHeader.css';

const AppHeader = () => {
  // Get the username from the URL parameters or set it to the default value
  const username = new URLSearchParams(window.location.search).get('username') || 'Emon';

  return (
    <header className="App-header">
      <div className="header-container">
        <h3>A Bit Of Competitive Programming</h3>
        <nav>
          <ul>
            <li><a href={`mailto:schrodingersrats@gmail.com?subject=Hey%20${username}`} target="_blank" rel="noopener noreferrer">Contact</a></li>
            <li><a href="https://ignite312.github.io/ME" target="_blank" rel="noopener noreferrer">About Me</a></li>
            {/* Add more navigation options as needed */}
          </ul>
        </nav>
      </div>
      <div className="project-description">
        <p>
          A Competitive Programming tool and resource-sharing page. I will try to add all kinds of Data Structure and Algorithmic Resources, as well as Competitive Programming material here.
        </p>
        <div className="additional-options">
          <Link to="/a-bit-of-CP">Get User Problem List in CF By Category</Link>
          {/* Add more options as needed */}
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
