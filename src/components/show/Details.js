import React from 'react';
import { DetailsWrapper } from './Details.styled';

const Details = ({ status, premiered, network }) => {
  return (
    <DetailsWrapper>
      <p>
        Premiered {network ? `on ${network.name}` : null} ({premiered})
      </p>
      <p>
        Status: <span>{status}</span>
      </p>
    </DetailsWrapper>
  );
};

export default Details;
