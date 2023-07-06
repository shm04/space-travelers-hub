import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons } from '../redux/dragons/dragonsSlice';

const Dragons = () => {
  const dispatch = useDispatch();
  dispatch(fetchDragons());
  const dragon = useSelector((store) => store.dragon.dragons);
  console.log(dragon);
  return (
    <>
      {dragon.map((element) => (
        <div className="dragon-section" key={element.id}>
          <div className="dragon-details">
            <h2>Dragons</h2>
            <p className="dragon-writeup">
              {element.name}
            </p>
            <button type="submit">Reserve Dragon</button>
          </div>
        </div>
      ))}
    </>

  );
};
export default Dragons;
