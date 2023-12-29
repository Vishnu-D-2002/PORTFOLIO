import React from 'react';
import './Projects.css';

const Projects = () => {

  const projects = [
    {
      "title": "Resume Builder",
      "description": "Create and customize professional resumes effortlessly with a feature-rich resume builder. Tailor your resume to stand out with various templates and styling options. Powered by React, Redux, and Node.js.",
      "toolsUsed": ["React", "Redux", "Node.js"],
      "image": "https://i.postimg.cc/GmDVBW0B/resume.png",
      "sourceCode": "https://github.com/Vishnu-D-2002/Dynamic_Portfolio_-_Export_PDF-FE-",
      "liveDemo": "https://main--splendid-cat-8425a0.netlify.app/"
    },
    {
      "title": "URL Shortener",
      "description": "Shorten and share long URLs with ease, and gain insights into link performance through analytics. The URL shortener is built using Express, MongoDB, and Node.js to provide a robust and scalable solution.",
      "toolsUsed": ["Express", "MongoDB", "Node.js"],
      "image": "https://i.postimg.cc/SRWVQhYq/url.png",
      "sourceCode": "https://github.com/Vishnu-D-2002/URL-Short-FE",
      "liveDemo": "https://main--spiffy-medovik-29bd79.netlify.app/"
    },
    {
      "title": "Login Authentication",
      "description": "Enhance your applications with secure user authentication and authorization features. This project utilizes Firebase Authentication for seamless and reliable user management, integrated with React and Node.js.",
      "toolsUsed": ["Firebase Authentication", "React", "Node.js"],
      "image": "https://i.postimg.cc/JnXGS7Sr/login.png",
      "sourceCode": "https://github.com/Vishnu-D-2002/PWD_RST_FE",
      "liveDemo": "https://main--deft-fudge-828488.netlify.app/"
    },
    {
      "title": "Rest Countries Weather",
      "description": "Discover detailed information about countries and regions around the world. This interactive explorer, developed with React and powered by the REST Countries API, allows users to explore diverse geographical and cultural data.",
      "toolsUsed": ["React", "REST Countries API"],
      "image": "https://i.postimg.cc/W1Wv640f/rest.png",
      "sourceCode": "https://github.com/Vishnu-D-2002/task/tree/main/task-11",
      "liveDemo": "https://main--enchanting-swan-189083.netlify.app/task-11/weather_display.html"
    },
    {
      "title": "Tic Tac Toe Game",
      "description": "Play the classic Tic Tac Toe game with a simple and intuitive user interface. Enjoy a two-player game with alternating turns and responsive design.",
      "toolsUsed": ["React"],
      "image": "https://i.postimg.cc/Y9PTLMSW/xox.png",
      "sourceCode": "https://github.com/Vishnu-D-2002/Tic-Tac-Toe",
      "liveDemo": "https://main--clinquant-jalebi-bd038c.netlify.app/"
    },
    {
      "title": "Dictionary App",
      "description": "Expand your vocabulary with a comprehensive Dictionary App. Look up word meanings and definitions effortlessly. Developed using React and integrated with the Merriam-Webster API for accurate and rich word data.",
      "toolsUsed": ["React", "Merriam-Webster API"],
      "image": "https://i.postimg.cc/NF1Bk5SX/dictionary.png",
      "sourceCode": " https://github.com/Vishnu-D-2002/task/tree/main/task-12/thirukkural",
      "liveDemo": " https://main--enchanting-swan-189083.netlify.app/task-12/thirukkural/"
    },
    {
      "title": "Weather App",
      "description": "Stay informed about real-time weather conditions worldwide. The Weather App, powered by React and the OpenWeatherMap API, provides accurate weather data and an intuitive user interface for easy exploration.",
      "toolsUsed": ["React", "OpenWeatherMap API"],
      "image": "https://i.postimg.cc/9M2D5H2y/weather.png",
      "sourceCode": "https://github.com/Vishnu-D-2002/task/tree/main/task-12/weather",
      "liveDemo": "https://main--enchanting-swan-189083.netlify.app/task-12/weather/"
    },
    {
      "title": "My Todo App",
      "description": "Efficiently manage your tasks with a user-friendly to-do list application. Built using React and leveraging LocalStorage for data persistence, this app offers a seamless and organized task management experience.",
      "toolsUsed": ["React", "LocalStorage"],
      "image": "https://i.postimg.cc/MGFYYFLC/Screenshot-2023-12-29-14-34-45-986-com-android-chrome-edit.jpg",
      "sourceCode": "https://github.com/Vishnu-D-2002/Todo-list",
      "liveDemo": "https://main--funny-stardust-9d67bf.netlify.app/"
    },
    {
      "title": "Holiday Explorer",
      "description": "Explore holidays and celebrations around the world with the Holiday Explorer app. Discover festive traditions, dates, and customs from different countries. Developed using React and integrated with the Holiday API for up-to-date and diverse holiday data.",
      "toolsUsed": ["React", "Holiday API"],
      "image": "https://i.postimg.cc/bNx1sgCy/holiday.png",
      "sourceCode": "https://github.com/Vishnu-D-2002/task/tree/main/task-12/holiday",
      "liveDemo": "https://main--enchanting-swan-189083.netlify.app/task-12/holiday/"
    },
    {
      "title": "Blogs Platform",
      "description": "Create, publish, and share engaging blog posts within a vibrant community. This platform, built with Next.js, MongoDB, and Node.js, provides a feature-rich environment for both bloggers and readers.",
      "toolsUsed": ["Next.js", "MongoDB", "Node.js"],
      "image": "https://i.postimg.cc/WbWMPzhj/blog.png",
      "sourceCode": "https://github.com/Vishnu-D-2002/React-Routes",
      "liveDemo": "https://main--tangerine-basbousa-9eb6af.netlify.app/"
    },
    {
      "title": "Price Card Generator",
      "description": "Effortlessly create stylish and customizable price cards for your products or services. This generator, developed using HTML, CSS, and JavaScript, allows for real-time preview and customization.",
      "toolsUsed": ["HTML", "CSS", "JavaScript"],
      "image": "https://i.postimg.cc/g08pWwcT/price.png",
      "sourceCode": " https://github.com/Vishnu-D-2002/UseContext/tree/Redux",
      "liveDemo": "https://redux--nimble-otter-36e04e.netlify.app/"
    },
    {
      "title": "Shopping Cart",
      "description": "Build a robust online shopping cart for your business. This full-featured cart, developed with React, Node.js, Express, and MongoDB, offers seamless product management, order processing, and user-friendly interactions.",
      "toolsUsed": ["React", "Node.js", "Express", "MongoDB"],
      "image": "https://i.postimg.cc/X7CQx9sm/shop.png",
      "sourceCode": "https://github.com/Vishnu-D-2002/ShoppingCart",
      "liveDemo": "https://main--soft-cajeta-468930.netlify.app/"
    },
    {
      "title": "Calculator App",
      "description": "Experience the simplicity and power of a feature-rich calculator app. This application, developed with React and JavaScript, provides both basic and advanced mathematical functions for a versatile user experience.",
      "toolsUsed": ["React", "JavaScript"],
      "image": "https://i.postimg.cc/QCzq8d0F/calci.png",
      "sourceCode": "https://github.com/Vishnu-D-2002/task/tree/main/task-9/Calculator",
      "liveDemo": "https://main--enchanting-swan-189083.netlify.app/task-9/calculator/calculator"
    },
    {
      "title": "CRUD App with Axios",
      "description": "Build a simple CRUD (Create, Read, Update, Delete) application using React and Axios. Perform operations on items with a JSON server backend.",
      "toolsUsed": ["React", "Axios", "JSON Server"],
      "image": "https://i.postimg.cc/Dy9ws3NL/crud.png",
      "sourceCode": "https://github.com/Vishnu-D-2002/Axios-React",
      "liveDemo": "https://main--gregarious-unicorn-e44737.netlify.app/"
    },
    {
      "title": "Hall Booking (Backend)",
      "description": "Efficiently manage bookings and reservations for event halls. This backend system, powered by Node.js, Express, and MongoDB, streamlines the booking process and ensures smooth coordination for events.",
      "toolsUsed": ["Node.js", "Express", "MongoDB"],
      "image": "https://i.postimg.cc/RCLW5b1K/hall.jpg",
      "sourceCode": "https://github.com/Vishnu-D-2002/nodejs-filesystem/tree/hall-booking",
      "liveDemo": "https://hall-bookings-2kg2.onrender.com/"
    }
  ];

  return (
    <section id='projects'>
      <h1 id='project-title'>Projects</h1>
      <div className="containerProject">
        {projects.map((project, index) => (
          <div className="cardProject" key={index}>
            <div className="BoxProject">
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
              />
            </div>
            <div className="detailsProject">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div>
                <h3>
                  <strong>Tools Used:</strong>
                </h3>{' '}
                {project.toolsUsed.join(', ')}
              </div>
              <div className="buttons">
                <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className='btn1'>
                  Source Code
                </a>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className='btn1'>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;