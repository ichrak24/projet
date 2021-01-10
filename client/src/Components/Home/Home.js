import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../JS/actions/user";
import { useHistory } from "react-router-dom";
import DoctorList from "../Doctors/DoctorList";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const psy = useSelector((state) => state.userReducer.user);
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    Address: "",
    email: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
     
      dispatch(getUsers());
    
  }, []);

  const namee = psy && psy.name;
  return (
    <div>
      <header className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-xs-5 header-logo">
              <br />
              <a href="index.html">
                <img
                  src="/assets/img/logo.png"
                  alt=""
                  className="img-responsive logo"
                />
              </a>
            </div>
            <div className="col-md-5">
              <nav
                className="navbar navbar-expand-lg navbar-light bg-light"
                style={{ padding: "20", margin: "20", width: "100%" }}
              >
                <div className="container-fluid">
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page">
                          <Link to="/">Home</Link>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page">
                          <Link to="/postList">Problem Member</Link>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page">
                          <Link to="/aboutus">About Us</Link>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <section className="slider" id="home">
        <div className="container-fluid">
          <div
            className="row"
            style={{
              display: "block",
              marginRight: "-15px",
              marginLeft: "-15px",
            }}
          >
            <div
              id="carouselHacked"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div className="header-backup" />
              {/* Wrapper for slides */}
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <img src="/assets/img/slide-one.jpg" alt="" />
                  <div className="carousel-caption">
                    <h1>providing</h1>
                    <p>highquality service for men &amp; women</p>
                    <Link to="/signup">
                      <button>Inscription</button>
                    </Link>
                    <Link to="/LoginAdmin">
                      <button>I'm Admin </button>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <img src="/assets/img/slide-two.jpg" alt="" />
                  <div className="carousel-caption">
                    <h1>providing</h1>
                    <p>highquality service for men &amp; women</p>
                    <Link to="/signup">
                      <button>Inscription</button>
                    </Link>
                    <Link to="/LoginAdmin">
                      <button>I'm Admin </button>
                    </Link>
                  </div>
                </div>

                <div className="item">
                  <img src="/assets/img/slide-four.jpg" alt="" />
                  <div className="carousel-caption">
                    <h1>providing</h1>
                    <p>highquality service for men &amp; women</p>
                    <Link to="/signup">
                      <button>Inscription</button>
                    </Link>
                    <Link to="/LoginAdmin">
                      <button>I'm Admin </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Controls */}
              <a
                className="left carousel-control"
                href="#carouselHacked"
                role="button"
                data-slide="prev"
              >
                <span
                  className="glyphicon glyphicon-chevron-left"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="right carousel-control"
                href="#carouselHacked"
                role="button"
                data-slide="next"
              >
                <span
                  className="glyphicon glyphicon-chevron-right"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end of slider section */}
      {/* about section */}
      <section className="about text-center" id="about">
        <div className="container">
          <div className="row">
            <h2>about us</h2>
            <h4>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled
            </h4>
            <div className="col-md-4 col-sm-6">
              <div className="single-about-detail clearfix">
                <div className="about-img">
                  <img
                    className="img-responsive"
                    src="/assets/img/item1.jpg"
                    alt=""
                  />
                </div>
                <div className="about-details">
                  <div className="pentagon-text">
                    <h1>C</h1>
                  </div>
                  <h3>Children’s specialist</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="single-about-detail">
                <div className="about-img">
                  <img
                    className="img-responsive"
                    src="/assets/img/item2.jpg"
                    alt=""
                  />
                </div>
                <div className="about-details">
                  <div className="pentagon-text">
                    <h1>W</h1>
                  </div>
                  <h3>Children’s specialist</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="single-about-detail">
                <div className="about-img">
                  <img
                    className="img-responsive"
                    src="/assets/img/item3.jpg"
                    alt=""
                  />
                </div>
                <div className="about-details">
                  <div className="pentagon-text">
                    <h1>M</h1>
                  </div>
                  <h3>Children’s specialist</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ispsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of about section */}
      {/* service section starts here */}
      <section className="service text-center" id="service">
        <div className="container">
          <div className="row">
            <h2>our services</h2>
            <h4>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </h4>
            <div className="col-md-3 col-sm-6">
              <div className="single-service">
                <div className="single-service-img">
                  <div className="service-img">
                    <img
                      className="heart img-responsive"
                      src="/assets/img/service1.png"
                      alt=""
                    />
                  </div>
                </div>
                <h3>Heart problem</h3>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-service">
                <div className="single-service-img">
                  <div className="service-img">
                    <img
                      className="brain img-responsive"
                      src="/assets/img/service2.png"
                      alt=""
                    />
                  </div>
                </div>
                <h3>brain problem</h3>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-service">
                <div className="single-service-img">
                  <div className="service-img">
                    <img
                      className="knee img-responsive"
                      src="/assets/img/service3.png"
                      alt=""
                    />
                  </div>
                </div>
                <h3>knee problem</h3>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-service">
                <div className="single-service-img">
                  <div className="service-img">
                    <img
                      className="bone img-responsive"
                      src="/assets/img/service4.png"
                      alt=""
                    />
                  </div>
                </div>
                <h3>human bones problem</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of service section */}
      {/* team section */}
      <section className="team" id="team">
        <div className="container">
          <DoctorList />
        </div>
      </section>
      {/* end of team section */}
      {/* map section */}
      <div className="api-map" id="contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 map" id="map" />
          </div>
        </div>
      </div>
      {/* end of map section */}
      {/* contact section starts here */}
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="contact-caption clearfix">
              <div className="contact-heading text-center">
                <h2>contact us</h2>
              </div>
              <div className="col-md-5 contact-info text-left">
                <h3>contact information</h3>
                <div className="info-detail">
                  <ul>
                    <li>
                      <i className="fa fa-calendar" />
                      <span>Monday - Friday:</span> 9:30 AM to 6:30 PM
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <i className="fa fa-map-marker" />
                      <span>Address:</span> 123 Some Street , London, UK, CP 123
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <i className="fa fa-phone" />
                      <span>Phone:</span> (032) 987-1235
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <i className="fa fa-fax" />
                      <span>Fax:</span> (123) 984-1234
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <i className="fa fa-envelope" />
                      <span>Email:</span> info@doctor.com
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-md-offset-1 contact-form">
                <h3>leave us a message</h3>
                <form className="form">
                  <input className="name" type="text" placeholder="Name" />
                  <input className="email" type="email" placeholder="Email" />
                  <input
                    className="phone"
                    type="text"
                    placeholder="Phone No:"
                  />
                  <textarea
                    className="message"
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    placeholder="Message"
                    defaultValue={""}
                  />
                  <input
                    className="submit-btn"
                    type="submit"
                    defaultValue="SUBMIT"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of contact section */}
      {/* footer starts here */}
      {/* <footer className="footer clearfix">
      <div className="container">
          <div className="row">
            <div className="col-xs-6 footer-para">
              <p>©All right reserved to Ichrak Guesmi</p>
            </div>
            <div className="col-xs-6 text-right">
              <a href>
                <i className="fa fa-facebook" />
              </a>
              <a href>
                <i className="fa fa-twitter" />
              </a>
              <a href>
                <i className="fa fa-skype" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* script tags
	============================================================= */}
    </div>
  );
};

export default Home;
