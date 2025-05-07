import React from "react";
import { useState, useEffect, useRef } from "react";

const educationStages = [
    { year: '2024 - 2025', title: 'Software Development',place:"Codespace Academy", image: './Images/education_codespace.png'},
    { year: '2023', title: 'Information Technology', place: 'CTU Traning Solutions', image: './Images/education_ctu.png' },
    { year: '2021', title: 'Matric Graduation', place:"Curro Nelspruit",image: './Images/education_curro.jpg' },
  ];

export default function About() {

    // Image Tilt Logic
    const imgRef = useRef(null); // create a reference

    useEffect(() => {
      const img = imgRef.current; // get the element
  
      function rotateElement(event) {
        const x = event.clientX;
        const y = event.clientY;
  
        const middleX = window.innerWidth / 2;
        const middleY = window.innerHeight / 2;
  
        const offsetX = ((x - middleX) / middleX) * 25;
        const offsetY = ((y - middleY) / middleY) * 25;
  
        img.style.setProperty('--rotateX', -1 * offsetY + 'deg');
        img.style.setProperty('--rotateY', offsetX + 'deg');
      }
  
      document.addEventListener('mousemove', rotateElement);
  
      return () => {
        document.removeEventListener('mousemove', rotateElement); // clean up when component unmounts
      };
    }, []);


 
  
    
    // Timeline Animtion Logic
    const timelineRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            }
        },
        { threshold: .4}
        );

        if (timelineRef.current) observer.observe(timelineRef.current);

        return () => observer.disconnect()
    }, []);

    
    return (
        <section className="about">
           <div className="about-me">
            
                <img src="./Images/about-me.webp" ref={imgRef}/>

                <div className="content">
                    <h1>About Me</h1>
                    <p>I’m a passionate developer blending creativity and functionality to build bold, beautiful, and meaningful digital experiences. I believe great design lives at the intersection of art and logic — and that's where I love to work. Whether it's a simple landing page or a dynamic web app, my mission is to craft work that feels alive, intuitive, and memorable.</p>
                    <h2>Get In Touch</h2>
                    <p>Feel free to reach out on any of my social platforms — my virtual doors are always open.</p>

                    <div className="contact-grid">
                        <a href="mailto:placido.alvaro03@gmail.com" className="cell"><p>Email Me</p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg></a>
                        <a href="https://github.com/AlvaroP2003" className="cell"><p>Github</p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg></a>
                        <a href="https://www.linkedin.com/in/alvaro-placido-226887206/" className="cell"><p>LinkedIn</p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg></a>
                    </div>
                </div>

           </div>

           <div className="education">
                <h1>Education</h1>
                <p>I believe that learning never stops — it’s a continuous journey that shapes who we are and how we create. My education has laid a strong foundation not only in creative and technical skills but also in critical thinking, problem-solving, and the ability to adapt in a fast-changing digital world. Every project I take on is built upon the knowledge I’ve gained and the curiosity that drives me to keep exploring, experimenting, and growing as a developer and creator.</p>
                <div className='timeline-wrapper' ref={timelineRef}>
                    <div className={`timeline-line ${visible ? 'show' : ''}`}/>
                    {educationStages.map((stage, index) => (
                        <div
                        key={index}
                        className={`timeline-item ${visible ? 'show' : ''}`}
                        style={{ animationDelay: `${index * 0.75}s` }}
                        >
                        <img src={stage.image} className="timeline-circle"/>
                            <div className="timeline-content">
                                <div className="content-header">
                                    <h2>{stage.title}</h2>
                                    <h3>{stage.year}</h3>
                                </div>
                                <p>{stage.place}</p>
                            </div>
                        </div>
                    ))}
                    </div>
           </div>
        </section>
    )
}