import styled from 'styled-components';
import theme from '../../pages/styles/theme.js';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  padding: 0.4rem 0.8rem;

  border-radius: 0.5rem;
  background: ${({ theme }) => theme.COLORS.DARK_1000};

  font-size: 1.4rem;
  line-height: 2.4rem;
`;
