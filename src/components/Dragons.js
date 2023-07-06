import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons } from '../redux/dragons/dragonsSlice';

const Dragons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  const dragon = useSelector((state) => state.dragon.dragons);
  return (
    <>
      {dragon.slice(0, 3).map((element) => (
        <div className="dragon-section" key={element.id}>
          <div className="dragon-details">
            <h2>{element.name}</h2>
            <p className="dragon-writeup">
              {element.description}
            </p>
            <button type="submit">Reserve Dragon</button>
          </div>
        </div>
      ))}
    </>

  );
};
export default Dragons;
