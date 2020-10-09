import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 50px auto;

  .row {
    display: flex;
    justify-content: space-around;
    flex-flow: wrap;
  }
`;

export const CardContainer = styled.div`
  width: 20%;
  margin-bottom: 50px;

  @media (max-width: 1345px) {
    width: 25%;
  }
  @media (max-width: 1075px) {
    width: 30%;
  }
  @media (max-width: 810px) {
    width: 40%;
  }

  @media (max-width: 540px) {
    width: 100%;
    flex: 0 1 calc(25% - 1em);
  }
`;
