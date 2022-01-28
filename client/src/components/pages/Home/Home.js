import React from "react";
import { useParallax } from "react-scroll-parallax";
import { Background, Parallax } from "react-parallax";

import Article from "../../Article";
import { homeObject1, homeObject2, homeObject3 } from "../../../data/homeData";

import CoverPicture from "../../../assets/images/1a - house_picture - cropped.jpg";

import "./Home.css";

function Home() {
    const { ref } = useParallax({ speed: 30 });

  return (
    <>
      {/* <div className="home__image-container">
        <img
          className="home__image"
          src={CoverPicture}
          alt="Maison d'hôtes à Bernay-Saint-Martin"
        />
      </div> */}

      <Parallax
        bgImage={CoverPicture}
        bgImageAlt="Maison"
        strength={150}
      >
        <div className="home__cover-container">
        </div>
      </Parallax>

      {/* <Parallax strength={500}>
        <Background className="custom-bg">
          <img
            className="home__image"
            src={CoverPicture}
            alt="Maison d'hôtes à Bernay-Saint-Martin"
          />
        </Background>
      </Parallax>

      <Parallax strength={300}>
        <Background className="custom-bg">
          <img src={CoverPicture} alt="Maison d'hôtes à Bernay-Saint-Martin" />
        </Background>
      </Parallax> */}

      <div         ref={ref}>
        <Article {...homeObject1} />
        <Article {...homeObject2} />
        <Article {...homeObject3} />
      </div>
    </>
  );
}

export default Home;
