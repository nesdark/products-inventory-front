import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  /* MENU */
  header.menu-active + main {
    display: none;
  }
`;

export const Main = styled.main`
  > *:not(section) {
    margin-inline: clamp(2.4rem, 9.783vw - 1.787rem, 12.3rem);
  }
`;

export const DashBoard = styled.div`
  display: flex;
`;
