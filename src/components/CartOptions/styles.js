import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  > svg {
    font-size: 2.4rem;
  }

  p {
    font-size: clamp(1.6rem, 0.395vw + 1.431rem, 2rem);
  }
`;
