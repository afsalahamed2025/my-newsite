import React,{useRef} from "react";
import "./Services.css";
import { services } from "../../data";
import ServiceCard from "./ServiceCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      const timeline = gsap.timeline({
        delay: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "20% bottom",
          end: "bottom top",
        },
      });
      timeline

        .from(".title", { y: -50, opacity: 0 })
        .from(".sub__title", { y: -50, opacity: 0 })
        .fromTo(".service__card", { y:100, opacity:0 },
          {opacity:1,stagger:.5,y:0}

        );
    },
    { scope: container }
  );
  return (
    <section id="services" ref={container}>
      <div className="container">
        <div className="service__top">
          <h1 className="title">
            JN <span className="g-text">Services</span>
          </h1>
          <h3 className="sub__title">Sections like Mobile & Accessories</h3>
        </div>
        <div className="services__container">
          {services.map((service, index) => (
            <ServiceCard
              icon={service.icon}
              name={service.name}
              description={service.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
