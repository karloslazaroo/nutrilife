import React from "react";
import "./Home.css";
import homepic from "../../assets/homepic.jpg";
import Category from "../Category/Category";
import { Fade } from "react-awesome-reveal";
import Contact from "../Contact/Contact";
import MainLayout from "../MainLayout/MainLayout";

function Home() {
  return (
    <div>
      <MainLayout>
        <Fade duration={1500}>
          <div className="home">
            <div className="fruits">
              <h1>
                Fruits and Vegetables<br></br> Wholesaling
              </h1>
              <p>
                Boost that immunity from your home! Farm fresh delivered to your
                doorstep!
              </p>
              <button class="button-26" onClick={event =>  window.location.href='/products'}>View More!</button>
            </div>
            <img src={homepic}></img>
          </div>
          <Category />
          <Contact />
        </Fade>
      </MainLayout>
    </div>
  );
}

export default Home;
