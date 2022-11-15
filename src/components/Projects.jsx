import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { projects } from "../data";
import "./projects.css";

export default function Projects() {
  return (
    <section id="projects">
      <Container className=" mx-auto text-center">
        <Col className="flex flex-column">
          <h1 className="font-medium title-font mb-4 text-white">
            Projects, Components, and Previous Work
          </h1>
          <h3 className="text-light">Current On-going Projects</h3>
          <p>
            <a href="https://tfgx.azurewebsites.net/" className="site-link">
              https://tfgx.azurewebsites.net
            </a>
          </p>
          <p className="mx-auto">
            Shown below are some of my personal projects, components made for
            previous jobs, and projects completed collaborating with fellow
            developers.
          </p>
        </Col>
        <Row>
          {projects.map((project) => (
            <Col
              xl={6}
              lg={6}
              className="flex justify-content-start over-row mt-4"
            >
              <a href={project.link} key={project.image} className="w-100 p-1">
                <Image alt="gallery" src={project.image} className="proj-img" />
                <div class="overlay">
                  <h2 className="text-sm title-font text-light font-medium mb-1 my-4">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-light mb-3 my-4 text-success">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-light">
                    {project.description}
                  </p>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
