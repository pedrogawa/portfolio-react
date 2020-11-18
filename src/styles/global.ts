import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea, span, strong {
    font-family: 'Poppins', serif;
    font-size: 16px;
  }

  strong {
    font-weight: 500;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: bold;
  }

  button {
    cursor: pointer;
    outline: 0;
  }

  .projects-body {
    background: #f0f0f0 url(${githubBackground}) no-repeat 70% 150px;
    -webkit-font-smoothing: antialiased;
  }

`;
