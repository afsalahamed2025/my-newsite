import React from "react";
import "./Footer.css";
import { footer } from "../../data";
import Logo from "../Logo";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="column">
            <Logo />
            <form className="newsletter">
              <h3>Get weekly update</h3>
              <div className="control__container">
                <input
                  type="number"
                  placeholder="Enter Your Mobile Number"
                  className="control"
                />
             
                <a  href="https://chat.whatsapp.com/B4rVBUlcjzpIxTvTrS5CPV"   className="btn" type="button">
                 Join
                </a>
              </div>
            </form>
          </div>
          {footer.map((list, index) => (
            <div className="column" key={index}>
              <div className="routes__name">{list.name}</div>
              <div className="routes__container">
                {list.routes.map((route,i) => (
                  <Link to={route.id} className="route__item" key={index}>
                  <p className="name">
                    {route.name}
                  </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <h3>Copyright &copy; All right  reserved -| 2025</h3> 
          <p className="text__muted afsal">Built with love by <span> Afsal Ahamed </span> </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
