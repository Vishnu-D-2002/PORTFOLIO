import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Certification from './components/Certification/Certification'
import Contact from './components/Contact/Contact'
import About from './components/About/About'

function App() {
  const projects = [
    {
      title: "Real-Time Chat Application",
      description:
        "Build a real-time chat application using Socket.IO for instant messaging. Users can create accounts, join chat rooms, and send messages to other users in real-time.",
      toolsUsed: ["Node.js", "Express", "Socket.IO", "MongoDB", "React"],
      image: "https://i.postimg.cc/y8W60Q2W/Screenshot-2024-03-15-225831.png",
      sourceCode: "https://github.com/Vishnu-D-2002/Chat-App-FE",
      liveDemo: "https://chat-in-app.netlify.app/chat",
      type: "fullstack",
    },
    {
      title: "Resume Builder",
      description:
        "Create and customize professional resumes effortlessly with a feature-rich resume builder. Tailor your resume to stand out with various templates and styling options. Powered by React, Redux, MongoDB and Node.js.",
      toolsUsed: ["React", "Redux", "MongoDB", "Node.js"],
      image: "https://i.postimg.cc/GmDVBW0B/resume.png",
      sourceCode:
        "https://github.com/Vishnu-D-2002/Dynamic_Portfolio_-_Export_PDF-FE-",
      liveDemo: "https://main--splendid-cat-8425a0.netlify.app/",
      type: "fullstack",
    },
    {
      title: "CRM (Customer Relationship Management) System",
      description:
        "Create a CRM system to manage customer interactions, sales, leads, and customer data. Implement features such as customer profiles, task tracking, and email integration.",
      toolsUsed: ["Node.js", "Express", "MongoDB", "React"],
      image: "https://i.postimg.cc/Kjc8211s/crm.png",
      sourceCode: "https://github.com/Vishnu-D-2002/CRM-FE",
      liveDemo: "https://customer-relationship.netlify.app/",
      type: "fullstack",
    },
    {
      title: "Notes Application",
      description:
        "Develop a notes application where users can create, edit, and delete notes. Implement user authentication to allow users to securely manage their notes.",
      toolsUsed: ["Node.js", "Express", "MongoDB", "React"],
      image: "https://i.postimg.cc/mk9wL9YS/notes.png",
      sourceCode: "https://github.com/Vishnu-D-2002/Todo-list/tree/context",
      liveDemo: "https://notes-take-app.netlify.app/",
      type: "fullstack",
    },
    {
      title: "Rest Countries Weather",
      description:
        "Discover detailed information about countries and regions around the world. This interactive explorer, developed with DOM , Node.js and powered by the REST Countries API, allows users to explore diverse geographical and cultural data.",
      toolsUsed: ["DOM", "Node.js", "REST Countries API"],
      image: "https://i.postimg.cc/W1Wv640f/rest.png",
      sourceCode: "https://github.com/Vishnu-D-2002/task/tree/main/task-11",
      liveDemo:
        "https://main--enchanting-swan-189083.netlify.app/task-11/weather_display.html",
      type: "miniproject",
      type: "miniproject",
    },
    {
      title: "Tic Tac Toe Game",
      description:
        "Play the classic Tic Tac Toe game with a simple and intuitive user interface. Enjoy a two-player game with alternating turns and responsive design.",
      toolsUsed: ["React"],
      image: "https://i.postimg.cc/Y9PTLMSW/xox.png",
      sourceCode: "https://github.com/Vishnu-D-2002/Tic-Tac-Toe",
      liveDemo: "https://main--clinquant-jalebi-bd038c.netlify.app/",
      type: "miniproject",
    },
    {
      title: "Dictionary App",
      description:
        "Expand your vocabulary with a comprehensive Dictionary App. Look up word meanings and definitions effortlessly. Developed using DOM, Node.js and integrated with the Dictionary API for accurate and rich word data.",
      toolsUsed: ["DOM", "Node.js", "Dictionary API"],
      image: "https://i.postimg.cc/NF1Bk5SX/dictionary.png",
      sourceCode:
        " https://github.com/Vishnu-D-2002/task/tree/main/task-12/thirukkural",
      liveDemo:
        " https://main--enchanting-swan-189083.netlify.app/task-12/thirukkural/",
      type: "miniproject",
    },
    {
      title: "Snake Game",
      description:
        "Enjoy the classic Snake game experience within your browser. Control the snake to eat food and grow longer, but be careful not to run into walls or yourself! Built using React, it offers a simple yet engaging gameplay for all ages.",
      toolsUsed: ["Node.js", "HTML", "CSS", "DOM"],
      image: "https://i.postimg.cc/Zn6XXw93/snake.png",
      sourceCode: "https://github.com/Vishnu-D-2002/Snake-Game-React",
      liveDemo: "https://creamy-snake-react.netlify.app/",
      type: "miniproject",
    },
    {
      title: "Weather App",
      description:
        "Stay informed about real-time weather conditions worldwide. The Weather App, powered by React and the OpenWeatherMap API, provides accurate weather data and an intuitive user interface for easy exploration.",
      toolsUsed: ["DOM", "Node.js", "OpenWeatherMap API"],
      image: "https://i.postimg.cc/9M2D5H2y/weather.png",
      sourceCode:
        "https://github.com/Vishnu-D-2002/task/tree/main/task-12/weather",
      liveDemo:
        "https://main--enchanting-swan-189083.netlify.app/task-12/weather/",
      type: "miniproject",
    },
    {
      title: "My Todo App",
      description:
        "Efficiently manage your tasks with a user-friendly to-do list application. Built using React , Bootstrap and useStates for data persistence, this app offers a seamless and organized task management experience.",
      toolsUsed: ["React", "Bootstrap", "useStates"],
      image: "https://i.postimg.cc/HsVpZ9LF/todos.png",
      sourceCode: "https://github.com/Vishnu-D-2002/Todo-list",
      liveDemo: "https://main--funny-stardust-9d67bf.netlify.app/",
      type: "miniproject",
    },
    {
      title: "Holiday Explorer",
      description:
        "Explore holidays and celebrations around the world with the Holiday Explorer app. Discover festive traditions, dates, and customs from different countries. Developed using DOM , Node.js and integrated with the Holiday API for up-to-date and diverse holiday data.",
      toolsUsed: ["DOM", "Node.js", "Holiday API"],
      image: "https://i.postimg.cc/bNx1sgCy/holiday.png",
      sourceCode:
        "https://github.com/Vishnu-D-2002/task/tree/main/task-12/holiday",
      liveDemo:
        "https://main--enchanting-swan-189083.netlify.app/task-12/holiday/",
      type: "miniproject",
    },
    {
      title: "Blogs Platform",
      description:
        "Create, publish, and share engaging blog posts within a vibrant community. This platform, built with React, Bootstrap, and Node.js, provides a feature-rich environment for both bloggers and readers.",
      toolsUsed: ["React", "Bootstrap", "Node.js"],
      image: "https://i.postimg.cc/WbWMPzhj/blog.png",
      sourceCode: "https://github.com/Vishnu-D-2002/React-Routes",
      liveDemo: "https://main--tangerine-basbousa-9eb6af.netlify.app/",
      type: "miniproject",
    },
    {
      title: "Price Card Generator",
      description:
        "Effortlessly create stylish and customizable price cards for your products or services. This generator, developed using React, Redux, and Node.js, allows for real-time preview and customization.",
      toolsUsed: ["React", "Redux", "Node.js"],
      image: "https://i.postimg.cc/g08pWwcT/price.png",
      sourceCode: " https://github.com/Vishnu-D-2002/UseContext/tree/Redux",
      liveDemo: "https://redux--nimble-otter-36e04e.netlify.app/",
      type: "miniproject",
    },
    {
      title: "Shopping Cart",
      description:
        "Build a robust online shopping cart for your business. This full-featured cart, developed with React, Node.js and Bootstrap offers seamless product management, order processing, and user-friendly interactions.",
      toolsUsed: ["React", "Node.js", "Bootstrap"],
      image: "https://i.postimg.cc/X7CQx9sm/shop.png",
      sourceCode: "https://github.com/Vishnu-D-2002/ShoppingCart",
      liveDemo: "https://main--soft-cajeta-468930.netlify.app/",
      type: "miniproject",
    },
    {
      title: "Calculator App",
      description:
        "Experience the simplicity and power of a feature-rich calculator app. This application, developed with DOM and JavaScript, provides both basic and advanced mathematical functions for a versatile user experience.",
      toolsUsed: ["DOM", "HTML", "CSS", "JavaScript"],
      image: "https://i.postimg.cc/QCzq8d0F/calci.png",
      sourceCode:
        "https://github.com/Vishnu-D-2002/task/tree/main/task-9/Calculator",
      liveDemo:
        "https://main--enchanting-swan-189083.netlify.app/task-9/calculator/calculator",
      type: "miniproject",
    },
    {
      title: "CRUD App with Axios",
      description:
        "Build a simple CRUD (Create, Read, Update, Delete) application using React and Axios. Perform operations on items with a Reacr Router backend.",
      toolsUsed: ["React", "Axios", "React Router"],
      image: "https://i.postimg.cc/Dy9ws3NL/crud.png",
      sourceCode: "https://github.com/Vishnu-D-2002/Axios-React",
      liveDemo: "https://main--gregarious-unicorn-e44737.netlify.app/",
      type: "miniproject",
    },
  ];

  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Projects projects={ projects } />
      <Skills />
      <Education />
      <Certification />
      <Contact />
    </div>
  )
}

export default App



// otherprojects
 // {
    //   "title": "URL Shortener",
    //   "description": "Shorten and share long URLs with ease, and gain insights into link performance through analytics. The URL shortener is built using React, Express, MongoDB, and Node.js to provide a robust and scalable solution.",
    //   "toolsUsed": ["React", "Express", "MongoDB", "Node.js"],
    //   "image": "https://i.postimg.cc/SRWVQhYq/url.png",
    //   "sourceCode": "https://github.com/Vishnu-D-2002/URL-Short-FE",
    //   "liveDemo": "https://main--spiffy-medovik-29bd79.netlify.app/"
    // },
    // {
    //   "title": "Login Authentication",
    //   "description": "Enhance your applications with secure user authentication and authorization features. This project utilizes Axios for seamless and reliable user management, integrated with React and Node.js.",
    //   "toolsUsed": ["Axios", "React", "Node.js"],
    //   "image": "https://i.postimg.cc/JnXGS7Sr/login.png",
    //   "sourceCode": "https://github.com/Vishnu-D-2002/PWD_RST_FE",
    //   "liveDemo": "https://main--deft-fudge-828488.netlify.app/"
    // },