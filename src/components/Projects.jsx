import React from 'react';
import { Col, Container, Row, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import projImg4 from '../assets/img/project-img4.png';
import projImg5 from '../assets/img/project-img5.png';
import projReactImg1 from '../assets/img/project-react-img1.png';
import projReactImg2 from '../assets/img/project-react-img2.png';
import projReactImg3 from '../assets/img/project-react-img3.png';
import projReactImg4 from '../assets/img/project-react-img4.png';
import projReactImg5 from '../assets/img/project-react-img5.png';
import Nav from 'react-bootstrap/Nav';
import colorSharp2 from '../assets/img/color-sharp2.png';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects = () => {
  const projects = [
    {
      title: 'Calendário',
      description: 'https://custom-calendar-nine.vercel.app/',
      imgUrl: projImg1,
    },
    {
      title: 'Home Parallax',
      description: 'https://travel-s-jr-desafio-2.vercel.app/',
      imgUrl: projImg2,
    },
    {
      title: 'Calculadora',
      description: 'https://calculator-pink-nine.vercel.app/',
      imgUrl: projImg3,
    },
    {
      title: 'E-commerce',
      description: 'https://vercel.com/ranilsonjunior/bicholandia',
      imgUrl: projImg4,
    },
    {
      title: 'Jogo Mata Mosquito',
      description: 'https://game-mata-mosquito-seven.vercel.app/',
      imgUrl: projImg5,
    },
  ];

  const projectsReacts = [
    {
      title: 'React Api',
      description: 'https://react-api-jet.vercel.app/',
      imgUrl: projReactImg1,
    },
    {
      title: 'Jogo da Velha',
      description: 'https://jogo-da-velha-mauve.vercel.app/',
      imgUrl: projReactImg2,
    },
    {
      title: 'Api de Filmes',
      description: 'https://movies-lib-kappa.vercel.app/',
      imgUrl: projReactImg3,
    },
    {
      title: 'Site E-commerce com Front-end e Back-end',
      description: 'https://bicholandia.onrender.com/',
      imgUrl: projReactImg4,
    },
    {
      title: 'Site E-commerce',
      description: 'https://bicholandia2.vercel.app/',
      imgUrl: projReactImg5,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__bounce' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Esses são todos os projetos que eu fiz até agora, utilizando
                    as linguagens que eu citei nas minhas skills. Com certeza
                    irei aumentar mais os projetos, tanto em quantidade como em
                    qualidade.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">HTML 5 CSS 3</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">React</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projectsReacts.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">Vazio por enquanto</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Image" />
    </section>
  );
};
