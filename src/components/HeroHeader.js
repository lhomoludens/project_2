import React from 'react';
import 'bulma/css/bulma.min.css'

const HeroHeader = () => {
    return (
        <header className="hero is-small is-primary has-text-centered">
            <section className="hero-body">
                <h1 className="title">Welcome to YCS Travel Agency</h1>
                <p className="subtitle mt-2">Explore the world with us and find your perfect getaway.</p>
                <Link to="/contact" className="button is-light has-text-weight-bold is-rounded">
                    Book Now!
                </Link>
            </section>
        </header>
    );
};

export default HeroHeader;