import React from 'react';

const CastCard = ({ image, name, gender, country, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img src={image} alt="cast" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `From ${country}` : null}</p>
      {birthday ? <p>Born {birthday}</p> : null}
      <p>{deathday ? `Died ${deathday}` : null}</p>
    </div>
  );
};

export default CastCard;
