import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import emailjs from 'emailjs-com';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `service_ebi9dim`,
        `template_lw060su`,
        form.current,
        `9S2uQcJG6Zt-SuHOz`,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
    console.log(process.env);
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Entrar em Contato</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col sm={6} className="px-1">
                        <input type="text" name="name" placeholder="Nome" />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input
                          type="email"
                          name="email"
                          placeholder="Endereço de email"
                        />
                      </Col>
                      <Col>
                        <textarea
                          rows="6"
                          name="message"
                          placeholder="Mensagem"
                        ></textarea>
                        <button type="submit">
                          <span>Enviar</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
