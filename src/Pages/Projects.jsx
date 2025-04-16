import React, { useRef } from "react";
import projectsData from "../assets/projects-data";

export default function Projects() {
    const hoverTimeout = useRef(null)
    
    return (
        <section className="projects">
            <h1>Tech Stack</h1>
            <p>Always learning new technologies and leveling up.</p>
            <div className="stack-container">
                <div className="stack">
                    <h2>Frontend</h2>
                    <div className="code-container">
                        <div style={{'--hover-color':'#61DAFB'}}>React JS</div>
                        <div style={{'--hover-color':'#38BDF8'}}>Tailwind CSS</div>
                        <div style={{'--hover-color':'#F7DF1E', '--text-color' : '#000'}}>Javascript</div>
                        <div style={{'--hover-color':'#3178C6'}}>Typescript</div>
                        <div style={{'--hover-color':'#E34F26'}}>HTML</div>
                        <div style={{'--hover-color':'#1572B6'}}>CSS</div>
                    </div>
                </div>

                <div className="stack">
                    <h2>State Management</h2>
                    <div className="code-container">
                        <div style={{'--hover-color':'#764ABC'}}>Redux</div>
                    </div>
                </div>

                <div className="stack">
                    <h2>Build & Deployment</h2>
                    <div className="code-container">
                        <div style={{'--hover-color':'#646CFF'}}>Vite</div>
                        <div style={{'--hover-color':'#00C7B7'}}>Netlify</div>
                    </div>
                </div>

                <div className="stack">
                    <h2>Version Control</h2>
                    <div className="code-container">
                        <div style={{'--hover-color':'#F05032'}}>Git</div>
                    </div>
                </div>
            </div>
            <div className="my-projects">
                <h1>My Projects</h1>
                <p>Here’s a collection of some of the projects I’ve built, blending creativity, functionality, and clean code. Each project has challenged me to learn, problem-solve, and push my skills further — and I’m proud to share them with you.</p>
                <div className="projects-container">
                    
                    {
                    projectsData.map((project,index) => (
                        <a key={index} href={project.link} target="_blank">
                            <div className="card"
                                onMouseEnter={(e) => {
                                    const video = e.currentTarget.querySelector('video')
                                    const img = e.currentTarget.querySelector('img')
                                    if(video) {
                                        hoverTimeout.current = setTimeout(() => {
                                            video.currentTime = 0
                                            video.play()
                                            img.style.display = 'none'
                                        }, 3000)
                                    }
                                }}

                                onMouseLeave={(e) => {
                                    const video = e.currentTarget.querySelector('video')
                                    const img = e.currentTarget.querySelector('img')
                                    if(video) {
                                        clearTimeout(hoverTimeout.current)
                                        video.pause()
                                        img.style.display = 'block'
                                    }
                                }}
                            >
                                <div className="media-container">
                                    <img src={project.thumbnail} className="thumbnail"/>
                                    <video
                                        src={project.video}
                                        autoPlay
                                        muted
                                        playsInline
                                        preload="metadata"
                                        />
                                </div>
                                    <span className="tech-sec">
                                        {project.tech.map((item,index) => (
                                            <img src={item} key={index}/>
                                        ))}
                                    </span>
                                    <h3>{project.name}</h3>
                                        <p>{project.description}</p>
                            </div>
                        </a>
                    ))}

                </div>
            </div>
        </section>
    )
}