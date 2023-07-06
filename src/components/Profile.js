import React from 'react';
import {
  ListGroup, Container, Row, Col,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Profile() {
  const reservedRockets = useSelector((state) => state.rocket.reservedRockets);

  return (
    <Container style={{ marginTop: '2rem' }}>
      <Row sm={1} md={2} lg={3}>
        <Col className="missionsSection">
          <h1 className="missionTitle">My Missions</h1>
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className="rocketsSection">
          <h1 className="rocketTitle">My Rockets</h1>
          <ListGroup>
            {reservedRockets.map((rocket) => (
              <ListGroup.Item key={rocket.id}>{rocket.name}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col className="dragonsSection">
          <h1 className="dragonTitle">My Dragons</h1>
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
