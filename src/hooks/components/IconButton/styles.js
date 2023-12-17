import styled from 'styled-components';
import theme from '../../pages/styles/theme';

export const Container = styled.button`
  background: none;
  border: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT};
  }
`;
