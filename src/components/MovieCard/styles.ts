import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.5);
  padding: 12px;

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

  &:hover .imgBox > img {
    opacity: 0.2;
  }

  & .content {
    opacity: 0;
  }

  &:hover .content {
    opacity: 1;
    position: absolute;
    bottom: 12px;
    left: 12px;
    width: 80%;
    color: #fff;

    p {
      font-weight: bold;
      margin-bottom: 6px;
    }
  }

  & .favouritesIcon {
    opacity: 0;
  }

  &:hover .favouritesIcon {
    opacity: 1;
    position: absolute;
    top: 12px;
    right: 12px;
    width: 24px;
    height: 24px;
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
