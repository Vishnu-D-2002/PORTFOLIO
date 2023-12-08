import React, { useEffect } from 'react';
import './Intro.css';

function Intro() {
  useEffect(() => {
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

    animateTitle('title');
    animateTitle('fsd');
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
