import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketSlices';

import Rocket from './Rocket';

function Rockets() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <section>
      <Rocket />
      <Rocket />
    </section>
  );
}

export default Rockets;
