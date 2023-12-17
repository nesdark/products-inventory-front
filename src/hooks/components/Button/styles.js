import styled from 'styled-components';
import { breakpoints } from '../../pages/styles/breakpoints';

export const Container = styled.button`
  width: 100%;

  header &.height {
    height: 5.6rem;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  border: none;
  border-radius: 0.5rem;

  padding: 1.2rem 4.65rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.FONT.FAMILY_SECONDARY};
  color: ${({ theme }) => theme.COLORS.LIGHT};

  span {
    display: none;
    justify-content: center;
    align-items: center;

    padding-inline: 0.75rem;
    border-radius: 50%;

    font-size: 1.4rem;
    line-height: 2.4rem;

    background: ${({ theme }) => theme.COLORS.TOMATO_100};

    position: absolute;
    top: -20%;
    right: -20%;
  }

  @media (max-width: ${breakpoints.LG}) {
    &.responsiveHide div {
      display: none;
    }
  }

  @media (max-width: ${breakpoints.MD}) {
    &.responsiveHide {
      width: fit-content;

      background: none;

      padding: 0;

      position: relative;
    }

    &.admin {
      display: none;
    }

    &.responsiveHide span {
      display: flex;
    }
  }
`;
