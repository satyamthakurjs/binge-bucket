import styled from 'styled-components';
import { Msg } from '../components/styled';

export const Msgs = styled(Msg)`
  .messages {
    font-family: 'Bitter', serif;
    color: black;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
  }
`;
