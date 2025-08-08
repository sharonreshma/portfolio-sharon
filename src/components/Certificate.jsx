import React from 'react';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9', // Pastel pink
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '2.5rem',
    color: '#e1bee7', // Pastel purple
    textAlign: 'center',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    color: '#333',
    fontSize: '1rem',
    lineHeight: '1.8',
  },
  item: {
    marginBottom: '15px',
  },
  link: {
    color: '#F8B2CC',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#F8B2CC',
  },
};

const certifications = [
  {
    title: 'Microsoft Skill Build Challenge 2024',
    date: '21st June 2024',
    description: 'Completed a challenge focusing on modern technology skills and practical problem-solving.',
    certificateLink: 'https://www.linkedin.com/posts/sharon-reshma-bb9930256_msbuildchallenge2024-techgrowth-skillsunlocked-activity-7246006154311450625-fpnT?utm_source=share&utm_medium=member_android',
  },
  {
    title: 'AIGPT - CHATGPT WORKSHOP, IIT MADRAS',
    date: '30 & 31st March 2024',
    description: 'Participated in an AI and GPT Workshop, exploring advanced AI models and their real-world applications.',
    certificateLink: 'https://example.com/neo-codeathon-certificate',
  },
  {
    title: 'Cloud Computing NPTEL',
    date: 'Jan 2024 - April 2024',
    description: '"Completed NPTEL certification on Cloud Computing from IIT Kharagpur, gaining insights into cloud architecture, services, and deployment models',
    certificateLink: 'https://www.linkedin.com/posts/sharon-reshma-bb9930256_cloudcomputing-nptel-elitesilver-activity-7195768806193995776-p7kb?utm_source=share&utm_medium=member_android',
  },
  {
    title: 'Service Now Micro Certification',
    date: '12th July 2024',
    description: 'Earned a Micro-Certification in ServiceNow, gaining foundational knowledge in platform functionalities and workflows.',
    certificateLink: 'https://drive.google.com/file/d/11RIc5kUAWy7oaWKfcAzR2uscDp7DZd5l/view',
  },
  {
    title: 'Introduction to CyberSecurity by Cisco',
    date: '23rd Feb 2024',
    description: 'Completed Cisco offered certification Introduction to Cybersecurity course, gaining insights into cyber threats, security principles, and practices.',
    certificateLink: 'https://drive.google.com/file/d/11OdAfRgeM85lsDhDYw7XCmkXZpJj77qr/view',
  },
  {
    title: 'Python Programming',
    date: 'October 2022',
    description: 'Completed the Python Programming course at Ludifu, gaining a solid foundation in Python syntax, data structures, and algorithms, and applying Python to solve real-world programming problems.',
    certificateLink: 'https://www.linkedin.com/posts/sharon-reshma-bb9930256_python-datascience-techjourney-activity-7212725264705835008-4MN_/?utm_source=share&utm_medium=member_android',
  },
  // {
  //   title: 'Introduction to C programming (Coursera))',
  //   date: '13th July 2023',
  //   description: 'Completed Introduction to C Programming on Coursera, gaining foundational knowledge in C, covering concepts like variables, control structures, arrays, and functions to build efficient and optimized programs ',
  //   certificateLink: 'https://drive.google.com/file/d/10WuBKfnKAHR9dB1Rn3tzK_rdWwNNFGps/view',
  // },
  // {
  //   title: 'Accenture Project Management Job Simulation',
  //   date: '26th Feb 2024',
  //   description: 'Completed Accenture Project Management Job Simulation, mastering key project management concepts, stakeholder communication, and task prioritization.',
  //   certificateLink: 'https://drive.google.com/file/d/11JX6IwpQZSmrKrlHKBOxQDY1VYLtHyOp/view',
  // },
  // {
  //   title: 'Computer Vision (Infosys)',
  //   date: '27th May 2024',
  //   description: 'Completed Infosys Computer Vision Program, gaining hands-on experience with image processing and machine learning techniques for real-world applications',
  //   certificateLink: 'https://drive.google.com/file/d/11GJKdjbrrPB0wRBRthIwGy1Ji1P22_uQ/view',
  // },
  {
    title: 'Data Anlytics using Microsoft Excel',
    date: 'October 2022',
    description: 'Completed the Data Analytics using Microsoft Excel from Ludifu course, mastering advanced Excel functions such as PivotTables, data cleaning, and visualization to derive meaningful insights and enhance decision-making processes.',
    certificateLink: 'https://www.linkedin.com/posts/sharon-reshma-bb9930256_microsoftexcel-professionaldevelopment-dataanalysis-activity-7200408195775832064-_t_u/?utm_source=share&utm_medium=member_android',
  },
  {
    title: 'Generative AI for Executives and Business Leaders (IBM)',
    date: '12th June 2024',
    description: 'Completed IBMs Generative AI for Executives and Business Leaders program, exploring AI strategies and applications for transformative business solutions. ',
    certificateLink: 'https://drive.google.com/file/d/119koEkXMyrqCKulReu17qXk3sxdQcJ00/view',
  },
  {
    title: 'AWS Summit India 2024',
    date: '23rd May 2024',
    description: 'Participated in AWS Summit India 2024, gaining insights into cloud innovations, architecture best practices, and industry-leading AWS solutions. ',
    certificateLink: 'https://drive.google.com/file/d/115MV3JOtPVYZ9ny1Qgqvk6LksIsMIyjB/view',
  },
  // {
  //   title: 'Linux: Process and System Resource DevOps Management (Coursera)',
  //   date: '13th July 2023',
  //   description: 'Completed the Linux: Process and System Resource DevOps Management course on Coursera, learning how to manage processes, monitor system resources, and optimize Linux environments for DevOps workflows ',
  //   certificateLink: 'https://drive.google.com/file/d/10j39ag8Gq12DO3rafSa7Q03n8B7Qedjh/view',
  // },
  {
    title: 'Operation Job Simulation(Golsman Sachs)',
    date: '8th Dec 2024',
    description: 'Completed the Operation Job Simulation by Goldman Sachs, enhancing skills in financial operations, problem-solving, and real-world business scenarios',
    certificateLink: 'https://drive.google.com/file/d/113Twa31jfzIMWxYgPQOelEjsJT4rKBYC/view',
  },
  // {
  //   title: 'How Computer Works (University of London)',
  //   date: '14th April 2023',
  //   description: 'Completed How Computer Works by the University of London, gaining foundational knowledge in computer systems, hardware, and software integration',
  //   certificateLink: 'https://drive.google.com/file/d/11-KICNne1gRvqEH8e7RU6ualwuJy2Lcb/view',
  // },
  // {
  //   title: 'Get started with citizen Developer Journey (UiPath)',
  //   date: '26th Jan 2023',
  //   description: '',
  //   certificateLink: 'https://drive.google.com/file/d/11VahvlQNvxMnq-qwBeMhijAaOfjJTw5v/view',
  // },
  // {
  //   title: 'Build PowerBI Visuals and Reports',
  //   date: '26th May 2024',
  //   description: 'Gained certification in Building Power BI Visuals and Reports, demonstrating proficiency in creating interactive data visualizations and insightful reports using Power BI',
  //   certificateLink: 'https://drive.google.com/file/d/11fBbvg_4tAch04ZHNpVcSgE3EJaR4aFC/view',
  // },
  // {
  //   title: 'Microsoft Azure AI Fundamentals: Natural Language',
  //   date: '19th June 2024',
  //   description: 'Obtained Microsoft Azure AI Fundamentals: Natural Language certification showcasing foundational knowledge in natural language processing and AI capabilities within Microsoft Azure.',
  //   certificateLink: 'https://drive.google.com/file/d/11e8azh6kOw7JWdJeOmZABOgqI0hfb5bf/view',
  // },
  
];

const CertificationPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Certifications & Trainings</h1>
      <ul style={styles.list}>
        {certifications.map((cert, index) => (
          <li key={index} style={styles.item}>
            <strong>{cert.title}</strong> ({cert.date}): {cert.description}{' '}
            <a
              href={cert.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
              onMouseOver={(e) => (e.currentTarget.style.color = styles.linkHover.color)}
              onMouseOut={(e) => (e.currentTarget.style.color = styles.link.color)}
            >
              View Certificate
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CertificationPage;
