import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 50px auto;

  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
`;

export const NoInfoContainer = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
  }
`;
