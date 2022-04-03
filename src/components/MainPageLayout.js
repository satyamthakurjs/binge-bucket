import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Bucket List"
        subtitle="Like what you see ? Put it in the Bucket List !"
      />
      <Navs />

      {children}
    </div>
  );
};

export default MainPageLayout;
