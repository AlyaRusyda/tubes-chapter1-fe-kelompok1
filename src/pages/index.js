import React from "react";
import "../css/style2.css";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Carousel from "react-bootstrap/Carousel";

const Index = () => {
  return (
    <>
     <header>
        <h3 className="logo">
          <span>Kelo</span>mpok 1
        </h3>
        <input type="checkbox" id="menu-bar" />
        <label for="menu-bar" className="fas fa-bars"></label>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#biodata">Biodata</a>
          <Link to="/Calculator">Kalkulator</Link>
        </nav>
      </header>
      <ul className="sidebar" data-aos="fade-right" data-aos-offset="900">
        <li className="side-item">
          <a href="#home" className="side-link">
            <i className="fas fa-home"></i>
            <span className="text-side">Home</span>
          </a>
        </li>
        <li className="side-item">
          <a href="#about" className="side-link">
            <i className="fas fa-user-secret"></i>
            <span className="text-side">About Us</span>
          </a>
        </li>
        <li className="side-item">
          <a href="#biodata" className="side-link">
            <i className="fas fa-address-card"></i>
            <span className="text-side">Biodata</span>
          </a>
        </li>
      </ul>

      <section className="home" id="home">
        <div className="content">
          <h3>
            Kelompok 1 <span>Eunoia</span>
          </h3>
          <p>
            Halo semuanya! Kenalin nih, kita dari Kelompok 1 TEFA SMK Telkom
            Malang. Yuk, cari tahu biodata semua membernya!
          </p>
          <a href="#about" className="btn">
            View Team
          </a>
        </div>
        <div className="image" data-tilt>
          <img
            src="asset/eunoia-low-resolution-logo-color-on-transparent-background.png"
            alt="EUNOIA"
          />
        </div>
      </section>

      <section className="about" id="about">
        <h1 className="heading">our team</h1>
        <div className="column">
          <video width="400" height="240" controls preload="none" autoplay>
            <source src="asset/video/VIDEO KELOMPOK.mp4" type="video/mp4" />
          </video>
          <div
            classname="content"
            data-aos="fade-left"
            data-aos-duration={2000}
          >
            <p>
              EUNOIA berasal dari bahasa Yunani yang berarti “pemikiran yang
              indah” atau “pemikiran yang baik". Hal ini tentunya merupakan
              prinsip dari setiap anggota kelompok. Dengan pikiran yang baik,
              kami optimis akan mampu bertahan lebih kuat dan bermanfaat bagi
              masyarakat dengan ilmu yang telah kami miliki.
            </p>
            <a href="#biodata" className="btn">
              Selengkapnya
            </a>
          </div>
        </div>
      </section>

      <section id="biodata">
        <div id="biodata">
          <h1 className="heading">Our Biodata</h1>
        </div>
        <div className="main-box">
          <div
            className="main center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="box center">
              <div className="arr-container center">
                <i className="fas fa-arrow-right"></i>
              </div>
              <div className="left-container left">
                <p>Aisya Karenina Ramadhani</p>
                <div className="icons">
                  <div className="slider">
                    <div className="slides">
                      <input type="radio" name="radio-btn" id="radio1" />
                      <input type="radio" name="radio-btn" id="radio2" />
                      <input type="radio" name="radio-btn" id="radio3" />

                      <div className="slide first">
                        <img src="asset/Aisya/foto satu.jpeg" alt="" />
                      </div>
                      <div className="slide">
                        <img src="asset/Aisya/foto dua.jpg" alt="" />
                      </div>
                      <div className="slide">
                        <img src="asset/Aisya/foto tiga.jpg" alt="" />
                      </div>

                      <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                      </div>

                      <div className="navigation-manual">
                        <label for="radio1" className="manual-btn"></label>
                        <label for="radio2" className="manual-btn"></label>
                        <label for="radio3" className="manual-btn"></label>
                      </div>
                    </div>
                  </div>
                  <p className="teks">
                    Hai Hai Haii!! Pepatah mengatakan tak kenal maka tak sayang,
                    jadii perkenalkan nama saya Aisya Karenina Ramadhani, biasa
                    dipanggil Aisya / Ice, asal sekolah saya SMK Telkom Malang.
                    Saya lahir di Tulungagung pada tanggal 24 Oktober 2005. Nice
                    to meet you guys!! sekian dari saya bye byee╰(´︶`)╯♡ <br />
                    📍 Aisya's Favourite Place : Tulungagung (Aisya's Hometown)
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252770.2897000196!2d111.81873449972238!3d-8.148648619155004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78e2fac4fe1167%3A0x4027a76e3532000!2sTulungagung%2C%20Kabupaten%20Tulungagung%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1667252540034!5m2!1sid!2sid"
                    width="270"
                    height="100"
                    style={{ border: "0;" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div
            className="main center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="box center">
              <div className="arr-container center arr1">
                <i className="fas fa-arrow-right"></i>
              </div>
              <div className="left-container left1">
                <p>Alya Rusyda Maharistya</p>
                <div className="icons">
                  <div className="slider1">
                    <div className="slides">
                      <input type="radio" name="radio-btn" id="radio4" />
                      <input type="radio" name="radio-btn" id="radio5" />
                      <input type="radio" name="radio-btn" id="radio6" />

                      <div className="slide first">
                        <img src="asset/Alya/_DSC3144.JPG" alt="" />
                      </div>
                      <div className="slide">
                        <img src="asset/Alya/IMG-20221011-WA0383.jpg" alt="" />
                      </div>
                      <div className="slide">
                        <img
                          src="asset/Alya/IMG-20221012-WA0041(1).jpg"
                          alt=""
                        />
                      </div>

                      <div className="navigation-auto">
                        <div className="auto-btn4"></div>
                        <div className="auto-btn5"></div>
                        <div className="auto-btn6"></div>
                      </div>

                      <div className="navigation-manual">
                        <label for="radio4" className="manual-btn"></label>
                        <label for="radio5" className="manual-btn"></label>
                        <label for="radio6" className="manual-btn"></label>
                      </div>
                    </div>
                  </div>
                  <p className="teks">
                    Hai semuanya. Salam kenal, nama saya Alya Rusyda Maharistya,
                    biasa dipanggil Alya, asal sekolah saya SMK Telkom Malang.
                    Saya lahir di Sukoharjo pada tanggal 31 Juli 2006 Semoga
                    kita bisa berteman baik. Duduk sendirian tanpa kekasih cukup
                    sekian terima kasih!
                    <br />
                    📍 Alya's Favourite Place : SMK TELKOM MALANG (Our School)
                  </p>
                  <iframe
                    className="maps"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15805.130857854103!2d112.6551535!3d-7.9697067!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6285c5c1b44e3%3A0xf6c889ac7452dc3a!2sTelkom%20School%20-%20SMK%20Telkom%20Malang!5e0!3m2!1sid!2sid!4v1667184910399!5m2!1sid!2sid"
                    width="270"
                    height="100"
                    style={{ border: "0;" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div
            className="main center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="box center">
              <div className="arr-container center arr2">
                <i className="fas fa-arrow-right"></i>
              </div>
              <div className="left-container left2">
                <p>Celline Regia Yasshinta</p>
                <div className="icons">
                  <div className="slider2">
                    <div className="slides">
                      <input type="radio" name="radio-btn" id="radio7" />
                      <input type="radio" name="radio-btn" id="radio8" />
                      <input type="radio" name="radio-btn" id="radio9" />

                      <div className="slide first">
                        <img src="asset/Celline/20220722055655363.jpg" alt="" />
                      </div>
                      <div className="slide">
                        <img src="asset/Celline/20220903182945892.jpg" alt="" />
                      </div>
                      <div className="slide">
                        <img src="asset/Celline/20221007191444160.jpg" alt="" />
                      </div>

                      <div className="navigation-auto">
                        <div className="auto-btn7"></div>
                        <div className="auto-btn8"></div>
                        <div className="auto-btn9"></div>
                      </div>

                      <div className="navigation-manual">
                        <label for="radio7" className="manual-btn"></label>
                        <label for="radio8" className="manual-btn"></label>
                        <label for="radio9" className="manual-btn"></label>
                      </div>
                    </div>
                  </div>
                  <p className="teks">
                    Halo rek! Namaku Celline Regia Yasshinta, banyak banget
                    panggilannya. Ada Selin, Celin, Line, dsb. Panggil sesuka
                    kalian aja ya, pokoknya jangan dipanggil sayang hihi. Aku
                    lahir di kota paling timur di Jawa Timur. Yap btul! Kota
                    Banyuwangi, pada tanggal 13 Januari 2006. Semoga kedepannya,
                    kita bisa berteman baik yaa. Thank you 🙆‍♀️
                    <br />
                    📍 Celline's Favourite Place : Gramedia (Book Store)
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.17382419666!2d112.62803894981205!3d-7.980976994223831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6282296092e1b%3A0xb7cf6c3804c18872!2sGramedia%20Kajoetangan%20Malang!5e0!3m2!1sid!2sid!4v1667207918894!5m2!1sid!2sid"
                    width="270"
                    height="100"
                    style={{ border: "0;" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div
            className="main center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="box center">
              <div className="arr-container center arr3">
                <i className="fas fa-arrow-right"></i>
              </div>
              <div className="left-container left3">
                <p>Gizella Ratu Pramesti</p>
                <div className="icons">
                  <div className="slider3">
                    <div className="slides">
                      <input type="radio" name="radio-btn" id="radio10" />
                      <input type="radio" name="radio-btn" id="radio11" />
                      <input type="radio" name="radio-btn" id="radio12" />

                      <div className="slide first">
                        <img
                          src="asset/Gizel/IMG-20221022-WA0055(2).jpg"
                          alt=""
                        />
                      </div>
                      <div className="slide">
                        <img src="asset/Gizel/IMG-20221028-WA0080.jpg" alt="" />
                      </div>
                      <div className="slide">
                        <img src="asset/Gizel/IMG_1019.JPG" alt="" />
                      </div>

                      <div className="navigation-auto">
                        <div className="auto-btn10"></div>
                        <div className="auto-btn11"></div>
                        <div className="auto-btn12"></div>
                      </div>

                      <div className="navigation-manual">
                        <label for="radio10" className="manual-btn"></label>
                        <label for="radio11" className="manual-btn"></label>
                        <label for="radio12" className="manual-btn"></label>
                      </div>
                    </div>
                  </div>
                  <p className="teks">
                    Halo semuanya, perkenalkan nama saya Gisel, asal sekolah
                    saya SMK Telkom Malang. Saya lahir di kota Kediri pada
                    tanggal 16 Desember 2005. Saya orangnya pendiem. Tapi jangan
                    diem-diem naroh perasaan pada saya ya. Salam kenal semua!!
                    <br />
                    📍 Gisel's Favourite Place : IWABEKA (Coffe Shop)
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.225173954859!2d112.65986544981199!3d-7.975664194227548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6295e368c48cd%3A0x9b5abcf7b465cf36!2sIWABEKA%20-%20Sawojajar!5e0!3m2!1sid!2sid!4v1667207527910!5m2!1sid!2sid"
                    width="270"
                    height="100"
                    style={{ border: "0;" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Index;
