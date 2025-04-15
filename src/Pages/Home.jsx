import React from "react";

export default function Home() {
    return (
        <section className="home">
            <h1>ALVARO PLACIDO</h1>
            <h2>SOFTWARE DEVELOPER</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quasi incidunt, veritatis natus sapiente quo recusandae ipsa rem in saepe sequi ipsum laborum distinctio neque totam voluptatum esse earum numquam.
            Ipsum, nihil veritatis voluptates eligendi atque obcaecati at. Deleniti quasi impedit hic qui asperiores minus tempora placeat itaque molestias doloremque, iste facilis voluptatum molestiae ea debitis commodi, unde repellendus. Laboriosam!</p>
            <button className="action-btn" onClick={() => window.location.href = "mailto:placido.alvaro03@gmail.com"}>Get in Touch</button>
        </section>
    )
}