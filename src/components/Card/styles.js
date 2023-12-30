import styled from 'styled-components';
import theme from '../../pages/styles/theme';
import { breakpoints } from '../../pages/styles/breakpoints';

export const Container = styled.div`
  width: 100%;
  max-width: 34.8rem;

  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1.4rem;

  padding: 2.5rem 3.2rem;

  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.15);

  margin: clamp(4.4rem, 11.858vw - 0.675rem, 16.4rem) auto 6.2rem;

  border-radius: 24px;
  background-color: #0f1012;
  background-image: linear-gradient(
    2deg,
    rgba(0, 0, 0, 0.7) 1.31%,
    rgba(0, 0, 0, 0.5) 33.35%,
    #0f1012 97.44%
  );

  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    gap: 3.2rem;
  }

  h2 {
    font-family: ${({ theme }) => theme.FONT.FAMILY_SECONDARY};
    font-weight: 500;
    font-size: clamp(1.8rem, 2.174vw + 0.87rem, 4rem);
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
