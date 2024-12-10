import React from 'react';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '850px',
    margin: '50px auto',
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    fontSize: '2.5rem',
    color: '#e1bee7', // Pastel purple
    marginBottom: '20px',
  },
  subHeader: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '40px',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  card: {
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'left',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  blueCard: {
    backgroundColor: '#f9f9f9', // Pastel pink
  },
  yellowCard: {
    backgroundColor: '#f9f9f9', // Pastel yellow
  },
  company: {
    fontSize: '1.5rem',
    color: '#F8B2CC', // Pastel purple
    marginBottom: '10px',
  },
  role: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '10px',
  },
  duration: {
    fontSize: '1rem',
    color: '#999',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1rem',
    color: '#333',
    lineHeight: '1.5',
  },
  buttonContainer: {
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '10px',
  },
  button: {
    padding: '10px 15px',
    fontSize: '1rem',
    color: 'black',
    backgroundColor: '#e0f7fa', // Pastel purple
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#fff9c4', // Slightly darker purple
  },
};

const internships = [
  {
    company: 'Duratech Solutions',
    role: 'NLP Developer Intern',
    duration: 'June 2024 - July 2024',
    description: 'Worked on text classification, grammar analysis and sentiment analysis using Python and NLP libraries like NLTK and spaCy, and contributed to chatbot development.',
    style: styles.blueCard,
    certificateLink: 'https://drive.google.com/file/d/10IhcQv--yajvaMLhkevKGoci-W2rz0FY/view',
    projectLink: 'https://github.com/sharonreshma/Python_NLP_GRAMMAR_RULES',
  },
  {
    company: 'Teachnook',
    role: 'Human Resource Manager',
    duration: 'Dec 2023 -  Jan 2024',
    description: 'Developed and delivered engaging business presentations to showcase data-driven insights from employee engagement surveys, driving actionable recommendations for enhancing workplace culture and performance',
    style: styles.yellowCard,
    certificateLink: 'https://drive.google.com/file/d/10IdO8OBRzhl-do2fnAl5mFEWJ0dIu7cm/view',
    projectLink: 'https://docs.google.com/presentation/d/1LaSWJHRn8euyY54qIwxB8xM66-9ukJNX/edit#slide=id.p1',
  },
];

const InternshipPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Internship Experience</h1>
      <p style={styles.subHeader}>A glimpse into my professional journey and hands-on experience.</p>
      <div style={styles.cardContainer}>
        {internships.map((internship, index) => (
          <div
            key={index}
            style={{ ...styles.card, ...internship.style }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <h2 style={styles.company}>{internship.company}</h2>
            <h3 style={styles.role}>{internship.role}</h3>
            <p style={styles.duration}>{internship.duration}</p>
            <p style={styles.description}>{internship.description}</p>
            <div style={styles.buttonContainer}>
              <a
                href={internship.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.button}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#fff9c4')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#fff9c4')}
              >
                Certificate
              </a>
              <a
                href={internship.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.button}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#fff9c4')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#fff9c4')}
              >
                Project
              </a>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipPage;
