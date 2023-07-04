import React from 'react';
import '../styles/rocket.css';

const Rocket = () => (
  <div className="rocketCard">
    <img src="https://i.imgur.com/DaCfMsj.jpg" className="cardImage" alt="rocket" />
    <div className="details">
      <h2 className="title">Falcon 1</h2>
      <p className="description">
        <span className="reserveBadge">{}</span>
        {' '}
        The Falcon 1 was an expendable launch system privately developed
        and manufactured by SpaceX during 2006-2009.
        On 28 September 2008, Falcon 1 became the first privately-developed
        liquid-fuel launch vehicle to go into orbit around the Earth.
      </p>
      <button type="button" className="CTABtn">Reserve Rocket</button>
    </div>
  </div>
);

export default Rocket;
