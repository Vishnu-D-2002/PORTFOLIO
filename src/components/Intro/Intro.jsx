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
      <div id='content'>
        <h1 id='title'>Hi I am VISHNU</h1><br />
        <h1 id='fsd'>FULL STACK DEVELOPER</h1><br />
        <h3></h3>
      </div>
      <div id='end'>
        <img src="/images/vishnu.png" alt="" className='rounded-image' />
      </div>
    </section>
  );
}

export default Intro;
