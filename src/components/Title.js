import React from 'react';
import { TitleWrapper } from './Title.styled';

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
    </TitleWrapper>
  );
};

export default Title;
