import React from 'react';
import { Col } from 'react-bootstrap';
import P from 'prop-types';

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href={description} target="_blank" rel="noopener noreferrer">
            Clique para acessar
          </a>
          {/* <span>{description}</span> */}
        </div>
      </div>
    </Col>
  );
};

ProjectCard.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  imgUrl: P.string.isRequired,
};
