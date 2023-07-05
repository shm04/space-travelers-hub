import React from 'react';
import '../styles/missions.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { reserveMission } from '../redux/missions/missionsSlice';

function Mission({
  id, name, description, reserved,
}) {
  const dispatch = useDispatch();
  const joinBtn = reserved ? <Button variant="outline-secondary" className="CTABtn" id={id}>Leave Mission</Button> : <Button className="CTABtn" onClick={() => dispatch(reserveMission(id))} type="button" variant="primary" id={id}>Join Mission</Button>;
  const statusClass = reserved ? 'activeMember' : 'notActive';

  return (
    <div className="missionDiv" id={id}>
      <h2 className="titleM">{name}</h2>
      <p className="descriptionM">{description}</p>
      <div className="statusM">
        <p className={statusClass}>
          {reserved ? 'Active Member' : 'NOT A MEMBER'}
        </p>
      </div>
      <div className="joinBtn">
        {joinBtn}
      </div>
    </div>
  );
}

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
