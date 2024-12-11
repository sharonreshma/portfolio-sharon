import React from 'react';
import { FaJs, FaReact, FaPython, FaJava, FaDatabase, FaMicrosoft, FaCloud, FaCogs, FaHtml5, FaRobot, FaChartBar,FaCode,FaBullhorn 
    ,FaCheckCircle, FaUsers, FaCalendarAlt,FaLightbulb,FaStar,FaHourglassStart,FaHeadphones,FaCrown,FaServer
 } from 'react-icons/fa';
import { MdOutlineDesignServices,MdStorage } from 'react-icons/md';


const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1100px',
    margin: '50px auto',
    padding: '0px',
    textAlign: 'center',
  },
  header: {
    fontSize: '2rem',
    color: 'Black', // Deep purple
    marginBottom: '30px',
    textTransform: 'uppercase',
  },
  skillSection: {
    marginBottom: '50px',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    color: '#e1bee7', // Pastel purple
    marginBottom: '20px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
  },
  skillCard: {
    width: '100%',
    height: '200px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4CEE8', // Default pastel pink
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
    cursor: 'pointer',
  },
  skillName: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#4A4E69',
    marginBottom: '10px',
  },
  skillDescription: {
    fontSize: '0.9rem',
    color: '#555',
    textAlign: 'center',
    padding: '0 10px',
  },
  skillIcon: {
    fontSize: '2.5rem',
    color: '#4A4E69',
    marginBottom: '10px',
  },
};

const SkillsPage = () => {
    const technicalSkills = [
        { name: 'Java', description: 'Proficient in Java for building scalable, object-oriented applications.', icon: <FaJava /> },
        { name: 'DSA & DAA', description: 'Experienced in algorithms and data structures to optimize problem-solving efficiency.', icon: <FaCode /> },
        { name: 'React', description: 'Skilled in React for building dynamic, responsive user interfaces.', icon: <FaReact /> },
        { name: 'MySQL', description: 'Experienced in MySQL for efficient data storage and management.', icon: <FaDatabase /> },
        { name: 'MongoDB', description: 'Proficient in MongoDB for handling NoSQL database management with flexibility.', icon: <MdStorage /> },
        { name: 'HTML & CSS', description: 'Strong foundation in HTML5 and CSS3 for creating well-structured, styled web pages.', icon: <FaHtml5 /> },
        { name: 'JavaScript', description: 'Advanced skills in JavaScript for building dynamic, interactive web applications.', icon: <FaJs /> },
        { name: 'SpringBoot', description: 'Experienced in using SpringBoot for building robust enterprise-level applications.', icon: <FaCogs /> },
        { name: 'Python', description: 'Proficient in Python for data analysis, AI, and web development.', icon: <FaPython /> },
        { name: 'Power BI', description: 'Skilled in Power BI for creating data-driven, interactive reports and dashboards.', icon: <FaChartBar /> },
        { name: 'C++', description: 'Strong command over C++ for high-performance application development.', icon: <FaCode /> },
        { name: 'AI', description: 'Experienced in applying AI technologies for automation and intelligent problem-solving.', icon: <FaRobot /> },
        { name: 'Cloud Computing (AWS)', description: 'Proficient in AWS for deploying scalable and reliable cloud applications.', icon: <FaCloud /> },
        { name: 'REST API', description: 'Skilled in designing and integrating RESTful APIs for seamless system communication.', icon: <FaServer /> },
        { name: 'Microsoft 365', description: 'Proficient in using Microsoft 365 for productivity and collaborative work environments.', icon: <FaMicrosoft /> },
    ];
    
    const softSkills = [
        { name: 'Communication', description: 'Strong communicator, adept at delivering clear and impactful messages.', icon: <FaBullhorn /> },
        { name: 'Leadership', description: 'Effective leader with experience guiding teams towards achieving common goals.', icon: <FaCrown /> },
        { name: 'Decision Making', description: 'Experienced in making informed decisions that drive success and innovation.', icon: <FaCheckCircle /> },
        { name: 'Team Management', description: 'Skilled in managing teams, delegating tasks, and ensuring productivity.', icon: <FaUsers /> },
        { name: 'Event Organizing & Planning', description: 'Experienced in planning and executing events with efficiency and attention to detail.', icon: <FaCalendarAlt /> },
        { name: 'Problem Solving', description: 'Strong problem-solver, adept at finding creative and effective solutions to complex challenges.', icon: <MdOutlineDesignServices /> },
        { name: 'Creativity', description: 'Creative thinker, skilled in developing innovative ideas and solutions.', icon: <FaLightbulb /> },
        { name: 'Confidence', description: 'Confident professional, able to make decisions and take initiative with conviction.', icon: <FaStar/> },
        { name: 'Time Management', description: 'Excellent at managing time, prioritizing tasks to meet deadlines and optimize productivity.', icon: <FaHourglassStart /> },
        { name: 'Listening', description: 'Active listener, ensuring clear understanding and fostering strong collaboration.', icon: <FaHeadphones /> },
    ];
    

  const colors = ['#F4CEE8', '#A9DEF9', '#FFF9C4', '#D4F4DD']; // Pastel pink, blue, yellow, green

  const renderSkillCards = (skills) => {
    return skills.map((skill, index) => (
      <div
        key={index}
        style={{
          ...styles.skillCard,
          backgroundColor: colors[index % colors.length],
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <div style={styles.skillIcon}>{skill.icon}</div>
        <div style={styles.skillName}>{skill.name}</div>
        <div style={styles.skillDescription}>{skill.description}</div>
      </div>
    ));
  };

  return (
    <div style={styles.container}>
       
     <section id="skills" >
       
      </section>
      <h6 style={styles.header}>SKILLS</h6>

      <div style={styles.skillSection}>
        <h2 style={styles.sectionTitle}>Technical Skills</h2>
        <div style={styles.gridContainer}>{renderSkillCards(technicalSkills)}</div>
      </div>

      <div style={styles.skillSection}>
        <h2 style={styles.sectionTitle}>Soft Skills</h2>
        <div style={styles.gridContainer}>{renderSkillCards(softSkills)}</div>
      </div>
    </div>
  );
};

export default SkillsPage;
