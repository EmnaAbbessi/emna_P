import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/emnaaa.jpg"; // Replace with your image
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I&apos;m a computer engineer focused on{" "}
              <b className="purple">software development, DevOps, and system monitoring</b>.
              I currently work on industrial projects in Germany, building automation and
              data-driven solutions.
              <br />
              <br />
              I mainly work with{" "}
              <b className="purple">
                Python, JavaScript/TypeScript, Java, C and C++
              </b>
              , and I enjoy creating full-stack applications using{" "}
              <b className="purple">
                React.js, Node.js, Spring Boot, Laravel, and Django
              </b>
              .
              <br />
              <br />
              I like turning data into reliable services and dashboards using{" "}
              <b className="purple">
                Docker, Kubernetes, CI/CD, Grafana and InfluxDB
              </b>
              , and I have a growing interest in{" "}
              <b className="purple">applied AI</b> to make systems smarter and more efficient.
              <br />
              <br />
              Outside of pure coding, I care about clean architecture, teamwork and
              continuous learning, and I enjoy working in{" "}
              <b className="purple">Agile environments</b>.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ONLINE</h1>
            <p>
              You can reach me at{" "}
              <b className="purple">+49 15510235327</b> or connect with me here:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/EmnaAbbessi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/emna-abbassi-482993218/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}


export default Home2;
