import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";

const educationStages = [
    { year: '2024 - 2025', title: 'Software Development',place:"Codespace Academy", image: './Images/education_codespace.png'},
    { year: '2023', title: 'Information Technology', place: 'CTU Traning Solutions', image: './Images/education_ctu.png' },
    { year: '2021', title: 'Matric Graduation', place:"Curro Nelspruit",image: './Images/education_curro.jpg' },
  ];

export default function About() {
    const [tiltStyle, setTiltStyle] = useState({});

    const handleMouseMove = (e) => {
        const image = e.target;
        const { width, height, left, top } = image.getBoundingClientRect();
        const offsetX = e.clientX - left;
        const offsetY = e.clientY - top;
        const centerX = width / 2;
        const centerY = height / 2;

        const tiltX = ((offsetY - centerY) / centerY) * 15; // Adjust 5 for more/less tilt
        const tiltY = ((offsetX - centerX) / centerX) * -15; // Adjust -5 for more/less tilt

        setTiltStyle({
        transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        });
    };

    const handleMouseLeave = () => {
        setTiltStyle({
        transform: 'rotateX(0deg) rotateY(0deg)',
        });
    };


    //Timeline Logic
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

        return () => observer.disconnect();
    }, []);

    
    return (
        <section className="about">
           <div className="about-me">
                <div
                    className="img-container"
                    alt="Tilt Effect"
                    style={tiltStyle}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src="./Images/WhatsApp Image 2025-04-09 at 12.22.57.jpeg"/>

                </div>

                <div className="content">
                    <h1>About Me</h1>
                    <p>I’m a passionate developer blending creativity and functionality to build bold, beautiful, and meaningful digital experiences. I believe great design lives at the intersection of art and logic — and that's where I love to work. Whether it's a simple landing page or a dynamic web app, my mission is to craft work that feels alive, intuitive, and memorable.</p>
                    <h2>Get In Touch</h2>
                    <p>Feel free to reach out on any of my social platforms — my virtual doors are always open.</p>

                    <div className="contact-grid">
                        <a href="mailto:placido.alvaro03@gmail.com" className="cell">Email Me</a>
                        <a href="https://github.com/AlvaroP2003" className="cell">GitHub</a>
                        <a href="https://www.linkedin.com/in/alvaro-placido-226887206/" className="cell">LinkedIn</a>
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