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

  > div {
    display: flex;

    align-items: center;
    gap: clamp(1.6rem, 3.063vw + 0.289rem, 4.7rem);

    margin-top: clamp(1.6rem, 2.569vw + 0.5rem, 4.2rem);
  }

  img {
    width: clamp(26.4rem, 12.451vw + 21.071rem, 39rem);
    height: clamp(26.4rem, 12.451vw + 21.071rem, 39rem);

    object-fit: cover;
    clip-path: circle();
  }

  @media (max-width: ${breakpoints.MD}) {
    > div {
      width: min-content;

      flex-direction: column;

      margin-inline: auto;
    }
  }
`;

export const Info = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4.8rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2 {
      font-family: ${({ theme }) => theme.FONT.FAMILY_SECONDARY};
      font-size: 3rem;
      font-weight: 500;
      line-height: 140%;
    }

    span {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};

      padding: 0.6rem 1rem;

      border-radius: 0.5rem;
    }

    p {
      font-family: ${({ theme }) => theme.FONT.FAMILY_SECONDARY};
      font-size: clamp(1.6rem, 0.791vw + 1.262rem, 2.4rem);
      line-height: 140%;
    }
  }

  > :last-child {
    width: max-content;

    margin-left: auto;

    flex-direction: row;
  }

  @media (max-width: ${breakpoints.MD}) {
    flex-direction: column;

    > div {
      align-items: center;
    }

    h2 {
      text-align: center;
    }

    p {
      text-align: center;
    }

    > :last-child {
      width: 100%;
    }
  }
`;

export const Ingredients = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: ${breakpoints.MD}) {
    justify-content: center;
    gap: 2.4rem;
  }
`;
