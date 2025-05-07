import {React,useState, useEffect} from "react";
import {Outlet}  from "react-router-dom";
import Header from "../Components/Header";

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
           <Header/>
            <Outlet/>
        </>
    )
}