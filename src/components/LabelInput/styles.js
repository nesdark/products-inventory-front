import styled from 'styled-components';
import theme from '../../pages/styles/theme';
import { breakpoints } from '../../pages/styles/breakpoints';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  font-size: 1.6rem;

  &.gray input {
    background: ${({ theme }) => theme.COLORS.DARK_800};
  }

  input {
    width: 100%;

    border: none;
    border-radius: 0.8rem;

    padding: 1.6rem 1.4rem;

    color: ${({ theme }) => theme.COLORS.LIGHT};
    font-size: 1.6rem;

    background: ${({ theme }) => theme.COLORS.DARK_900};
  }

  input:placeholder {
    ${({ theme }) => theme.COLORS.DARK_500}
  }
`;
