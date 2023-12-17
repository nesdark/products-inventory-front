import styled from 'styled-components';
import theme from '../styles/theme';
import { breakpoints } from '../styles/breakpoints';

export const Container = styled.main`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(7.3rem, 23.024vw - 2.554rem, 30.6rem);

  @media (max-width: ${breakpoints.LG}) {
    flex-direction: column;
    gap: 7.3rem;
  }
`;

export const FormScreen = styled.form`
  width: clamp(31.6rem, 15.81vw + 24.833rem, 47.6rem);

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  padding: 6.4rem;

  border-radius: 1.6rem;
  background: ${({ theme }) => theme.COLORS.DARK_700};

  h2 {
    font-family: ${({ theme }) => theme.FONT.FAMILY_SECONDARY};
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;

    text-align: center;
  }

  button:last-child {
    font-family: ${({ theme }) => theme.FONT.FAMILY_SECONDARY};

    font-size: 1.4rem;
    line-height: 2.4rem;

    margin-inline: auto;
  }

  @media (min-width: ${breakpoints.LG}) {
    label input {
      background: transparent !important;

      border-radius: 0.5rem;
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT};
    }
  }

  @media (max-width: ${breakpoints.LG}) {
    h2 {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }

    padding: 0;
    background: none;
  }
`;
