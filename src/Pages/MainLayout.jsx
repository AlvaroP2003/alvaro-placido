import {React,useState, useEffect} from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function MainLayout() {
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
        <>
            <header>
                <nav>
                    <ul>
                        <NavLink to='/' className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>HOME</NavLink>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>ABOUT</NavLink>
                        <NavLink to='/projects' className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>PROJECTS</NavLink>
                    </ul>
                </nav>
                <button onClick={toggleTheme} className='toggle'>
                <div className={`slider ${theme === 'dark' ? 'right' : ''}`}></div>
                </button>
            </header>
            <Outlet/>
        </>
    )
}