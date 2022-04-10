import styled from 'styled-components';
import { SearchCard, Summ, Title } from '../styled';

export const StyledShowCard = styled(SearchCard)`
  .btns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration: none;
      color: #1167b1;
      &:hover {
        color: #bbc2cc;
      }
      &:active {
        text-decoration-color: blue;
      }
    }
    button {
      outline: none;
      border: 1px solid #8e8e8e;
      border-radius: 15px;
      padding: 5px 20px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const TitleLink = styled(Title)`
  .titlelink {
    text-decoration: none;
    color: #1167b1;
    &:hover {
      color: #bbc2cc;
    }
    &:active {
      text-decoration-color: lavender;
    }
  }
`;

export const Summa = styled(Summ)`
  .summary {
    text-align: center;
  }
`;
