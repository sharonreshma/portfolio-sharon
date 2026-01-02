import React, { useState } from 'react';

const ProjectPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      title: 'HerCraft',
      description: 'HerCraft is a full stack project and a pioneering e-commerce platform dedicated to advancing the entrepreneurial aspirations of women homemakers by providing a sophisticated marketplace for handcrafted goods. This was a project I developed with an inspiration to help women livelihood and give them a chance to help their business dream come true. It serves as a nexus where skilled women artisans can present and sell their unique creations, ranging from bespoke home decor to artisanal fashion items. This project was developed using a robust tech stack comprising React, MySQL, and Spring Boot, ensuring a seamless and efficient experience for both users as well as the administrators. ',
      color: '#e1bee7', // Pastel Purple
      gitLink: 'https://github.com/sharonreshma/HerCraft_Homemakers_E-commerce_platform',
      
    },
    {
      title: 'Weather-App',
      description: 'This project is a weather application built with React JS and styled using Tailwind CSS. It fetches weather data from the OpenWeatherMap API, providing current weather conditions and forecasts for different locations. The app supports metric and imperial units for temperature display and is designed to be responsive and user-friendly. This was something I really enjoyed building, all the way from connecting time zones to bringing it into reality through this code was really fun :)',
      color: '#F8B2CC', // Pastel Pink
      gitLink: 'https://github.com/sharonreshma/react-weather-app',
  
    },
    {
      title: 'Covid-19 Analysis',
      description: 'Woah, Covid-19 was one tough time we faced and yup we got throught it!! This analysis project delves into various stats of work surrounding the COVID-19 outbreak in India using MapPlotlib.org and Python. By leveraging data science and visual analytics, it examines the impact of best practices and preventive measures implemented across various sectors.',
      color: '#B3E5FC', // Pastel Blue
      gitLink: 'https://github.com/sharonreshma/Covid19_Analysis',
    
    },
    {
      title: 'Amazon Web Scraping',
      description: 'This project is an advanced Python-based web scraping tool for extracting product details from Amazon. Utilizing the requests library for HTTP requests and BeautifulSoup for HTML parsing, it retrieves product titles, prices, ratings, review counts, and availability, and organizes this data into a CSV file for easy analysis and further use. New learning peaked my curiousty turned out quite intriguing!!',
      color: '#F5C16C', // Pastel Yellow
      gitLink: 'https://github.com/sharonreshma/Web-Scraping',
      
    },
    {
      title: 'NLP',
      description: 'Finally complete this has all the key points I learned during my first internnship, used all the main concepts of NLP and turned it into a single app.This Streamlit application integrates spaCy, a leading NLP library, for powerful text processing. Users can tokenize text, visualize part-of-speech tags, perform Named Entity Recognition (NER) to identify entities like persons and organizations, and conduct lemmatization for semantic analysis.',
      color: '#dcedc8', // Pastel Green
      gitLink: 'https://github.com/sharonreshma/NLP_APP',
      
    },
  ];

  return (
    <div style={styles.container}>
       {/* Projects Section */}
       <section id="projects" style={styles.projects}>
        <h3 style={styles.sectionHeading}>Projects</h3>
        <p>A showcase of my standout projects</p>
        {/* Add project details here */}
      </section>
      <div style={styles.tabContainer}>
        {projects.map((project, index) => (
          <button
            key={index}
            style={{
              ...styles.tab,
              boxShadow: activeTab === index ? `0 4px 10px ${project.color}` : 'none',
              backgroundColor: activeTab === index ? project.color : '#fff',
            }}
            onClick={() => setActiveTab(index)}
          >
            {project.title}
          </button>
        ))}
      </div>
      <div style={styles.projectDetails}>
        <h3 style={{ ...styles.projectTitle, color: projects[activeTab].color }}>
          {projects[activeTab].title}
        </h3>
        <p style={styles.projectDescription}>
          {projects[activeTab].description}
        </p>
        <div style={styles.buttonContainer}>
          <a
            href={projects[activeTab].gitLink}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            View GitLink
          </a>
          
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Inter', sans-serif",
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '40px',
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  tab: {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
    fontWeight: 'bold',
  },
  projectDetails: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  projectTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  projectDescription: {
    fontSize: '16px',
    lineHeight: '1.6',
  },
  buttonContainer: {
    marginTop: '20px',
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    border: '1px solid #333',
    borderRadius: '5px',
    textDecoration: 'none',
    backgroundColor: '#fff',
    color: '#333',
    fontWeight: 'bold',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    cursor: 'pointer',
  },
};

export default ProjectPage;
