import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom"
import { HashLink } from "react-router-hash-link";
import { SunDim, Moon } from "lucide-react";

export default function Header() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark'
    })

    useEffect(() => {
        if(theme) {
            document.documentElement.setAttribute('data-theme', theme)
            localStorage.setItem('theme', theme)
        }
      }, [theme]);
    
      const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
      };
      
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>ABOUT</NavLink>
                            <div className="sublist">
                                <HashLink to='/about#about-me'>About Me</HashLink>
                                <HashLink to='/about#education'>Education</HashLink>
                            </div>
                    </li>
                    <li>
                        <NavLink to='/projects' className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>PROJECTS</NavLink>
                            <div className="sublist">
                                <HashLink to='/projects#tech-stack'>Tech Stack</HashLink>
                                <HashLink to='/projects#my-projects'>Projects</HashLink>
                            </div>
                    </li>
                </ul>
            </nav>
                <button onClick={toggleTheme} className='toggle'>
                    <div className={`slider ${theme === 'dark' ? 'right' : ''}`}>
                        {theme === 'dark' ? <Moon size={25} fill="white"/> : <SunDim size={25}/>}
                    </div>
            </button>
        </header>
    )
}