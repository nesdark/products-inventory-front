import styled from 'styled-components';
import { breakpoints } from '../../pages/styles/breakpoints';

export const Container = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: end;

  div {
    min-width: max-content;
    display: flex;
    align-items: center;
    gap: 1rem;

    > img {
      width: 5rem;
      height: 5rem;

      clip-path: circle();

      object-fit: cover;
    }

    position: relative;
  }

  span {
    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};

    font-size: 1.2rem;
    font-weight: 400;
    line-height: 160%;
    position: absolute;
    bottom: 0.2rem;
    right: 0.9rem;
  }

  @media (max-width: ${breakpoints.MD}) {
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;

    > span {
      line-height: 0%;
    }
  }
`;
