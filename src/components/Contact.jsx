import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      `${process.env.REACT_APP_YOUR_SERVICE_ID}`,
      `${process.env.REACT_APP_YOUR_TEMPLATE_ID}`,
      form.current,
      `${process.env.REACT_APP_YOUR_PUBLIC_KEY}`,
    );
    e.target.reset();
    console.log(process.env);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" name="name" placeholder="Name" />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />
                </Col>
                <Col>
                  <textarea
                    rows="6"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                  <button type="submit">
                    <span>Enviar</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
