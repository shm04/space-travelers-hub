import React from 'react';
import Mission from './Mission';
import '../styles/missions.css';

function Missions() {
  return (
    <section>
      <div className="headerM">
        <h2 className="titleM">Mission</h2>
        <h2 className="descriptionM">Description</h2>
        <h2 id="statusHeader" className="statusM">Status</h2>
        <span className="joinBtn" />
      </div>
      <Mission />
      <Mission />
    </section>
  );
}

export default Missions;
