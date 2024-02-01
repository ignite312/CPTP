// Footer.js

import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

const Footer = () => {
  const [iconColors, setIconColors] = useState({
    github: 'grey',
    linkedin: 'grey',
    discord: 'grey',
    gmail: 'grey',
    x: 'grey', // Replace 'twitter' with 'x'
    instagram: 'grey',
    youtube: 'grey',
    facebook: 'grey',
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
      case 'linkedin':
        return '#0077B5';
      case 'discord':
        return '#7289DA';
      case 'gmail':
        return '#D44638';
      case 'x':
        return '#0D0D0D'; // Adjust the color for the 'x' icon
      case 'instagram':
        return '#E1306C';
      case 'youtube':
        return '#CD201F';
      case 'facebook':
        return '#0D6EDB';
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
        {/* <SocialIcon
          style={{ height: 25, width: 25, cursor: 'pointer', marginRight: '5px' }}
          className="custom-class"
          bgColor={iconColors.linkedin}
          url="https://www.linkedin.com/in/sajjademon"
          target="_blank"
          onMouseEnter={() => handleMouseEnter('linkedin')}
          onMouseLeave={() => handleMouseLeave('linkedin')}
        />
        <SocialIcon
          style={{ height: 25, width: 25, cursor: 'pointer', marginRight: '5px' }}
          className="custom-class"
          bgColor={iconColors.discord}
          url="https://discord.com/users/ignite312"
          target="_blank"
          onMouseEnter={() => handleMouseEnter('discord')}
          onMouseLeave={() => handleMouseLeave('discord')}
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
        <SocialIcon
          style={{ height: 25, width: 25, cursor: 'pointer', marginRight: '5px' }}
          className="custom-class"
          bgColor={iconColors.x}
          url="https://x.com/sajjdemon"
          // Replace '#' with the link you want for the 'x' icon
          target="_blank"
          onMouseEnter={() => handleMouseEnter('x')}
          onMouseLeave={() => handleMouseLeave('x')}
        />
        <SocialIcon
          style={{ height: 25, width: 25, cursor: 'pointer', marginRight: '5px' }}
          className="custom-class"
          bgColor={iconColors.instagram}
          url="https://instagram.com/sajjdemon"
          target="_blank"
          onMouseEnter={() => handleMouseEnter('instagram')}
          onMouseLeave={() => handleMouseLeave('instagram')}
        />
        <SocialIcon
          style={{ height: 25, width: 25, cursor: 'pointer' }}
          className="custom-class"
          bgColor={iconColors.youtube}
          url="https://youtube.com/@sajjdemon"
          target="_blank"
          onMouseEnter={() => handleMouseEnter('youtube')}
          onMouseLeave={() => handleMouseLeave('youtube')}
        />
        <SocialIcon
          style={{ height: 25, width: 25, cursor: 'pointer' }}
          className="custom-class"
          bgColor={iconColors.facebook}
          url="https://facebook.com/sajjaademon"
          target="_blank"
          onMouseEnter={() => handleMouseEnter('facebook')}
          onMouseLeave={() => handleMouseLeave('facebook')}
        /> */}
      </div>
    </footer>
  );
};

export default Footer;
