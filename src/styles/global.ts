import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #1F2229;
    --background2: #2E303C;
    --background-button: #373945;
    --background-button2: #4B4D59;
    --yellow: #FAE800;
    --gray: #BEC2C6;
    --white: #FBFBFB;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font: 16px "Poppins", Arial, sans-serif;
    color: #FBFBFB;
    background: var(--background);
  }
  input, textarea {
    font-family: "Poppins";
  }
  button {
    cursor: pointer;
  }
`;
