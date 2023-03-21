import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm webdecoded`}
              <span className="wrap">web developer</span>
            </h1>
            {/* Seria sobre min. */}
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              maxime sint tenetur ex, possimus ab. Maiores laboriosam libero
              nisi voluptas eius aliquam quasi, alias saepe, nesciunt nemo esse
              quibusdam id?
            </p>
            <button onClick={() => console.log('connect')}>
              Let´s connect
              <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
