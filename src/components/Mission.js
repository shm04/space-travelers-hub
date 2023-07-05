import React from 'react';
import '../styles/missions.css';

const Mission = () => (
  <div className="missionDiv">
    <h2 className="titleM">Thaicom</h2>
    <p className="descriptionM">
      Thaicom is the name of a series of communications satellites operated from
      Thailand, and also the name of Thaicom Public Company Limited, which is
      the company that owns and operates the Thaicom satellite fleet and other
      telecommunication businesses in Thailand and throughout the Asia-Pacific
      region. The satellite projects were named Thaicom by the King of Thailand,
      His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage
      between Thailand and modern communications technology.
    </p>
    <div className="statusM">
      <p>NOT A MEMBER</p>
    </div>
    <div className="joinBtn">
      <button type="button">
        Join Mission
      </button>
    </div>
  </div>
);

export default Mission;
