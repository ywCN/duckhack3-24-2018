import React from 'react';

import GoogLogin from './GoogLogin';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Log your spending. Control your budget.</h1>
      <GoogLogin />
    </div>
  );
};

export default Landing;
