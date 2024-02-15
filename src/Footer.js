import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

const Footer = () => {
  const [iconColors, setIconColors] = useState({
    github: 'grey',
    gmail: 'grey',
  });

  const handleMouseEnter = (icon) => {
    setIconColors((prevColors) => ({
      ...prevColors,
      [icon]: getHoverColor(icon),
    }));
  };

  const handleMouseLeave = (icon) => {
    setIconColors((prevColors) => ({
      ...prevColors,
      [icon]: 'grey',
    }));
  };

  const getHoverColor = (icon) => {
    switch (icon) {
      case 'github':
        return '#0D0D0D';
      case 'gmail':
        return '#D44638';
      default:
        return 'grey';
    }
  };

  return (
    <footer className="footer" id="contact">
      <div className="left-section">
        <p>&copy; 2024 Emon</p>
      </div>
      <div className="right-section">
        <SocialIcon
          style={{ height: 25, width: 25, cursor: 'pointer', marginRight: '5px' }}
          className="custom-class"
          bgColor={iconColors.github}
          url="https://github.com/ignite312"
          target="_blank"
          onMouseEnter={() => handleMouseEnter('github')}
          onMouseLeave={() => handleMouseLeave('github')}
        />
        <SocialIcon
          style={{ height: 25, width: 25, cursor: 'pointer', marginRight: '5px' }}
          className="custom-class"
          bgColor={iconColors.gmail}
          url="mailto:contact.emonkhan@gmail.com"
          target="_blank"
          onMouseEnter={() => handleMouseEnter('gmail')}
          onMouseLeave={() => handleMouseLeave('gmail')}
        />
      </div>
    </footer>
  );
};

export default Footer;