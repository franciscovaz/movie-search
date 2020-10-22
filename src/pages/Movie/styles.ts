import styled from 'styled-components';

import NoInfoImg from '../../assets/Illustrations/illustration-empty-state.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;

  color: white;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 15% 0;

  width: 100%;
  max-width: 50%;
`;

export const MovieCover = styled.div`
  flex: 1;
  background: url('https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg')
    no-repeat center;
  background-size: cover;

  margin: 15% 0;
  border-radius: 20px;
`;

export const TimerInfo = styled.div``;
export const MovieRate = styled.div``;
export const MovieDescription = styled.div``;
export const MovieTypeAndCast = styled.div``;
export const MovieTypeAndCastInformation = styled.div``;
