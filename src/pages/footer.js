import React from "react";
import "../css/style2.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="col-left">
            <a href="#home">
              <img
                src="asset/eunoia-low-resolution-logo-white-on-transparent-background.png"
                alt=""
              />
            </a>
            <p className="footer-text">
              Jl. Danau Ranau No. 01 Sawojajar, Kedungkandang, Kota Malang, Jawa
              Timur 65139
            </p>
            <ul className="social-media-list">
              <li>
                <a
                  href="https://www.instagram.com/smktelkommalang/"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.smktelkom-mlg.sch.id/" target="_blank">
                  <i className="fab fa-chrome"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/smktelkommalang/"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://wa.me/" target="_blank">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/aisyakareninaa/TEFA_TASK1_K1_FE"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-right">
            <ul className="links-container">
              <h4>Explore</h4>
              <li>
                <a>Home</a>
                <Link to="/#home"></Link>
              </li>
              <li>
                <a>About</a>
                <Link to="/#about"></Link>
              </li>
              <li>
              <a>Biodata</a>
              <Link to="/#biodata"></Link>
              </li>
              <li>
                <a>Kalkulator</a>
              <Link to="/Calculator"></Link>
              </li>
            </ul>
            <ul className="links-container">
              <h4>Member</h4>
              <li>
                <a href="/#biodata">Aisya</a>
              </li>
              <li>
                <a href="/#biodata">Alya</a>
              </li>
              <li>
                <a href="/#biodata">Celline</a>
              </li>
              <li>
                <a href="/#biodata">Gizella</a>
              </li>
            </ul>
            <ul className="links-container">
              <h4>Moklet</h4>
              <li>
                <a href="https://www.smktelkom-mlg.sch.id/" target="_blank">
                  Website
                </a>
              </li>
              <li>
                <a href="https://ppdb.smktelkom-mlg.sch.id/" target="_blank">
                  PPDB
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
