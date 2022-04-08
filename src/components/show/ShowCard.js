import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from '../styled';
import { StyledShowCard } from './ShowCard.styled';

const ShowCard = ({ id, image, name, summary, onStarClick, isStarred }) => {
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';

  return (
    <StyledShowCard>
      <div className="img-wrapper">
        <Link to={`/show/${id}`}>
          <img src={image} alt="show" />
        </Link>
      </div>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <div className="btns">
        <Link to={`/show/${id}`}>Details</Link>
        <button type="button" onClick={onStarClick}>
          <Star active={isStarred} />
        </button>
      </div>
    </StyledShowCard>
  );
};

export default ShowCard;
