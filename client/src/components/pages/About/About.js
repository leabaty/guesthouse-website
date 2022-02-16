import React from "react";

import FadeInSection from "../../../utils/fadeIn.js";

function About() {
  return (
    <>
      <div className="page">
        <h1 className="heading heading--medium">A propos</h1>
        <hr className="heading-rule" />

        <FadeInSection>
          <div>Coucou c'est nous</div>
          
        </FadeInSection>
      </div>
    </>
  );
}

export default About;
