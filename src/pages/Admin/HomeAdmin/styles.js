import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: flex-start;

  > div {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
  }

  /* MENU */
  header.menu-active + main {
    display: none;
  }

  overflow: hidden;
`;

export const Main = styled.main`
  max-height: 100vh;

  padding-bottom: clamp(2.4rem, 9.783vw - 1.787rem, 12.3rem);

  overflow-y: auto;
`;

export const DashBoard = styled.div`
  display: flex;
`;
