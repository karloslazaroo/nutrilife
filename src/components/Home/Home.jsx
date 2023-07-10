import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import homepic from "../../assets/homepic.jpg";
import Category from "../Category/Category";
import Footer from "../Footer/Footer";
import { Fade } from "react-awesome-reveal";

function Home() {

  return (
    <div>
      <Fade bottom duration={2000}>
      <Navbar />
      <div className="home">
        <div className="fruits">
          <h1>
            Fruits and Vegetables<br></br> Wholesaling
          </h1>
          <p>
            Boost that immunity from your home! Farm fresh delivered to your
            doorstep!
          </p>
          <button class="button-27">View More!</button>
        </div>
        <img src={homepic}></img>
      </div>
      <Category />
      <Footer/>
      </Fade>
    </div>
  );
}

export default Home;
