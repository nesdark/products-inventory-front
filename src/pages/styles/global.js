import { createGlobalStyle } from 'styled-components';
import theme from './theme';

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

    background-color: ${({ theme }) => theme.COLORS.BG};
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

  /* SCROLLBAR */

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  margin-right: 10px;
}

::-webkit-scrollbar-corner {
  border: none;
  background: none;
}

::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.COLORS.LIGHT_BLUE_GRADIENT};
  border-radius: 3px;
  cursor: move;
}

::-webkit-scrollbar-track {
  background-color: transparent;
  border: none;
}

`;
