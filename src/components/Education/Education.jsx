import React from 'react';
import './Education.css';

const education = [
  {
    "school": "AVS engineering college",
    "level": "BE (ECE)",
    "img": "https://i.postimg.cc/bvZgJ1kg/clg.jpg",
    "title": "ELECTRONICS AND COMMUNICATION ENGINEERING",
    "percentage": 87,
    "description": "Completed Bachelor of Engineering in Electronics and Communication Engineering (ECE) with a remarkable 87% from AVS Engineering College."
  },
  {
    "school": "AKV matric hr sec school",
    "level": "HSC (XII)",
    "img": "https://i.postimg.cc/qB8KjNjR/school.jpg",
    "title": "HIGHER SECONDARY",
    "percentage": 84,
    "description": "Achieved an impressive 84% in the Higher Secondary (12th Grade) from AKV Matric HR Secondary School, actively participating in debates and science exhibitions for holistic development."
  },
  {
    "school": "AKV matric hr sec school",
    "level": "SSLC (X)",
    "img": "https://i.postimg.cc/SNb0CxKk/tenth.jpg",
    "title": "SECONDARY SCHOOL",
    "percentage": 96,
    "description": "Secured an outstanding 96% in the Secondary School Leaving Certificate (10th Grade) from AKV Matric HR Secondary School, demonstrating excellence not only in academics but also in sports, leadership, and community service."
  }
];

function Education() {
  return (
    <section id='education' className='edu-container'>
      <h2 id='conttitle'>STUDIES</h2>
      <div className="edu-card-container">
        {education.map((data, i) => (
          <div className="edu-card" key={i}>
            <div className="edu-card__image">
              <img src={data.img} alt={data.title} />
              <h1 className='educ-title'>{data.level}</h1>
            </div>
            <div className="edu-card__content">
              <p className="edu-card__title">{data.title}</p>
              <p className="edu-card__description">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
