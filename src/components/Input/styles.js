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

  border-radius: 0.5rem;

  padding: 1.6rem 1.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  input[type='file'] {
    display: none;
  }

  &:has(input[type='file']) {
    width: 100%;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    max-width: 24rem;

    border: none;
    border-radius: 0.8rem;

    padding: 1.2rem 1.4rem;

    color: ${({ theme }) => theme.COLORS.LIGHT};
    font-size: 1.6rem;

    background: ${({ theme }) => theme.COLORS.DARK_800};
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
  }
`;
