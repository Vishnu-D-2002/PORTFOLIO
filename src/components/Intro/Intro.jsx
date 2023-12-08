import React, { useEffect } from 'react';
import './Intro.css';

function Intro() {
  const animateTitle = (id) => {
    const title = document.getElementById(id);
    const text = title.innerText;
    title.innerHTML = '';

    text.split('').forEach((letter, index) => {
      setTimeout(() => {
        const span = document.createElement('span');
        span.textContent = letter;
        title.appendChild(span);
      }, index * 300);
    });
  };

  useEffect(() => {
    animateTitle('title');
    animateTitle('fsd');

    const intervalId = setInterval(() => {
      animateTitle('title');
      animateTitle('fsd');
    }, 6000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id='intro'>
      <div id='left-content'>
        <h1 id='title'>Hi I am VISHNU</h1><br />
        <h1 id='fsd'>FULL STACK DEVELOPER</h1>
      </div>
      <div id='right-content'>
        <div id='end'>
          <img src="/images/vishnu.png" alt="" className='rounded-image' />
        </div>
      </div>
    </section>
  );
}

export default Intro;
