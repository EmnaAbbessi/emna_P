import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I&apos;m <span className="purple">Emna Abbassi</span> 
            from <span className="purple">Tunisia</span>.
            <br />
            I am a computer engineer currently gaining industry experience in 
            <span className="purple"> Germany</span>, where I work on software development, 
            automation, and monitoring solutions.
            <br />
            I enjoy building full-stack applications and working with technologies such as 
            <span className="purple"> MERN, Spring Boot, Laravel, Docker, Kubernetes, Grafana, and InfluxDB</span>.
            I also have an interest in applied AI and DevOps practices.
            <br />
            <br />
            Outside of engineering, here are a few things I love doing:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing and playing guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring music and discovering new artists
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and experiencing new cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, stay curious, and build things you&apos;re proud of."{" "}
          </p>
          <footer className="blockquote-footer">Emna</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
