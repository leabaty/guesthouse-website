import React from "react";

import FadeInSection from "../../../utils/fadeIn.js";

import profilePic from "../../../assets/images/3-couple-posing.png"
import "./About.css";

function About() {
  return (
    <>
      <div className="page">
        <h1 className="heading heading--medium">A propos</h1>
        <hr className="heading-rule" />

        <FadeInSection>
          <img
            className="about-image"
            src={profilePic}
            alt="eric et sylvie"
          />
          <h1 className="heading heading--small">Bienvenue chez vous !</h1>
          <p className="isolated-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consequat varius nunc ac blandit. Morbi semper, purus sed sagittis
            pretium, dolor quam vestibulum libero, eu blandit nisl massa id
            augue. Phasellus euismod libero quam, sit amet bibendum enim
            volutpat et. Cras ultricies condimentum arcu, quis dapibus nulla
            ullamcorper ac. Nullam sollicitudin venenatis mauris a convallis.
            Maecenas vehicula lorem eu urna rhoncus congue. Etiam pulvinar, nisi
            a pellentesque vestibulum, sapien metus bibendum massa, non aliquam
            nisi massa quis nulla. Nulla tincidunt sodales nisl, et finibus enim
            hendrerit sed. Phasellus tristique a sem in placerat. Morbi et felis
            vel lectus blandit consequat vitae id nulla. Phasellus placerat
            euismod nulla, in sollicitudin ligula tristique quis. Phasellus
            imperdiet ultrices enim, in mollis nisi ultricies sit amet. Mauris
            aliquet nisi eget massa ullamcorper, vitae condimentum eros
            molestie. Aenean id bibendum ante.
          </p>
          <p className="isolated-text">
            Quisque lorem magna, sodales id fringilla eu, faucibus sed mauris.
            Nullam bibendum ultrices est, placerat pharetra nibh lobortis non.
            In sit amet dui ipsum. Praesent ex metus, congue vitae ipsum in,
            efficitur convallis massa. Ut vitae lacinia lectus. Sed vel lectus
            ante. Proin rutrum, ipsum ut semper consectetur, tortor tortor
            varius orci, sed bibendum est nisl vel nibh.
          </p>
        </FadeInSection>
      </div>
    </>
  );
}

export default About;
