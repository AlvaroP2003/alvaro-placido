import React from "react";

export default function Home() {
    return (
        <section className="home">
            <h1>ALVARO PLACIDO</h1>
            <h2>SOFTWARE DEVELOPER</h2>
            <h3>"Talk is cheap. Show me the code."
            — Linus Torvalds (Creator of Linux)</h3>
            <button className="action-btn" onClick={() => window.location.href = "mailto:placido.alvaro03@gmail.com"}>Get in Touch</button>
        </section>
    )
}