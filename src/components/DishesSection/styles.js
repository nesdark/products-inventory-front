import styled from 'styled-components';
import { breakpoints } from '../../pages/styles/breakpoints';

export const Container = styled.section`
  margin-bottom: 4.7rem;

  margin-inline: clamp(2.4rem, 9.783vw - 1.787rem, 12.3rem);

  > h2 {
    margin-bottom: 2.4rem;

    font-family: ${({ theme }) => theme.FONT.FAMILY_SECONDARY};
    font-size: ${({ theme }) => theme.FONT.EXTRA_LARGE};
    font-weight: 500;
  }

  @media (max-width: ${breakpoints.LG}) {
    margin-right: 0;
  }

  @keyframes TopToBottom {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
