import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 50px auto;

  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
`;

export const CardContainer = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.5);

  .imgBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.5s;
    }
  }

  &:hover .imgBox img {
    opacity: 0.2;
  }

  &:hover .content {
    position: absolute;
    bottom: 20px;
    left: 10%;
    width: 80%;
    color: #fff;
  }

  /* width: 20%; */
  margin-bottom: 50px;

  /* @media (max-width: 1345px) {
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
  } */
`;

export const HoverCardContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
`;
