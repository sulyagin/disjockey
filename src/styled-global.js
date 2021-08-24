import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    user-select: none;
  }

  html {
    font-size: 62.5%;
  }

  #root {
    height: 100%;
  }

  body {
    height: 100vh;
    min-width: 101.2rem;
    background: #262626;
    color: #fff;
    font: normal 1.8rem/2.2rem 'Roboto', sans-serif;
    padding: 2.5% 5%;
    transition: background-color 0.1s;
  }

  body.is-action {
    background: #333;
  }

  h1, h2, h3 {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
`;
