import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bulma/css/bulma.min.css";

const Footer = ({ links, year }) => {
   
    const [socialLinks, setSocialLinks] = useState(links);

    return (
        <footer className="footer has-background-primary mt-6 py-6">
          <div className="content has-text-centered">
            <h2 className="title has-text-white">Follow us!</h2>
    
            {/* Render from state */}
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="mx-2"
              >
                <i className={`${link.icon} fa-2x has-text-blue`}></i>
              </a>
            ))}
        <p className="mt-4 has-text-white">
          &copy; {year} YCS Travel Agency. All rights reserved.
        </p>
          </div>
        </footer>
      );

};

export default Footer;