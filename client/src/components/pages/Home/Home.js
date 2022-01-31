import React from "react";

import Article from "../../Article";
import { homeObject1, homeObject2, homeObject3 } from "../../../data/homeData";

import "./Home.css";

import FadeInSection from "../../../utils/fadeIn.js";

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
        <FadeInSection>
          <div className="home__desktop-intro">
            <h1 className="heading">
              Votre maison d’hôtes vous accueille au coeur d’un domaine
              privilégié.
            </h1>
            <p className="article__text">
              Vestibulum congue lacus ut congue rutrum. Maecenas commodo, sem in
              aliquet dapibus, risus risus dignissim tellus, sit amet iaculis
              diam eros in ligula. Proin maximus turpis mollis neque fringilla
              accumsan. Etiam rutrum vel ex nec gravida. Etiam sodales vitae
              diam et pellentesque. Proin vel rhoncus tellus. Aliquam sit amet
              mauris magna. Sed pellentesque leo sit amet nibh suscipit, eu
              fringilla ligula pretium. Praesent metus est, consequat sed
              volutpat sed, fringilla a arcu.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="home__mobile-intro">
            <Article {...homeObject1} />
          </div>
        </FadeInSection>

        <FadeInSection>
          <Article {...homeObject2} />
        </FadeInSection>

        <FadeInSection>
          <Article {...homeObject3} />
        </FadeInSection>
      </main>
    </>
  );
}

export default Home;
