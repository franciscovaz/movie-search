import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
    background-color: #0A1014;
    margin: 0 13%;
  }
`;
