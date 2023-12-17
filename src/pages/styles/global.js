import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    font-size: 62.5%;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT};

    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body * {
    font-family: ${({ theme }) => theme.FONT.FAMILY_PRIMARY};
  }

  html, body {
    min-height: 100vh;
  }

  button {
    background: none;
    border: none;
  }

  a {
    text-decoration: none;
  }

  a, button:not(:disabled) {
    cursor: pointer;
    transition: filter 200ms;
  }

  a:hover, button:hover:not(:disabled) {
    filter: brightness(1.1);
    
  }
`;
