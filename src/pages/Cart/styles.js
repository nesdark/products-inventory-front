import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: flex-start;

  > div {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
  }

  overflow: hidden;
`;

export const Main = styled.div`
  margin: 3.2rem 0 3.2rem 5.5rem;

  h2 {
    width: fit-content;

    background: linear-gradient(
      90deg,
      hsla(58, 100%, 67%, 1) 0%,
      hsla(204, 84%, 66%, 1) 100%
    );

    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    font-size: 4rem;
    font-weight: 700;
    line-height: 4.8rem;
  }

  > p {
    margin-top: 6rem;

    text-align: right;
    font-size: 2.4rem;

    padding-right: 5.5rem;
  }
`;

export const ShoppingCartTable = styled.table`
  width: 100%;

  border-spacing: 0 0.5rem;

  font-size: 2.4rem;

  overflow-x: auto;

  text-align: left;

  thead th {
    padding: 3.3rem 5rem 0 0;
  }

  td {
    padding: 3.3rem 5rem 3.3rem 0;

    white-space: nowrap;
    border-bottom: 1px solid #27282b;
  }

  td.name {
    max-width: 27.5rem;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    a {
      color: #fff;
    }
  }

  .prices {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .costPrice {
    font-size: 1.6rem;
    color: rgb(255 59 83);
  }
`;

export const Quantity = styled.td`
  div {
    display: flex;
    gap: 1.6rem;

    input {
      max-width: 8.6rem;

      background: none;
      border: none;

      text-align: center;
      font-size: 2.4rem;

      color: #fff;
    }
  }
`;
