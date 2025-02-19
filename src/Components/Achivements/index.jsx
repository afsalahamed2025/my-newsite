import React, { useEffect, useState,useRef } from "react";
import "./Achivements.css";
import {FaDiagramProject, FaUsersLine } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import Odometer from "react-odometerjs";
import { GiTeamIdea } from "react-icons/gi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Achivements = () => {
  const [clients, setClients] = useState(0);
  const [projects, setprojects] = useState(0);
  const [teams, setTeams] = useState(0);
  const [awards, setAwards] = useState(0);
  const container =useRef(null)
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setClients(200);
      setprojects(850);
      setTeams(10);
      setAwards(99);
    },2000);
    return () => clearTimeout(timeOutId);
  }, [])
  useGSAP(()=>{
    const timeline =gsap.timeline();
    timeline
    .from(
      ".achievement",
      {
        delay:1.5,
        x:100,
        stagger:.5,
        opacity:0,
      }
    )
  },{scope:container})
  ;
  return (
    <div className="achievement__container" ref={container}>
      {/* start Achivements */}
      <div className="achievement">
        <div className="icon__container">
          <FaUsersLine />
        </div>

        <div className="details">
          <div className="count__row">
            <Odometer value={clients} className="title" />

            <h1 className="g-text title">K</h1>
          </div>
          <small className=" text__muted">Happy Customers</small>
        </div>
      </div>
      {/* end Achivements */}

      {/* start Achivements */}
      <div className="achievement">
        <div className="icon__container">
          <FaDiagramProject />
        </div>

        <div className="details">
          <div className="count__row">
            <Odometer value={projects} className="title" />

            <h1 className="g-text title">+</h1>
          </div>
          <small className="text__muted">Completed CSC </small>
        </div>
      </div>
      {/* end Achivements */}

      {/* start Achivements */}
      <div className="achievement">
        <div className="icon__container">
          <GiTeamIdea />
        </div>

        <div className="details">
          <div className="count__row">
            <Odometer value={teams} className="title" />

            <h1 className="g-text title">+</h1>
          </div>
          <small className="text__muted">Expert Employers</small>
        </div>
      </div>
      {/* end Achivements */}

      {/* start Achivements */}
      <div className="achievement">
        <div className="icon__container">
        <PiCertificateFill />
        </div>

        <div className="details">
          <div className="count__row">
            <Odometer value={awards} className="title" />

            <h1 className="g-text title">+</h1>
          </div>
          <small className="text__muted">
            (CSC) Certificate
          </small>
        </div>
      </div>
      {/* end Achivements */}
    </div>
  );
};

export default Achivements;
