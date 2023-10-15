import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  #__next {
    height: 100vh;
  }

  ol, ul {
    list-style: none;
  }

  input {
    border: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: inherit;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
