import styled from 'styled-components';
import theme from '../../pages/styles/theme';
import { breakpoints } from '../../pages/styles/breakpoints';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: clamp(3.6rem, 5.04vw + 1.443rem, 8.7rem)
    clamp(0.8rem, 9.091vw - 3.091rem, 10rem)
    clamp(2.2rem, 6.917vw - 0.76rem, 9.2rem)
    clamp(15.3rem, 44.17vw - 3.605rem, 60rem);

  border-radius: 0.8rem;

  margin: clamp(4.4rem, 11.858vw - 0.675rem, 16.4rem) auto 6.2rem;

  background: ${({ theme }) => theme.COLORS.BANNER_GRADIENT};

  position: relative;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > .text {
    animation: rightToLeft 500ms forwards;
  }

  h2 {
    font-family: ${({ theme }) => theme.FONT.FAMILY_SECONDARY};
    font-weight: 500;
    font-size: clamp(1.8rem, 2.174vw + 0.87rem, 4rem);

    margin-bottom: 0.8rem;
  }

  p {
    font-size: clamp(1.2rem, 0.395vw + 1.031rem, 1.6rem);
  }

  @keyframes rightToLeft {
    from {
      opacity: 0;
      transform: translateX(50%);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const Fruits = styled.div`
  animation: leftToRight 500ms forwards;

  > img {
    width: clamp(19.1rem, 45.949vw - 0.566rem, 65.6rem);
    height: clamp(14.9rem, 25.988vw + 3.777rem, 41.2rem);
  }

  position: absolute;
  right: clamp(21.5rem, 32.312vw + 7.67rem, 54.2rem);
  bottom: -1.4rem;

  @media (max-width: ${breakpoints.MD}) {
    bottom: 0;
  }

  @keyframes leftToRight {
    from {
      opacity: 0;
      transform: translateX(-50%);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
