import React ,{useRef}from "react";
import "./Project.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../../data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Project = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      const timeline = gsap.timeline({
        delay: 0.2,
        scrollTrigger: {
          trigger: container.current,
          start: "20% bottom",
          end: "bottom top",
        },
      });
      timeline

        .from(".title", { y: -50, opacity: 0 })
        .from(".sub__title", { y: -50, opacity: 0 })
        .fromTo(".slick-slide", { x:100, opacity:0 },
          {opacity:1,stagger:.5,x:0}

        );
    },
    { scope: container }
  );
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    centerMode:true,
    pauseOnHover:true,
    autoplay:true,
    autoplaySpeed:9000,
    responsive:[
      {
        breakpoint:600,
        settings:{
          slidesToShow:1,
          centerPadding:0,
        }
      }
    ]

  };
  return (
    <section id="project" ref={container}>
      <div className="project__top">
        <h1 className="title">
          JN <span className="g-text">News & Updates</span>
        </h1>
        <h3 className="sub__title">
          Government Schemes & Digital Services Updates
        </h3>
      </div>
      <Slider {...settings} className="projects__container">
       {
        projects.map((projects,index)=>(
          <React.Fragment key={index}>
            <div className="image__container">
              <img src={projects.image} alt={projects.title} />
            </div>
            <div className="box">
              <h1 className="name">{projects.title}</h1>
            </div>
            <div className="details">
              <h3 className="name">{projects.title}</h3>
              <p className="text__muted description">{projects.description}</p>
              <button className="btn">Read more</button>
            </div>
          </React.Fragment>
        ))
       }
      </Slider>
    </section>
  );
};

export default Project;
