import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import github from "../assets/img/github.png";
import linkedin from "../assets/img/linkedin.png";
import "./about.css";

const About = () => {
  return (
    <>
      <section id="about">
        <Container>
          <Card bg="dark" className="my-auto p-1 about-me-card">
            {/* <Image src={img1} alt="" className="my-auto about-me-image" /> */}
            <Card.Body>
              <Row xl={12} lg={12} className="d-flex">
                <Col xl={6} lg={6} md={12} sm={12} className="mx-auto">
                  <h2 className="text-center text-light mt-5 mb-2">
                    Hi, I'm Christian Tannahill.
                  </h2>
                  <div className="w-75 mx-auto mt-2">
                    <p className="about-text">
                      I am a full stack software developer based in Illinois
                      skilled in React.js, C#/.Net, SQL, as well as other
                      languages, tools, frameworks, and libraries. I am open to
                      learning and working with any technology.
                    </p>
                  </div>

                  {/* <div className="d-flex justify-content-center">
                  <Button className="py-2 mx-2">View My Work</Button>
                </div> */}
                </Col>
                <Col xl={4} lg={4}>
                  <Row className="my-auto">
                    <Col
                      xl={6}
                      lg={6}
                      className="my-5 mx-0 px-0 d-flex flex-col justify-content-center"
                    >
                      <div>
                        <strong>ADDRESS</strong>
                        <br />
                        <small>Bloomington, IL 61701</small>
                        <div>
                          <strong>EMAIL</strong>
                          <br />
                          <small>christiantannahill2@gmail.com</small>
                        </div>
                        <div>
                          <strong>Phone</strong>
                          <br />
                          <small>309-531-6911</small>
                        </div>
                      </div>
                    </Col>
                    <Col xl={6} lg={6} className="d-flex flex-column">
                      <div className="d-flex justify-content-center my-auto">
                        <Button
                          variant="light"
                          className="px-0 py-0 mx-4 btn-sm"
                        >
                          <a href="https://github.com/Cstannahill">
                            <img
                              src={github}
                              alt="github"
                              height={50}
                              className="github-logo brand-logo"
                            ></img>
                          </a>
                        </Button>
                        <Button variant="light" className="px-1 py-1 mx-4">
                          <a href="https://www.linkedin.com/in/christian-tannahill/">
                            <img
                              src={linkedin}
                              height={50}
                              alt="linkedin"
                              className="linkedin-logo brand-logo"
                            ></img>
                          </a>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>
    </>
  );
};

export default About;
