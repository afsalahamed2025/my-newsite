import React, { useRef } from "react";
import "./Header.css";
import { hero_image } from "../../assets";
import { Link } from "react-scroll";
import Achivements from "../Achivements";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Header = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      const timeline = gsap.timeline({ delay: 2, stagger:1 });
      timeline
        .fromTo(
          ".image__container",
          { scale:.3, opacity: 0, y: 150 },
          { scale:1, ease: "sine.in", opacity: 1, y: 0 }
        )
        .from(".title", { opacity: 0, y: -30 })
        .from(".description", { opacity:0,y:-30 })
        .from(".buttons__container", { opacity: 0, y: 40 });
    },
    { scope: container }
  );

  return (
    <header id="header" ref={container}>
      <div className="container full__height">
        <div className="row">
          <div className="column">
            <h1 className="title">
              JN (CSC) ,{""} <br />{" "}
              <span className="g-text">| Digital Seva </span>
            </h1>
            <p className="text__muted description">
              The Common Service Center (CSC) is a strategic initiative under
              the Digital India program, aimed at delivering government and
              public utility services to citizens in rural and remote areas. It
              serves as a one-stop access point for services like banking,
              education, healthcare, and various government schemes, bridging
              the digital divide and promoting inclusive growth.
            </p>
            <div className="buttons__container">
              <Link to="services" smooth={true} className="btn">
                {" "}
                Our Services{" "}
              </Link>
              <Link to="services" smooth={true} className="btn btn__primary">
                {" "}
                Contact Us{" "}
              </Link>
            </div>
          </div>
          <div className="column">
            <div className="image__container">
              <img src={hero_image} alt="" />
            </div>
          </div>
        </div>
        <Achivements />
      </div>
    </header>
  );
};

export default Header;
