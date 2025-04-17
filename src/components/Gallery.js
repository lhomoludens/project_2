import React, { useState }  from "react";

export default function Gallery() {
    return(
        <section id="video-gallery" class="gallery-section">
            <article class="container mt-6 has-text-centered">
                <h5 class="title is-centered is-size-4">Video Gallery</h5>
            </article>
            <p class="subtitle is-centered is-size-6 mt-3">Discover Jordan, Our New Travel Destination.</p>
            <div class="video has-ratio is-16by9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/9vN_htf-05w?si=UzxvZU7_4JiqBNGY"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>
    )
}