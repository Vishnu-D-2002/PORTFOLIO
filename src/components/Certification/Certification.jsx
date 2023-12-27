// import React from 'react';
// import './Certification.css';

// function Certification() {
//   return (
//     <section id='certificates'>
//       <section className="card-section">
//         <div className="card">
//           <div className="flip-card">
//             <div className="flip-card__container">
//               <div className="card-front">
//                 <div className="card-front__tp card-front__tp--ski">
//                   <svg
//                     version="1.1"
//                     id="Layer_1"
//                     xmlns="http://www.w3.org/2000/svg"
//                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                     x="0px"
//                     y="0px"
//                     viewBox="0 0 60 60"
//                     style={{ enableBackground: 'new 0 0 60 60' }}
//                     xmlSpace="preserve"
//                     className="card-front__icon"
//                   >
//                     <g>
//                       <path d="M49.7,22c-1.1,0-2,0.9-2,2v32.2c0,1.1,0.9,2,2,2s2-0.9,2-2V24C51.7,22.9,50.8,22,49.7,22z" />
//                       <path d="M13,29.5c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3h20.8c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3h20.8c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7
//                                        V7.1h24.8v15.3c0,1.1,0.9,2,2,2s2-0.9,2-2V5.1c0-1.1-0.9-2-2-2H3.7c-1.1,0-2,0.9-2,2v51c0,1.1,0.9,2,2,2s2-0.9,2-2V36.5H13
//                                        c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3H13z" />
//                       <path d="M58,11.9c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c0,0,0-0.1-0.1-0.1c0,0,0,0,0,0
//                                        c0-0.1-0.1-0.1-0.1-0.2c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1-0.1-0.2-0.1
//                                        c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.1,0-0.2-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.2,0c0,0,0,0,0,0
//                                        c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.2,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0-0.1,0.1l-12.6,7.8
//                                        c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.2
//                                        c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0v5.4H22.1
//                                        c-1.1,0-2,0.9-2,2v28.9c0,1.1,0.9,2,2,2s2-0.9,2-2V29.3h17.3v26.9c0,1.1,0.9,2,2,2s2-0.9,2-2V21l8.6-5.3v40.5c0,1.1,0.9,2,2,2
//                                        s2-0.9,2-2V12.1C58,12,58,12,58,11.9z" />
//                       <path d="M28,31L28,31c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S29.1,31,28,31z" />
//                       <path d="M33.5,31L33.5,31c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S34.6,31,33.5,31z" />
//                       <path d="M28,36L28,36c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S29.1,36,28,36z" />
//                       <path d="M33.5,36L33.5,36c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S34.6,36,33.5,36z" />
//                     </g>
//                   </svg>
//                   <h2 className="card-front__heading">Ski trip</h2>
//                   <p className="card-front__text-price">From £199</p>
//                 </div>
//                 <div className="card-front__bt">
//                   <p className="card-front__text-view card-front__text-view--ski">
//                     View me
//                   </p>
//                 </div>
//               </div>
//               <div className="card-back">
//                 <video className="video__container" autoPlay muted loop>
//                   <source
//                     className="video__media"
//                     src="https://player.vimeo.com/external/195913085.sd.mp4?s=7c12f7a83de62a8900fd2ae049297070b9bc8a54&profile_id=164&oauth2_token_id=574477611"
//                     type="video/mp4"
//                   />
//                 </video>
//               </div>
//             </div>
//           </div>
//           <div className="inside-page">
//             <div className="inside-page__container">
//               <h3 className="inside-page__heading inside-page__heading--ski">
//                 For snow lovers
//               </h3>
//               <p className="inside-page__text">
//                 Love snow? Why not take up exciting ski-in sessions and hit the
//                 slope?
//               </p>
//               <a href="#" className="inside-page__btn inside-page__btn--ski">
//                 View deals
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

      
//       <section className="card-section">
//       <div className="card">
//         <div className="flip-card">
//           <div className="flip-card__container">
//             <div className="card-front">
//               <div className="card-front__tp card-front__tp--beach">
//                 <svg
//                   version="1.1"
//                   id="Layer_1"
//                   xmlns="http://www.w3.org/2000/svg"
//                   xmlnsXlink="http://www.w3.org/1999/xlink"
//                   x="0px"
//                   y="0px"
//                   viewBox="0 0 60 60"
//                   style={{ enableBackground: 'new 0 0 60 60' }}
//                   xmlSpace="preserve"
//                   className="card-front__icon"
//                 >
//                   <path d="M57.2,28h-7.4c-0.4-4-2-7.7-4.4-10.6l3.2-3.2c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0l-3.2,3.2c-3-2.4-6.6-4-10.6-4.4V2.8
//                      c0-1.1-0.9-2-2-2s-2,0.9-2,2v7.4c-4,0.4-7.7,2-10.6,4.4l-3.2-3.2c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l3.2,3.2
//                      c-2.4,3-4,6.6-4.4,10.6H2.8c-1.1,0-2,0.9-2,2s0.9,2,2,2h7.4c0.4,4,2,7.7,4.4,10.6l-3.2,3.2c-0.8,0.8-0.8,2,0,2.8
//                      c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6l3.2-3.2c3,2.4,6.6,4,10.6,4.4v7.4c0,1.1,0.9,2,2,2s2-0.9,2-2v-7.4c4-0.4,7.7-2,10.6-4.4
//                      l3.2,3.2c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8l-3.2-3.2c2.4-3,4-6.6,4.4-10.6h7.4c1.1,0,2-0.9,2-2
//                      S58.3,28,57.2,28z M30,45.9c-8.8,0-15.9-7.2-15.9-15.9c0-8.8,7.2-15.9,15.9-15.9c8.8,0,15.9,7.2,15.9,15.9
//                      C45.9,38.8,38.8,45.9,30,45.9z" />
//                 </svg>
//                 <h2 className="card-front__heading">Beach time</h2>
//                 <p className="card-front__text-price">From £229</p>
//               </div>
//               <div className="card-front__bt">
//                 <p className="card-front__text-view card-front__text-view--beach">
//                   View me
//                 </p>
//               </div>
//             </div>
//             <div className="card-back">
//               <video className="video__container" autoPlay muted loop>
//                 <source
//                   className="video__media"
//                   src="https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761"
//                   type="video/mp4"
//                 />
//               </video>
//             </div>
//           </div>
//         </div>

//         <div className="inside-page">
//           <div className="inside-page__container">
//             <h3 className="inside-page__heading inside-page__heading--beach">
//               For sun lovers
//             </h3>
//             <p className="inside-page__text">
//               Relax and get sun-kissed tan in the sea or take up surfing for an adventure!
//             </p>
//             <a href="#" className="inside-page__btn inside-page__btn--beach">
//               View deals
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>

//     </section>
//   );
// }

// export default Certification;
