import { ArrowCircleRight } from "phosphor-react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          eum quisquam maiores reiciendis sequi soluta asperiores laboriosam
          temporibus atque facilis?
        </p>

        <button className="btn">Explore more <ArrowCircleRight size={32} /> </button>
      </div>
    </div>
  );
};

export default Hero;
