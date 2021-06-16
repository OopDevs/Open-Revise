import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import img1 from "../../assets/icon/studying.svg";
import img2 from "../../assets/icon/researching.svg";

function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <div className="footer-elements">
          <div className="footer-elements">
            <Link className="logo" to="#">
              Open Revise
            </Link>
          </div>
          <div className="footer-element">
            <h1>Support</h1>
            <ul>
              <li>
                <Link>Contact Us</Link>
              </li>
              <li>
                <Link>Privecy Policy</Link>
              </li>
              <li>
                <Link>Terms of Use</Link>
              </li>
            </ul>
          </div>
          <div className="footer-element">
            <h1>Company</h1>
            <ul>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Our Blog</Link>
              </li>
              <li>
                <Link>FeedBack</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-imgs">
        <img src={img1} />
        <img src={img2} />
      </div>
    </section>
  );
}

export default Footer;