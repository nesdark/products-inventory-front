import styled from 'styled-components';
import theme from '../../styles/theme';
import { breakpoints } from '../../styles/breakpoints';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-template-areas:
    'HEADER'
    'MAIN'
    'FOOTER';

  grid-template-rows: 1fr auto 1fr;

  overflow: auto;

  /* MENU */
  header.menu-active + main {
    display: none;
  }
`;

export const Main = styled.main`
  grid-area: MAIN;

  padding: 3.7rem clamp(5.6rem, 6.522vw + 2.809rem, 12.2rem);

  h2 {
    margin-block: 2.4rem 3.2rem;

    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;
  }
`;

export const Edit = styled.form`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-template-areas:
    'A A B'
    'C D E'
    'F F F';
  grid-gap: 3.2rem;

  > * {
    display: flex;
    flex-direction: column;
    align-items: left;

    color: ${({ theme }) => theme.COLORS.LIGHT};

    font-size: 1.6rem;
    line-height: 100%;
  }

  > label {
    gap: 1.6rem;

    input {
      height: 4.8rem;
    }
  }

  select {
    max-width: 33.2rem;
    height: 4.8rem;

    padding: 1.3rem;

    border: none;
    border-radius: 0.5rem;

    color: ${({ theme }) => theme.COLORS.LIGHT};
    font-size: 1.6rem;

    background: ${({ theme }) => theme.COLORS.BG_GRAY};
  }

  .ingredients {
    max-width: 100%;

    display: flex;
    gap: 1.6rem;

    > div {
      padding: 0.8rem;

      display: flex;
      gap: 1.6rem;

      overflow: auto;

      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
  }

  textarea {
    height: 14.4rem;

    padding: 1.4rem;

    border-radius: 0.8rem;
    border: none;
    background: ${({ theme }) => theme.COLORS.BG_GRAY};

    font-size: 1.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  a {
    max-width: fit-content;
    margin-left: auto;
  }

  > a button {
    max-width: max-content;

    display: flex;
    padding: 1.2rem 2.4rem;
    justify-content: center;
    align-items: center;

    margin-left: auto;

    border-radius: 0.5rem;
    background: ${({ theme }) => theme.COLORS.LIGHT_BLUE_GRADIENT};

    color: ${({ theme }) => theme.COLORS.LIGHT};

    font-family: ${({ theme }) => theme.FONT.FAMILY_SECONDARY};
    font-size: 1.4rem;

    line-height: 2.4rem;

    &:hover {
      opacity: 0.8;
    }
  }

  > label:nth-child(1) {
    grid-area: A;
  }
  > label:nth-child(2) {
    grid-area: B;
  }
  > div:nth-child(3) {
    grid-area: C;
  }
  > label:nth-child(4) {
    grid-area: D;
  }
  > label:nth-child(5) {
    grid-area: E;
  }
  > a {
    grid-area: F;
  }

  @media (max-width: ${breakpoints.MD}) {
    display: flex;
    flex-direction: column;

    label {
      justify-content: start;
    }

    select {
      max-width: 100%;
    }

    > a button {
      min-width: 100%;
    }
  }
`;
