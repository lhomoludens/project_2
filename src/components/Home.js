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

        <section id="destination" className="destinations-section">
        <div className="container">
          <h3 className="title is-size-4 has-text-centered mb-5">
            Popular Destinations
          </h3>
          <p className="subtitle is-size-6 has-text-centered mb-5">
            Find the best travel spots for your next trip.
          </p>
          <article className="columns mt-5 is-8 is-variable">
            {destinationCards.map((item, index) => (
              <div className="column is-1-tablet is-4-desktop" key={index}>
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={item.image} alt={item.alt} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="subtitle has-text-weight-bold has-text-centered is-size-6 pb-3">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </article>
        </div>
      </section>

      <section id="tours" className="tour-section">
        <div className="container mt-6">
          <h4 className="title is-size-4 has-text-centered mb-5">
            Our Tours
          </h4>
          <p className="subtitle is-size-6 has-text-centered mb-5">
            Check out our amazing travel packages.
          </p>
          <article className="columns mt-5 is-8 is-variable">
            {tourCards.map((item, index) => (
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
  