import React from 'react';
import '../styles/rocket.css';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function Rocket({
  id, name, description, images, reserved,
}) {
  const CTAButton = reserved ? <Button variant="outline-secondary" className="CTABtn" id={id}>Cancel Reservation</Button> : <Button className="CTABtn" type="button" variant="primary" id={id}>Reserve Rocket</Button>;
  return (
    <div className="rocketCard" id={id}>
      <img src={images[0]} className="cardImage" alt="rocket" />
      <div className="details">
        <h2 className="title">{name}</h2>
        <p className="description">
          {reserved && <span className="reserveBadge">reserved</span>}
          {description}
        </p>
        {CTAButton}
      </div>
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
