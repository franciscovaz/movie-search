import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    padding: 12px 12px 12px 36px;
    border: 0;
    border-radius: 8px;
    color: var(--dark-grey);

    &::placeholder {
      font-size: 14px;
    }
  }

  img {
    position: absolute;
    margin-left: 12px;
  }
`;
