import React from "react";

import Article from "../../Article";
import { homeObject1, homeObject2, homeObject3 } from "../../../data/homeData";

import "./Home.css";

function Home() {

  // PARALLAX EFFECT (from codepen https://codepen.io/Prachl/pen/jjKzEy)
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
    var parallaxItem = document.querySelector(".parallax");
    // To adjust the speed, change the coords
    var coords = scrolled * 0.4 + "px";
    parallaxItem.style.transform = "translateY(" + coords + ")";
  };

  window.addEventListener("scroll", throttle(parallax, 14));

  return (
    <>
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
