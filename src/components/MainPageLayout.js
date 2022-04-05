import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="BingeBucket"
        subtitle="Like what you see? Put it in the Bucket!"
      />
      <Navs />

      {children}
    </div>
  );
};

export default MainPageLayout;
