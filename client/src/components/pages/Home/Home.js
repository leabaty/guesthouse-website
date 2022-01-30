import React from "react";

import Article from "../../Article";
import { homeObject1, homeObject2, homeObject3 } from "../../../data/homeData";

import CoverPicture from "../../../assets/images/1a - house_picture - cropped.jpg";

import "./Home.css";

function Home() {
  // PARALLAX EFFECT
  const throttle = (fn, wait) => {
    var time = Date.now();
    return function () {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  };

  const parallax = () => {
    var scrolled = window.pageYOffset;
    var parallax = document.querySelector(".parallax");
    // You can adjust the 0.4 to change the speed
    var coords = scrolled * 0.4 + "px";
    parallax.style.transform = "translateY(" + coords + ")";
  };

  window.addEventListener("scroll", throttle(parallax, 14));

  return (
    <>
      {/* <div className="home__image-container">
          <img
            className="home__image"
            src={CoverPicture}
            alt="Maison d'hôtes à Bernay-Saint-Martin"
          />
        </div> */}

      <header class="parallax-wrapper">
        <div class="parallax"></div>
      </header>

      <main className="page">
        
        <div className="home__desktop-intro">
          <h1 className="heading">
            Votre maison d’hôtes vous accueille au coeur d’un domaine
            privilégié.
          </h1>
          <p className="article__text">
            Pellentesque vel iaculis eros. Maecenas sed felis id dui suscipit
            tristique eu id risus. Etiam luctus nisi lacus, id mattis sapien
            vestibulum ac.
          </p>
          .
        </div>

        <div className="home__mobile-intro">
          <Article {...homeObject1} />
        </div>

        <div>
          <Article {...homeObject2} />
          <Article {...homeObject3} />
        </div>
      </main>
    </>
  );
}

export default Home;
