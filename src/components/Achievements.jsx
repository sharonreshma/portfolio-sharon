import React, { useState } from 'react';
import image1 from '../assets/m.jpeg'; // Replace with your actual image path
import image2 from '../assets/q.jpeg';
import image3 from '../assets/i.jpeg';
import image4 from '../assets/h.jpeg';
import image5 from '../assets/a.jpeg';
import image6 from '../assets/s.jpeg';
import image7 from '../assets/sec.jpeg';
import image8 from '../assets/r.jpeg';
import image9 from '../assets/ict.jpeg';
import image10 from '../assets/t.jpeg';
// Define styles first to avoid access issues
const styles = {
  container: {
    marginTop: '70px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '20px auto',
    textAlign: 'center',
  },
  tabs: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  tabButton: {
    padding: '10px 20px',
    margin: '0 10px',
    border: '2px solid #e1bee7',
    borderRadius: '5px',
    backgroundColor: '#fff',
    color: 'black',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
  activeTab: {
    backgroundColor: '#e1bee7',
    color: 'black',
  },
  achievements: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'left',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '200px',
    borderRadius: '10px',
    marginBottom: '15px',
  },
  highlightYellow: {
    backgroundColor: '#fff9c4', // Pastel yellow
    fontWeight: 'bold',
    padding: '2px 4px',
    borderRadius: '3px',
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
  event: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    color: '#6a4c9c',
  },
  description: {
    fontSize: '1rem',
    marginBottom: '10px',
    color: '#555',
  },
  link: {
    fontSize: '1rem',
    textDecoration: 'none',
    color: '#6a4c9c',
    fontWeight: 'bold',
  },
};

const achievements = {
  technical: [
    {
      id: 1,
      image: image1,
      event: 'IIT BOMBAY FOSSE Mapathon 2023',
      description: (
        <span>
          Recognized at{' '}
          <span style={styles.highlightPink}>'IIT Bombay'</span> as  <span style={styles.highlightBlue}>WINNER</span> for using <span style={styles.highlightYellow}>QGIS and data analysis</span> to tackle <span style={styles.highlightPink}>Urban Planning challenges</span>, <span style={styles.highlightBlue}> mapping raw materials and local market demands</span>. This win highlights my tech skills and passion for impactful collaborations!
        </span>
      ),
      link: 'https://www.linkedin.com/posts/sharon-reshma-bb9930256_fosseemapathon2023-iitbombay-winners-activity-7233025141230727168-3piN?utm_source=share&utm_medium=member_android',
    },
    {
      id: 2,
      image: image2,
      event: 'Q-QUEST 2023',
      description: (
        <span>
          Secured {' '}
          <span style={styles.highlightPink}>3rd position</span> at the <span style={styles.highlightBlue}>24th Annual Conference of Anna University</span>, where I presented my paper on  <span style={styles.highlightYellow}>SDG Goal 6: Clean Water and Sanitation.</span>  By showcasing potential solutions, I highlighted how ensuring access to clean water can drive <span style={styles.highlightPink}>sustainable development.</span>
        </span>
      ),
      link: 'https://www.linkedin.com/posts/sharon-reshma-bb9930256_annauniversity-qquest2023-sdg-activity-7183378554984833024-SuMY/?utm_source=share&utm_medium=member_android',
    },
    {
      id: 3,
      image: image3,
      event: 'IDEATHON 2023',
      description: (
        <span>
        {' '}
          <span style={styles.highlightPink}>Runner Up at IDEATHON 2023 held at SKCT,</span> I leveraged cutting-edge technologies such as <span style={styles.highlightBlue}>real-time tracking, IoT, and 3D modeling</span> to create a system that helps monitor and <span style={styles.highlightYellow}>prevent child trafficking</span> activities along with my team. This experience reinforced my passion for creating<span style={styles.highlightPink}>socially impactful innovations</span>, and reaffirmed my commitment to using technology for the greater good.
        </span>
      ),
      link: 'https://www.linkedin.com/posts/sharon-reshma-bb9930256_ideathon2023-skct-runnerup-activity-7213436032954904576-r_o0/?utm_source=share&utm_medium=member_android',
    },
    {
        id: 4,
        image: image4,
        event: 'HackHERthon',
        description: (
            <span>
            {' '}
              <span style={styles.highlightPink}>Runner-Up at HackHERthon 2023</span> an on-the-spot innovation sprint. The project focused on developing a <span style={styles.highlightBlue}>cost-effective</span> and  <span style={styles.highlightYellow}>efficient method</span>  to purify water at the molecular level, harnessing the power of <span style={styles.highlightPink}>nanotechnology</span> to remove contaminants.
            </span>
          ),
        link: 'https://www.linkedin.com/posts/sharon-reshma-bb9930256_hackathonsuccess-innovation-teamwork-activity-7174025927801159680-npBB/?utm_source=share&utm_medium=member_android',
      },
      {
        id: 5,
        image: image5,
        event: 'AIGPT - CHATGPT WORKSHOP',
        description: (
          <span>
            I had the privilege of attending the {' '}
            <span style={styles.highlightPink}>AIGPT and ChatGPT workshop at IIT Madras </span> as part of SAARANG 2024, where I immersed myself in the world of <span style={styles.highlightBlue}>AI and GPT technologies</span> The workshop provided <span style={styles.highlightYellow}>hands-on experience</span> in developing <span style={styles.highlightPink}>AI models, chatbots, and crafting prompts</span> using advanced tools like <span style={styles.highlightBlue}>Python, LangChain, OpenAI,</span> and <span style={styles.highlightYellow}>OpenAi</span>
          </span>
        ),
        link: 'https://www.linkedin.com/posts/sharon-reshma-bb9930256_iitmadras-saarang24-ibm-activity-7180441561996967938-BrhV/?utm_source=share&utm_medium=member_android',
    },
    {
        id: 6,
        image: image6,
        event: 'SMART INDIA HACKATHON 2023',
        description: (
          <span>
            {' '}
            <span style={styles.highlightPink}> Semi-finalist</span> for the prestigious <span style={styles.highlightBlue}>SIH</span> where we showcased our innovative <span style={styles.highlightYellow}>hardware project, Aflexz</span> This project featured an <span style={styles.highlightPink}>active prosthetic ankle and adaptive bike riding equipment</span> designed specifically for <span style={styles.highlightBlue}>Lower-limb amputees</span> Our solution aimed to <span style={styles.highlightYellow}>improve mobility and quality of life</span> for amputees, combining cutting-edge <span style={styles.highlightPink}>prosthetic technology</span> with practical adaptations to enhance everyday activities like biking.
          </span>
        ),
        link: 'https://www.linkedin.com/posts/sharon-reshma-bb9930256_sih2023-prosthetics-research-activity-7208051948757897216-4Uqp/?utm_source=share&utm_medium=member_android',
    },
  ],
  softSkills: [
    {
      id: 1,
      image: image7,
      event: 'Office Bearer - Secretary of IT Department at SKCT',
      description: (
        <span>
          As the{' '}
          <span style={styles.highlightPink}>Secretary of the IT Department at SKCT </span> for the  2023-2024 term, I play a pivotal role in <span style={styles.highlightBlue}>coordinating and managing </span> a wide array of events and <span style={styles.highlightYellow}>bridge communication </span> within the department. This role also showcases my  <span style={styles.highlightPink}> leadership, organizational, and communication skills</span>,  while giving me the opportunity to work collaboratively with peers and faculty to deliver successful initiatives for the department.
      </span>),
      link: 'https://www.linkedin.com/posts/sharon-reshma-bb9930256_secretary-studentassociation-innovit-activity-7225384724813209600-EXKy/?utm_source=share&utm_medium=member_desktop',
    },
    {
      id: 2,
      image: image8,
      event: 'The Rotary Foundation Chair at Rotaract Club of SKCT',
      description: (
        <span>
          Appointed as the {' '}
          <span style={styles.highlightPink}>Rotary Foundation Chair (TRF) at Rotaract Club of SKCT </span> for the  Rotract International year 2023-2024, I I lead initiatives focused on <span style={styles.highlightBlue}>fundraising, project management, and community service.</span> I was also honored as the <span style={styles.highlightYellow}>Star of Rotamind</span> , recognizing my enthusiasm and impactful participation in driving discussions.</span>
      ),
      link: 'https://www.linkedin.com/posts/sharon-reshma-bb9930256_trf-rotract-racabrskct-activity-7272148700930449409-c02c/?utm_source=share&utm_medium=member_android',
    },
    {
        id: 3,
        image: image9,
        event: 'ICT Youth Talk Regional Finals',
        description: (
            <span>
              As a {' '}
              <span style={styles.highlightPink}>Regional Finalist</span> at <span style={styles.highlightBlue}> ICT Youth Talk 2024 </span> I proudly secured a spot among the  <span style={styles.highlightYellow}>top 10 speaker in Coimbatore.</span> This experience further honed my <span style={styles.highlightPink}> public speaking skills</span>  </span>
          ),
        link: '',
      },
      {
        id: 4,
        image: image10,
        event: 'Toastmasters Journey',
        description: (
            <span>
              As {' '}
              <span style={styles.highlightPink}>Secretary of the Skylark Toastmasters Club </span> and later elected as <span style={styles.highlightBlue}> Vice President </span> I contributed to the club’s growth and success in <span style={styles.highlightYellow}>Muscat, Oman</span> During my tenure, I won several awards, including <span style={styles.highlightPink}>Best Speaker, Best Evaluator, and Best On-the-Spot Speaker</span> These experiences enhanced my <span style={styles.highlightBlue}>leadership, communication, and public speaking skills,</span> empowering me to lead, inspire, and engage effectively.  </span>
          ),
        link: '',
      },
  ],
};

const Achievements = () => {
  
  const [activeTab, setActiveTab] = useState('technical');

  const renderAchievements = (category) => {
    return achievements[category].map((achievement) => (
      <div key={achievement.id} style={styles.card}>
        <img
          src={achievement.image}
          alt={achievement.event}
          style={styles.image}
        />
        <h3 style={styles.event}>{achievement.event}</h3>
        <p style={styles.description}>{achievement.description}</p>
        <a
          href={achievement.link}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Learn More
        </a>
      </div>
    ));
  };

  return (
    
    <div style={styles.container}>
      <section id="achievements" style={styles.projects}>
        <h3 style={styles.sectionHeading}>Achievements</h3>
        <p>My top “I did it!” moments</p>
        {/* Add project details here */}
      </section>
      <div style={styles.tabs}>
        <button
          style={{
            ...styles.tabButton,
            ...(activeTab === 'technical' ? styles.activeTab : {}),
          }}
          onClick={() => setActiveTab('technical')}
        >
          Technical Achievements
        </button>
        <button
          style={{
            ...styles.tabButton,
            ...(activeTab === 'softSkills' ? styles.activeTab : {}),
          }}
          onClick={() => setActiveTab('softSkills')}
        >
          Soft Skills Achievements
        </button>
      </div>
      <div style={styles.achievements}>
        {renderAchievements(activeTab)}
      </div>
    </div>
  );
};

export default Achievements;
