import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import {
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Container,
} from "react-bootstrap";
import "./skills.css";

export default function Skills() {
  return (
    <section id="skills">
      <h1 className="text-center text-light">Skills</h1>
      <Container>
        <Card bg="dark" className="text-light about-me-card">
          <Card.Body className="text-light">
            <Row className="d-flex justify-content-center">
              <Col xl={4} lg={4} className="mx-auto">
                <ListGroup variant="flush">
                  <ListGroupItem
                    className="list-group-item-bg text-light fw-bold rounded my-1"
                    variant="dark"
                  >
                    <BadgeCheckIcon className="check-badge-icon text-success" />
                    SQL
                  </ListGroupItem>
                  <ListGroupItem
                    className="list-group-item-bg text-light fw-bold rounded my-1"
                    variant="dark"
                  >
                    <BadgeCheckIcon className="check-badge-icon text-success" />
                    Microsoft SQL Server
                  </ListGroupItem>
                  {/* <ListGroupItem
                    className="list-group-item-bg text-light fw-bold rounded my-1"
                    variant="dark"
                  ><BadgeCheckIcon className="check-badge-icon text-success" />
                    Stored-Procedure Design
                  </ListGroupItem> */}
                  <ListGroupItem
                    className="list-group-item-bg text-light fw-bold rounded my-1"
                    variant="dark"
                  >
                    <BadgeCheckIcon className="check-badge-icon text-success" />
                    C#
                  </ListGroupItem>
                  {/* <ListGroupItem
                    className="list-group-item-bg text-light fw-bold rounded my-1"
                    variant="dark"
                  ><BadgeCheckIcon className="check-badge-icon text-success" />
                    .NET Core
                  </ListGroupItem> */}
                  <ListGroupItem
                    className="list-group-item-bg text-light fw-bold rounded my-1"
                    variant="dark"
                  >
                    <BadgeCheckIcon className="check-badge-icon text-success" />
                    ADO.NET
                  </ListGroupItem>
                  <ListGroupItem
                    className="list-group-item-bg text-light fw-bold rounded my-1"
                    variant="dark"
                  >
                    <BadgeCheckIcon className="check-badge-icon text-success" />
                    RESTful API
                  </ListGroupItem>
                  <ListGroupItem
                    className="list-group-item-bg text-light fw-bold rounded my-1"
                    variant="dark"
                  >
                    <BadgeCheckIcon className="check-badge-icon text-success" />
                    ASP.NET
                  </ListGroupItem>
                </ListGroup>
              </Col>
              <Col xl={4} lg={4} className="mx-auto">
                <ListGroup>
                  <ListGroupItem className="list-group-item-bg text-light fw-bold rounded my-1">
                    <BadgeCheckIcon className="check-badge-icon text-success" />
                    JavaScript
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item-bg text-light fw-bold rounded my-1">
                    <BadgeCheckIcon className="check-badge-icon text-success" />
                    ReactJS
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item-bg text-light fw-bold rounded my-1">
                    <BadgeCheckIcon className="check-badge-icon text-success" />
                    jQuery
                  </ListGroupItem>

                  <ListGroupItem className="list-group-item-bg text-light fw-bold rounded my-1">
                    <BadgeCheckIcon className="check-badge-icon text-success" />
                    HTML5
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item-bg text-light fw-bold rounded my-1">
                    <BadgeCheckIcon className="check-badge-icon text-success" />
                    CSS3
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item-bg text-light fw-bold rounded my-1">
                    <BadgeCheckIcon className="check-badge-icon text-success" />
                    Bootstrap
                  </ListGroupItem>
                </ListGroup>
              </Col>
              <Col xl={4} lg={4} className="mx-auto">
                <ListGroup>
                  <ListGroupItem className="list-group-item-bg text-light fw-bold rounded my-1">
                    <BadgeCheckIcon className="check-badge-icon text-success" />
                    Version Source Control
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item-bg text-light fw-bold rounded my-1">
                    <BadgeCheckIcon className="check-badge-icon text-success" />
                    AGILE
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item-bg text-light fw-bold rounded my-1">
                    <BadgeCheckIcon className="check-badge-icon text-success" />
                    Postman
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item-bg text-light fw-bold rounded my-1">
                    <BadgeCheckIcon className="check-badge-icon text-success" />
                    Axios
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}
