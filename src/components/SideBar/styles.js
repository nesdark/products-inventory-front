import styled from 'styled-components';

export const Container = styled.aside`
  * {
    color: white;
  }

  animation: 600ms leftToRight;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  width: 7.8rem;
  height: 100vh;
  padding-top: 2.6rem;

  background: url('../../../public/blue-green-gradient.png') no-repeat;
  transition: 0.3s;

  border-right: 1px solid rgba(255, 255, 255, 0.32);

  ul li .sidebar-opener svg,
  .log-out svg {
    width: 3rem;
    height: 3rem;
  }

  ul li .sidebar-opener:hover,
  .log-out button:hover {
    transform: scale(1.05);

    transition: 200ms;
  }

  li svg {
    font-size: 2rem;
  }

  & ul li button {
    width: 100%;
  }

  & > div {
    padding-block: 1.8rem;
  }

  /* ul li:first-child {
    width: fit-content;

    margin-left: auto;
  } */

  .legend,
  input,
  .profile,
  .user {
    visibility: hidden;
    opacity: 0;
  }

  &.expanded .legend,
  &.expanded input,
  &.expanded .profile,
  &.expanded .user {
    visibility: visible;
    opacity: 1;
  }

  &.expanded {
    width: 35rem;
    transition: 0.3s;
  }

  & ul {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 3.4rem;
    padding-inline: 1.4rem;
  }

  &.expanded ul {
    padding-inline: 2.7rem;
  }

  &.expanded ul li button {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 1.3rem;

    width: 100%;

    font-size: 1.6rem;
  }

  li:not(:first-child) button:hover {
    transform: scale(1.05);
    svg {
      animation: 600ms spin;
    }
  }

  transition: 200ms;

  &.expanded .profile {
    &:hover {
      transform: scale(1.05);
    }

    svg {
      width: 3.5rem;
      height: 3.5rem;
    }

    transition: 200ms;
  }

  &.expanded > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    padding-block: 1.8rem;

    padding-inline: 1.3rem;
  }

  & .profile {
    display: flex;
    gap: 0.9rem;
  }

  & .profile .legend {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  &.expanded .log-out .profile span {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.2rem;
  }

  &.expanded .log-out .profile {
    font-size: 1.2rem;
    line-height: 1.8rem;
  }

  & .profile img {
    height: 4.5rem;
    border-radius: 1.2rem;
  }

  transition: 200ms;

  @keyframes leftToRight {
    0% {
      transform: translateX(-50%);
      opacity: 0;
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
