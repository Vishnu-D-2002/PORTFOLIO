import React from 'react';
import './Education.css';

const education = [
  {
    "school": "AVS engineering college",
    "level": "BE",
    "img": "https://i.postimg.cc/bvZgJ1kg/clg.jpg",
    "title": "ELECTRONICS AND COMMUNICATION ENGINEERING",
    "percentage": 87,
    "description": "Completed Bachelor of Engineering in Electronics and Communication Engineering (ECE) with a remarkable 87% from AVS Engineering College."
  },
  {
    "school": "AKV matric hr sec school",
    "level": "HSC",
    "img": "https://i.postimg.cc/D06qvcfx/twelth.jpg",
    "title": "HIGHER SECONDARY",
    "percentage": 84,
    "description": "Achieved an impressive 84% in the Higher Secondary (12th Grade) from AKV Matric HR Secondary School, showcasing strong academic performance."
  },
  {
    "school": "AKV matric hr sec school",
    "level": "SSLC",
    "img": "https://i.postimg.cc/SNb0CxKk/tenth.jpg",
    "title": "SECONDARY SCHOOL",
    "percentage": 96,
    "description": "Secured an outstanding 96% in the Secondary School Leaving Certificate (10th Grade) from AKV Matric HR Secondary School, demonstrating excellence in academics."
  }
];

function Education() {
  return (
    <section id='education'>
      <h2 className='section-title'>STUDIES</h2>
      {
        education.map((data, i) => (
          <div className="card1" key={i}>
            <div>
              <img src={data.img} alt={data.title} />
              <h1 className='educ_title'>{data.level}</h1>
            </div>
            <div className="card__content">
              <p className="card__title">{data.title}</p>
              <p className="card__description">{data.description}</p>
            </div>
          </div>
        ))
      }
    </section>
  );
}

export default Education;
