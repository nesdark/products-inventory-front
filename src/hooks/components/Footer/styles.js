import styled from 'styled-components';
import theme from '../../pages/styles/theme';

export const Container = styled.footer`
  grid-area: FOOTER;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3rem clamp(2.4rem, 9.783vw - 1.787rem, 12.3rem);

  background: ${({ theme }) => theme.COLORS.DARK_600};

  p {
    width: max-content;

    font-family: 'DM Sans', sans-serif;
    font-size: clamp(1.2rem, 0.198vw + 1.115rem, 1.4rem);
  }
`;

export const Logo = styled.div`
  min-width: max-content;

  display: flex;
  align-items: center;
  gap: 1rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_700};

  svg {
    width: clamp(2.2rem, 0.791vw + 1.862rem, 3rem);
  }

  h2 {
    font-size: clamp(1.5rem, 0.791vw + 1.262rem, 2.4rem);
  }
`;
