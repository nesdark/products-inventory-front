import styled from 'styled-components';

export const Container = styled.div`
  min-width: 13.2rem;

  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.8rem;

  padding: 0.8rem 1.6rem;

  background-color: ${({ theme, $isNew }) =>
    $isNew ? 'transparent' : theme.COLORS.LIGHT_600};
  color: ${({ theme, $isNew }) =>
    $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT};
  border: ${({ theme, $isNew }) =>
    $isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : `none`};
  border-radius: 0.8rem;

  svg {
    color: ${({ theme, $isNew }) =>
      $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT};
  }

  input {
    width: 100%;

    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.LIGHT};
    font-size: 1.6rem;
    line-height: 100%;
  }
`;
