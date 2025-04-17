import React, { useState } from 'react';
import 'bulma/css/bulma.min.css'

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className="navbar has-background-dark has-text-centered" role="navigation" aria-label="main navigation">
            <section className="container">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <strong>LOGO</strong>
                    </Link>
            </section>
        </nav>
    );
};