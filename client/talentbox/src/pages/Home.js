import React from "react";
import image1 from "../images/image1.png";

const Home = () => {
  return (
    <div>
      <div className="home">
        <h1 class="h1 hero-title">
          Learn to code . <span class="span">Build projects.</span><span class="span">Earn certifications.</span>
        </h1>
      </div>
      <div>
        <img src={image1} alt=""></img>
      </div>
    </div>
  );
};
export default Home;
