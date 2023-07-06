import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge } from 'react-bootstrap';
import { fetchDragons, reserveDragon } from '../redux/dragons/dragonsSlice';
import '../styles/dragon.css';

const Dragons = () => {
  const [reserved, setReserved] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  const setReservedValue = (id) => {
    const updatedReserved = [...reserved];
    const index = updatedReserved.indexOf(id);
    if (index !== -1) {
      updatedReserved.splice(index, 1);
    } else {
      updatedReserved.push(id);
    }
    setReserved(updatedReserved);
    dispatch(reserveDragon(id));
  };

  const dragon = useSelector((state) => state.dragon.dragons);

  return (
    <>
      {dragon.slice(0, 2).map((element) => (
        <div className="dragon-section" key={element.id}>
          <img src={element.flickr_images} alt="dragon" className="dragon-picture" />
          <div className="dragon-details">
            <h3>{element.name}</h3>
            <p className="dragon-writeup">
              {reserved.includes(element.id) && <Badge bg="success">reserved</Badge>}
              {' '}
              {element.description}
            </p>
            <button
              type="submit"
              className={`reserve-btn ${reserved.includes(element.id) ? 'unreserve' : ''}`}
              onClick={() => setReservedValue(element.id)}
            >
              {reserved.includes(element.id) ? 'Cancel Reservation' : 'Reserve Dragon'}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

const Dragons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  const dragon = useSelector((state) => state.dragon.dragons);
  return (
    <>
      {dragon.slice(0, 2).map((element) => (
        <div className="dragon-section" key={element.id}>
          <img src={element.flickr_images} alt="dragon" className="dragon-picture" />
          <div className="dragon-details">
            <h2>{element.name}</h2>
            <p className="dragon-writeup">
              {element.description}
            </p>
            <button type="submit" className="reserve-btn">Reserve Dragon</button>
          </div>
        </div>
      ))}
    </>

  );
};
export default Dragons;
