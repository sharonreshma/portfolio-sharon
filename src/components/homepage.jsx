import React from 'react';
import profileImage from '../assets/profile.jpeg';
const Homepage = () => {
    
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.name}>Sharon Reshma Arulprakash</h1>
        <nav style={styles.nav}>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#projects" style={styles.navLink}>Projects</a>
          <a href="#skills" style={styles.navLink}>Achievements</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.textContainer}>
          <h2 style={styles.heading}>
            Hello there! I'm Sharon, a <span style={styles.highlight}>Full-Stack Web Developer</span> !!
          </h2>
          <p style={styles.paragraph}>
  I am an <span style={styles.highlightPink}>innovation afficionado</span> who enjoys exploring the wonders of <span style={styles.highlightBlue}>AI</span> and diving deep into the realms of <span style={styles.highlightYellow}>Data Science</span>.
</p>
<p style={styles.paragraph}>
  Currently an <span style={styles.highlightBlue}>Information Technology (IT)</span> student at <span style={styles.highlightPink}>SKCT</span>, and I've been absolutely loving every twist and turn of my coding journey so far.
</p>
<p style={styles.paragraph}>
  Through these experiences, I developed a working style that leans towards <span style={styles.highlightYellow}>flexibility</span>, <span style={styles.highlightPink}>clarity</span>, and <span style={styles.highlightBlue}>collaboration</span>.
</p>

          
          <div style={styles.buttonContainer}>
  <a
    href="https://www.linkedin.com/in/sharon-reshma-bb9930256/" // Replace with your LinkedIn URL
    target="_blank"
    rel="noopener noreferrer"
    style={styles.linkButton}
  >
    View LinkedIn
  </a>
  <a
    href="https://github.com/sharonreshma" // Replace with your GitHub URL
    target="_blank"
    rel="noopener noreferrer"
    style={styles.linkButton}
  >
    View GitHub
  </a>
</div>

        </div>
        <img
        
         src={profileImage} // Replace placeholder with imported image
         alt="Profile"
         style={styles.profileImage}
       />
       
      </section>

    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Inter', sans-serif",
    color: '#333',
    padding: '20px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
  },
  name: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '16px',
  },
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '40px',
  },
  textContainer: {
    maxWidth: '60%',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '18px',
    marginBottom: '10px',
    lineHeight: '1.6',
  },
  highlight: {
    backgroundColor: '#e1bee7',
    fontWeight: 'bold',
  },
  
  highlightPink: {
    backgroundColor: '#ffe4e6', // Pastel pink
    fontWeight: 'bold',
    padding: '2px 4px',
    borderRadius: '3px',
  },
  highlightBlue: {
    backgroundColor: '#e0f7fa', // Pastel blue
    fontWeight: 'bold',
    padding: '2px 4px',
    borderRadius: '3px',
  },
  highlightYellow: {
    backgroundColor: '#fff9c4', // Pastel yellow
    fontWeight: 'bold',
    padding: '2px 4px',
    borderRadius: '3px',
  },  
  
  buttonContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    border: '1px solid #333',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#fff',
    color: '#333',
  },
  linkButton: {
    padding: '10px 20px',
    fontSize: '16px',
    border: '1px solid #333',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#fff',
    color: '#333',
    
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
  },
  
  profileImage: {
    width: '500px',
    height: '350px',
    marginLeft: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0 4px 20px rgba(255, 182, 196, 0.7)',
  },
  projects: {
    marginTop: '40px',
  },
  sectionHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

export default Homepage;
