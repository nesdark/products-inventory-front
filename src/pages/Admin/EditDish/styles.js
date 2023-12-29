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
  padding: 3.7rem clamp(5.6rem, 6.522vw + 2.809rem, 12.2rem);

  > a {
    width: fit-content;
    display: flex;
    margin-bottom: 2.4rem;
  }

  section h3 {
    margin-bottom: 3.2rem;

    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;
  }
`;
export const Edit = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;

  .flex-item {
    width: 100%;

    display: flex;
    align-items: center;
    gap: 3rem;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    width: 100%;

    font-size: 1.6rem;

    input,
    select {
      padding: 1.6rem 1.4rem;

      border: none;
      border-radius: 0.8rem;

      color: ${({ theme }) => theme.COLORS.LIGHT};
      font-size: 1.6rem;

      background: ${({ theme }) => theme.COLORS.DARK_800};
    }
  }

  .options {
    width: fit-content;

    margin-top: 2rem;

    display: flex;
    flex-direction: row;
    gap: 3.2rem;

    margin-left: auto;
  }

  > .options button {
    max-width: max-content;

    display: flex;
    padding: 1.2rem 2.4rem;
    justify-content: center;
    align-items: center;

    margin-left: auto;

    border-radius: 0.5rem;
    background: ${({ theme }) => theme.COLORS.DARK_800};

    &[type='submit'] {
      background: ${({ theme }) => theme.COLORS.TOMATO_400};
    }

    color: ${({ theme }) => theme.COLORS.LIGHT};

    font-family: ${({ theme }) => theme.FONT.FAMILY_SECONDARY};
    font-size: 1.4rem;

    line-height: 2.4rem;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: ${breakpoints.MD}) {
    .flex-item {
      display: flex;
      flex-direction: column;
    }

    label {
      justify-content: start;
    }

    .options {
      width: 100%;

      margin-left: 0;

      button {
        max-width: none;
        width: 100%;

        margin: 0;
      }
    }
  }
`;
