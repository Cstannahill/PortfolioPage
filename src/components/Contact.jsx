import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <Container>
        <Row>
          <Col>
            <form
              netlify
              name="test"
              // onSubmit={handleSubmit}
              className=" flex flex-col"
            >
              <h2 className="text-white mb-1 font-medium title-font">
                Hire Me
              </h2>
              <p className="leading-relaxed mb-1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                suscipit officia aspernatur veritatis. Asperiores, aliquid?
              </p>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-400 mx-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-100 me-5 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  // onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-400 mx-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-100 me-5 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  //onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className=" text-sm text-gray-400 mx-1 align-top mt-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-100 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out"
                  //onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
