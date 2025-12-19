import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import medicolGes from "../../Assets/Projects/a.jpg";
import ecoVoyageur from "../../Assets/Projects/c.png";
import foyer from "../../Assets/Projects/blog.png";
import eFit from "../../Assets/Projects/h.png";
import prohire from "../../Assets/Projects/p.png";
import smartPrint from "../../Assets/Projects/codeEditor.png";
import devOpsPipeline from "../../Assets/Projects/g.jpg"; // Add image for DevOps pipeline
import webIntegration from "../../Assets/Projects/i.png"; // Add image for web integration project
import pharmaquik from "../../Assets/Projects/f.png"; // Add image for Pharmaquik
import woelfel from "../../Assets/Projects/woelfel.png"; 


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
  <ProjectCard
    imgPath={woelfel}
    isBlog={false}
    title="Industrial Monitoring & Automation System"
    description="Final internship at Wölfel Engineering (Germany). Developed Python automation scripts, SFTP-based data pipelines, and monitoring tools for wind-turbine systems. Integrated Docker containers, InfluxDB data storage, and Grafana dashboards. Built connectivity diagnostics using OpenVPN and improved system reliability across multiple industrial units."
  />
</Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medicolGes}
              isBlog={false}
              title="MediColGes"
              description="Esprit Full Stack Js Project Requested By Professor Abdelkrim BOURAMOUL from Université Constantine 2, Algeria. Developed a medical web app for doctors and institutions using the MERN stack. Collaborated with a team of 4. The app includes a chatbot, chat, dynamic forums, events, social posts, and more."
              ghLink="https://github.com/maGNICHI/MedicolGes.git"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prohire}
              isBlog={false}
              title="Prohire"
              description="An internship project developed with Idol Digital, this resume-building application integrates AI to help users create professional CVs."
              ghLink="https://github.com/EmnaAbbessi/Prohire.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecoVoyageur}
              isBlog={false}
              title="Eco Voyageur"
              description="A Laravel project where we developed a web platform for eco-friendly travel. The website allows users to explore eco-travel destinations, plan trips, and learn more about sustainable tourism."
              ghLink="https://github.com/eya161/ESPRITUniversity.git"
            />
          </Col>

          {/* Add new project for DevOps */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devOpsPipeline}
              isBlog={false}
              title="DevOps Pipeline with Jenkins"
              description="Developed a CI/CD pipeline using Jenkins for automating builds, testing, and deployment. Integrated Docker for containerization"
              ghLink="https://github.com/EmnaAbbessi/DEVOPS.git"
            />
          </Col>
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eFit}
              isBlog={false}
              title="E-fit"
              description="A sports web application developed using Symfony, designed to help users track their fitness progress, plan workouts, and connect with personal trainers."
              ghLink="https://github.com/MaramBr/PIDEV.git"
            />
          </Col>
          {/* Add new project for Web Integration */}
        

          {/* Add new Django project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pharmaquik}
              isBlog={false}
              title="Pharmaquik"
              description="A Django-based pharmaceutical website integrated with AI for managing drug inventories, prescriptions, and patient data. Developed using Django, AI, and MongoDB for a streamlined and efficient system."
              ghLink="https://github.com/EmnaAbbessi/djangoPharmaquik.git"
            />
          </Col>

          {/* Existing Projects */}
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foyer}
              isBlog={false}
              title="Foyer University"
              description="A Laravel project developed for Esprit University to manage university dormitories, allowing students to book rooms and view availability."
              ghLink="https://github.com/eya161/4TWIN5-RenovAct.git"
            />
          </Col>

         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webIntegration}
              isBlog={false}
              title="Web Integration with CSS, Bootstrap & SASS"
              description="A web integration project focusing on responsive design and advanced styling using CSS, Bootstrap, and SASS. Developed UI components with a modern design for an e-commerce platform."
              ghLink="https://github.com/EmnaAbbessi/Integration-Web-CSS-SASS-BOOTSTRAP-html.git"
            />
          </Col>
        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartPrint}
              isBlog={false}
              title="Smart Printing Office"
              description="A C++ and Qt project for a smart printing office system. The application manages print jobs, user queues, and office resources."
              ghLink="https://github.com/khaledg4g/smart-printing-office-2A6.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
