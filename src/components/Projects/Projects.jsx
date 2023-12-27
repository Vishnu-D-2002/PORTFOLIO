import React from 'react';
import './Projects.css';

const Projects = () => {

  const projects=[
  {
    "title": "Resume Builder",
    "description": "Create and customize professional resumes effortlessly with a feature-rich resume builder. Tailor your resume to stand out with various templates and styling options. Powered by React, Redux, and Node.js.",
    "toolsUsed": ["React", "Redux", "Node.js"],
    "image": "URL_TO_IMAGE_1",
    "sourceCode": "URL_TO_SOURCE_CODE_1",
    "liveDemo": "URL_TO_LIVE_DEMO_1"
  },
  {
    "title": "URL Shortener",
    "description": "Shorten and share long URLs with ease, and gain insights into link performance through analytics. The URL shortener is built using Express, MongoDB, and Node.js to provide a robust and scalable solution.",
    "toolsUsed": ["Express", "MongoDB", "Node.js"],
    "image": "URL_TO_IMAGE_2",
    "sourceCode": "URL_TO_SOURCE_CODE_2",
    "liveDemo": "URL_TO_LIVE_DEMO_2"
  },
  {
    "title": "Login Authentication",
    "description": "Enhance your applications with secure user authentication and authorization features. This project utilizes Firebase Authentication for seamless and reliable user management, integrated with React and Node.js.",
    "toolsUsed": ["Firebase Authentication", "React", "Node.js"],
    "image": "URL_TO_IMAGE_3",
    "sourceCode": "URL_TO_SOURCE_CODE_3",
    "liveDemo": "URL_TO_LIVE_DEMO_3"
  },
  {
    "title": "Weather App",
    "description": "Stay informed about real-time weather conditions worldwide. The Weather App, powered by React and the OpenWeatherMap API, provides accurate weather data and an intuitive user interface for easy exploration.",
    "toolsUsed": ["React", "OpenWeatherMap API"],
    "image": "URL_TO_IMAGE_4",
    "sourceCode": "URL_TO_SOURCE_CODE_4",
    "liveDemo": "URL_TO_LIVE_DEMO_4"
  },
  {
    "title": "My Todo App",
    "description": "Efficiently manage your tasks with a user-friendly to-do list application. Built using React and leveraging LocalStorage for data persistence, this app offers a seamless and organized task management experience.",
    "toolsUsed": ["React", "LocalStorage"],
    "image": "URL_TO_IMAGE_5",
    "sourceCode": "URL_TO_SOURCE_CODE_5",
    "liveDemo": "URL_TO_LIVE_DEMO_5"
  },
  {
    "title": "Rest Countries Explorer",
    "description": "Discover detailed information about countries and regions around the world. This interactive explorer, developed with React and powered by the REST Countries API, allows users to explore diverse geographical and cultural data.",
    "toolsUsed": ["React", "REST Countries API"],
    "image": "URL_TO_IMAGE_6",
    "sourceCode": "URL_TO_SOURCE_CODE_6",
    "liveDemo": "URL_TO_LIVE_DEMO_6"
  },
  {
    "title": "Dictionary App",
    "description": "Expand your vocabulary with a comprehensive Dictionary App. Look up word meanings and definitions effortlessly. Developed using React and integrated with the Merriam-Webster API for accurate and rich word data.",
    "toolsUsed": ["React", "Merriam-Webster API"],
    "image": "URL_TO_IMAGE_7",
    "sourceCode": "URL_TO_SOURCE_CODE_7",
    "liveDemo": "URL_TO_LIVE_DEMO_7"
  },
  {
    "title": "Blogs Platform",
    "description": "Create, publish, and share engaging blog posts within a vibrant community. This platform, built with Next.js, MongoDB, and Node.js, provides a feature-rich environment for both bloggers and readers.",
    "toolsUsed": ["Next.js", "MongoDB", "Node.js"],
    "image": "URL_TO_IMAGE_8",
    "sourceCode": "URL_TO_SOURCE_CODE_8",
    "liveDemo": "URL_TO_LIVE_DEMO_8"
  },
  {
    "title": "Price Card Generator",
    "description": "Effortlessly create stylish and customizable price cards for your products or services. This generator, developed using HTML, CSS, and JavaScript, allows for real-time preview and customization.",
    "toolsUsed": ["HTML", "CSS", "JavaScript"],
    "image": "URL_TO_IMAGE_9",
    "sourceCode": "URL_TO_SOURCE_CODE_9",
    "liveDemo": "URL_TO_LIVE_DEMO_9"
  },
  {
    "title": "Shopping Cart",
    "description": "Build a robust online shopping cart for your business. This full-featured cart, developed with React, Node.js, Express, and MongoDB, offers seamless product management, order processing, and user-friendly interactions.",
    "toolsUsed": ["React", "Node.js", "Express", "MongoDB"],
    "image": "URL_TO_IMAGE_10",
    "sourceCode": "URL_TO_SOURCE_CODE_10",
    "liveDemo": "URL_TO_LIVE_DEMO_10"
  },
  {
    "title": "Calculator App",
    "description": "Experience the simplicity and power of a feature-rich calculator app. This application, developed with React and JavaScript, provides both basic and advanced mathematical functions for a versatile user experience.",
    "toolsUsed": ["React", "JavaScript"],
    "image": "URL_TO_IMAGE_11",
    "sourceCode": "URL_TO_SOURCE_CODE_11",
    "liveDemo": "URL_TO_LIVE_DEMO_11"
  },
  {
    "title": "Hall Booking (Backend)",
    "description": "Efficiently manage bookings and reservations for event halls. This backend system, powered by Node.js, Express, and MongoDB, streamlines the booking process and ensures smooth coordination for events.",
    "toolsUsed": ["Node.js", "Express", "MongoDB"],
    "image": "URL_TO_IMAGE_11",
    "sourceCode": "URL_TO_SOURCE_CODE_11",
    "liveDemo": "URL_TO_LIVE_DEMO_11"
  }
]

  return (
    <section id='projects'>
      <h1>Projects</h1>
      <div className="containerProject">
      {projects.map((project, index) => (
        <div className="cardProject" key={index}>
          <div className="BoxProject">
            <img src={`https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`} alt={`Project ${index + 1}`} />
          </div>
          <div className="detailsProject">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div>
              <strong>Tools Used:</strong> {project.toolsUsed.join(", ")}
            </div>
          </div>
        </div>
      ))}
    </div>
     </section>
  );
};

export default Projects;
