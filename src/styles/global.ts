import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline-color: ${(props) => props.theme.colors.outline};
    color: ${(props) => props.theme.colors.text};
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyles;
