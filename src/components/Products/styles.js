import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  font-size: 1.6rem;
  font-weight: normal;
  text-align: left;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    color: #969cb3;

    overflow-x: auto;
  }

  thead th {
    padding: 2rem 3.2rem;
  }

  thead tr th:first-child,
  tbody tr td:first-child {
    border-radius: 0.25rem 0 0 0.25rem;
  }

  thead tr th:last-child,
  tbody tr td:last-child {
    border-radius: 0 0.25rem 0.25rem 0;
  }

  table tbody tr {
    opacity: 0.7;
  }

  table tbody tr:hover {
    opacity: 1;
    cursor: pointer;
  }

  table tbody td {
    background-color: ${({ theme }) => theme.COLORS.BG_GRAY};

    padding: 2rem 3.2rem;

    color: white;
  }
`;
