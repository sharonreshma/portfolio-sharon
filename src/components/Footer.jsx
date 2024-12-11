import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerLinks}>
          <a href="#homepage" style={styles.footerLink}>About</a>
          <a href="#projects" style={styles.footerLink}>Projects</a>
          <a href="#skills" style={styles.footerLink}>Skills</a>
          <a href="#achievements" style={styles.footerLink}>Achievements</a>
          <a href="#contact" style={styles.footerLink}>Contact</a>
        </div>
        <div style={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/sharon-reshma-bb9930256/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
          >
            <FaLinkedin size={24} style={styles.icon} /> {/* LinkedIn Icon */}
            LinkedIn
          </a>
          <a
            href="https://github.com/sharonreshma"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.socialLink}
          >
            <FaGithub size={24} style={styles.icon} /> {/* GitHub Icon */}
            GitHub
          </a>
          <a
            href="mailto:sharonprakash8492@gmail.com"
            style={styles.socialLink} // Use your actual email here
          >
            <FaEnvelope size={24} style={styles.icon} /> {/* Mail Icon */}
            Email
          </a>
        </div>
      </div>
      <p style={styles.footerText}>© 2024 Sharon Reshma Arulprakash. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#000000', // Black background for the footer
    padding: '40px 20px',
    textAlign: 'center',
    marginTop: '60px',
    color: '#fff', // White text for contrast
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1000px',
    margin: '0 auto',
    flexDirection: 'column',
    gap: '20px',
  },
  footerLinks: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  footerLink: {
    color: '#fff', // White color for links
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
    padding: '5px 10px',
    borderRadius: '5px',
  },
  socialLinks: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
  },
  socialLink: {
    color: '#fff', // White color for social links
    fontSize: '1rem',
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '5px', // Add space between icon and text
    transition: 'color 0.3s ease',
    padding: '5px 10px',
    borderRadius: '5px',
  },
  footerText: {
    color: '#fff', // White color for footer text
    fontSize: '0.9rem',
    marginTop: '20px',
  },
  icon: {
    color: '#fff', // White color for icons
    transition: 'color 0.3s ease',
  },
  footerLinkHover: {
    color: '#fff', // Pastel Pink on hover
    backgroundColor: '#f3e5f5', // Light pastel purple on hover
  },
};

export default Footer;
