import styled from 'styled-components';
import theme from '../../pages/styles/theme';
import { breakpoints } from '../../pages/styles/breakpoints';

export const Container = styled.label`
  cursor: pointer;

  width: 100%;

  display: flex;
  align-self: center;
  justify-content: center;
  gap: 1.4rem;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_BORDER};
  border-radius: 0.5rem;

  padding: 1.2rem 1.4rem;

  background-color: ${({ theme }) => theme.COLORS.BG_GRAY};

  &:has(input:focus) {
    filter: brightness(1.1);
    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_BORDER};
  }

  > input {
    width: 100%;
    max-width: 34.4rem;

    border: none;
    background: none;

    font-size: ${({ theme }) => theme.FONT.SMALL};

    color: ${({ theme }) => theme.COLORS.LIGHT};

    :placeholder-shown {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    outline: none;
  }
`;
