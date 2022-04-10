import styled from 'styled-components';
import FadeIn from 'react-fade-in';

export const FlexGrid = styled(FadeIn)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Star = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: ${props => (props.active ? '#ffc806' : '#ddd')};
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`;

export const SearchCard = styled.div`
  width: 300px;
  height: 100%;
  margin: 0 15px 40px;

  .img-wrapper {
    width: 100%;
    border-radius: 20px;
    height: 420px;
    border: 1px solid #ddd;

    img {
      border-radius: 20px;
      border-style: solid;
      border-width: 3px;
      border-color: #424549;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  h1 {
    margin: 10px 0;
    font-size: 21px;
  }

  p {
    margin: 0;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-family: 'Bitter', serif;
  text-decoration: none;
`;

export const Summ = styled.p`
  font-family: 'Bitter', serif;
  text-decoration: none;
`;

export const Msg = styled.div`
  font-family: 'Bitter', serif;
  font-size: 18px;
`;
