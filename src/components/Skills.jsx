import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.png';
import react from '../assets/img/react.svg';
import html5 from '../assets/img/html5.svg';
import css3 from '../assets/img/css3.svg';
import bootstrap from '../assets/img/bootstrap.svg';
import javascript from '../assets/img/javascript.svg';
import node from '../assets/img/node.svg';
import git from '../assets/img/git.svg';
import mongodb from '../assets/img/mongodb.svg';
import visualStudio from '../assets/img/visualStudio.svg';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry`s standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={html5} alt="Image" />
                  <h5>HTML 5</h5>
                </div>
                <div className="item">
                  <img src={css3} alt="Image" />
                  <h5>CSS 3</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="Image" />
                  <h5>Java Script</h5>
                </div>
                <div className="item">
                  <img src={node} alt="Image" />
                  <h5>Node</h5>
                </div>
                <div className="item">
                  <img src={git} alt="Image" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={visualStudio} alt="Image" />
                  <h5>Visual Studio</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
