import React from "react";
import 'bulma/css/bulma.min.css';

const Home = ({ homeCards, destinationCards, tourCards }) => {
    return (
      <>
        <section id="home" className="section">
          <div className="container">
            <h2 className="title is-size-4 has-text-centered mb-5">
              Explore the World with Us
            </h2>
            <p className="subtitle is-size-6 has-text-centered mb-5">
              Discover amazing places and plan your next adventure with ease.
            </p>
  
            <article className="columns mt-5 is-8 is-variable">
              {homeCards.map((item, index) => (
                <div className="column is-1-tablet is-4-desktop" key={index}>
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img src={item.image} alt={item.alt} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <p className="title is-size-5 has-text-centered pb-2">
                        {item.title}
                      </p>
                      <div className="buttons is-justify-content-center">
                        <a
                          href="contact.html"
                          className="button is-link is-responsive is-rounded is-outlined"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </article>
          </div>
        </section>
      </>
    );
  };
  
  export default Home;
  