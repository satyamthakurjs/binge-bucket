import React from 'react';
import { StyledCastCard } from './CastCard.styled';

const CastCard = ({ image, name, gender, country, birthday, deathday }) => {
  return (
    <StyledCastCard>
      <div className="img-wrapper">
        <img src={image} alt="cast" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `From ${country}` : null}</p>
      {birthday ? <p>Born {birthday}</p> : null}
      <p className="deathday">{deathday ? `Died ${deathday}` : null}</p>
    </StyledCastCard>
  );
};

export default CastCard;
