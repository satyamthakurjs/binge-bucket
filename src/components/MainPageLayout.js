import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title title="Binge Bucket" subtitle="Happy Binging" />
      <Navs />

      {children}
    </div>
  );
};

export default MainPageLayout;
