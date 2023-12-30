import styled from 'styled-components';
import theme from '../../pages/styles/theme';

export const Container = styled.button`
  background: none;
  border: none;

  > svg {
    color: ${({ theme, $style }) => {
      return $style ? $style : theme.COLORS.LIGHT;
    }};
  }
`;
