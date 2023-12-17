import styled from 'styled-components';
import theme from '../../pages/styles/theme';

export const Container = styled.button`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 2.4rem;
`;
