import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root{
    --main-yellow: #FF9F1C;
    --main-Red: #FF4040;
    --main-Green: #2EC4B6;

    --dark-grey: #OA1014;
    --grey: #1B2329;
    --mid-grey: #353F4C;
    --light-grey: #7A8C99;
    --white: #FFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font: 16px Roboto, sans-serif;
    background-color: #0A1014;
    margin: 0 13%;
  }
`;
