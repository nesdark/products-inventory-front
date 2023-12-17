import styled from 'styled-components';
import theme from '../../pages/styles/theme';
import { breakpoints } from '../../pages/styles/breakpoints';

export const Container = styled.div`
  width: clamp(21rem, 9.289vw + 17.025rem, 30.4rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  padding: 2.4rem;

  &.admin {
    padding: 7rem 2.4rem;
  }

  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_200};
  background-color: ${({ theme }) => theme.COLORS.DARK_300};

  position: relative;

  > img {
    width: clamp(8.8rem, 8.696vw + 5.078rem, 17.6rem);
    height: clamp(8.8rem, 8.696vw + 5.078rem, 17.6rem);

    object-fit: cover;
    clip-path: circle();
  }

  > h3 {
    width: max-content;

    color: ${({ theme }) => theme.COLORS.LIGHT};
    font-family: ${({ theme }) => theme.FONT.FAMILY_SECONDARY};
    font-size: clamp(1.4rem, 0.988vw + 0.977rem, 2.4rem);
    font-weight: 700;
    line-height: 140%;
  }

  > p {
    max-width: 25.6rem;

    font-size: clamp(1rem, 0.462vw + 0.734rem, 1.4rem);
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-align: center;
  }

  > strong {
    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};

    font-size: clamp(1.6rem, 1.581vw + 0.923rem, 3.2rem);
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }

  @media (max-width: ${breakpoints.LG}) {
    min-width: 25rem;
  }

  @media (max-width: ${breakpoints.SM}) {
    > p {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }

    > div {
      flex-direction: column;
    }
  }
`;

export const Favorite = styled.button`
  color: white;

  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;
