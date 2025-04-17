import React from "react";
import 'bulma/css/bulma.min.css'


const About = () => {
    return (
        <main className="container">
            <h1 className="title has-text-centered is-size-4 mt-5">About Us</h1>

            <section className="content has-text-centered">
                <p>Founded in 2015, YCS Travel Agency is dedicated to helping travelers explore the world with ease and confidence. Our mission is to provide unforgettable travel experiences by offering personalized packages, expert guidance, and seamless trip planning. Whether you're looking for adventure, relaxation, or cultural exploration, we are committed to making your journey exceptional.</p>
            </section>
            <figure className="image is-256x256">
                <img
                    className="is-rounded"
                    src="https://images.unsplash.com/photo-1590650589327-3f67c43ad8a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="About Us"
                />
            </figure>
        </main>
    );
};

export default About;