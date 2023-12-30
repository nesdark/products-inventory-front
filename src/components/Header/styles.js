import styled from 'styled-components';
import theme from '../../pages/styles/theme';
import { breakpoints } from '../../pages/styles/breakpoints';

export const Container = styled.header`
  animation: TopToBottom 500ms forwards;

  width: 100%;
  min-height: 10.4rem;

  padding-inline: 2.3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  border-bottom: 1px solid rgba(255, 255, 255, 0.32);

  background: ${({ theme }) => theme.COLORS.BG};

  > h2 {
    font-size: 2.1rem;
    font-weight: 400;
  }

  Button {
    max-width: max-content;

    div {
      width: max-content;
    }
  }

  @media (max-width: ${breakpoints.MD}) {
    justify-content: space-between;

    &.admin > a button:not(.open-menu, .close-menu) {
      visibility: hidden;
      opacity: 0;

      width: 1px;
      padding: 0;
    }

    > :last-child {
      display: none;
    }

    > button.open-menu {
      display: block;
    }

    &.menu-active .open-menu,
    > h2,
    > label,
    &.menu-active > h1,
    &.menu-active > button,
    &.menu-active > a button {
      display: none;
    }

    .open-menu,
    &.menu-active .close-menu,
    &.menu-active > h2 {
      display: block;
    }
  }

  /* MENU */
  .open-menu,
  .close-menu,
  > h2 {
    display: none;
  }

  &.menu-active {
    justify-content: left;
  }

  &.menu-active > .menu {
    display: flex;

    position: fixed;
    top: 10.4rem;
    left: 0;
  }

  @keyframes TopToBottom {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Menu = styled.ul`
  grid-area: MAIN;

  width: 100%;
  height: calc(100vh - 9.3rem - 10.4rem);

  display: none;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  padding: 3.6rem 2.8rem;

  > label {
    margin-bottom: 3.6rem;
  }

  > li {
    padding: 1rem;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }
`;
