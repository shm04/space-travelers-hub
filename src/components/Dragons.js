import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons, reserveDragon } from '../redux/dragons/dragonsSlice';
import '../styles/dragon.css';

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
            <button
              type="submit"
              className="reserve-btn"
              onClick={() => dispatch(reserveDragon(element.id))}
            >
              Reserve Dragon
            </button>
          </div>
        </div>
      ))}
    </>

  );
};
export default Dragons;
