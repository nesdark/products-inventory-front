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
`;

export const Main = styled.main`
  height: 100%;
  max-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 5rem;
  padding-bottom: clamp(2.4rem, 9.783vw - 1.787rem, 12.3rem);

  background: url('../../../../public/purple-red-gradient.png');
  background-size: contain;

  overflow-y: auto;

  h2 {
    background: linear-gradient(107deg, #e84e38 6.68%, #ba2cb8 82.69%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    font-size: 4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.8rem;
  }

  p {
    font-size: 1.2rem;
    margin-top: 1.2rem;
  }

  ul {
    width: 70%;

    display: flex;
    flex-direction: column;
    gap: 4rem;

    margin-top: 8rem;

    > li:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);
      padding-bottom: 4rem;
    }

    > li {
      div {
        display: flex;
        align-items: end;
        gap: 1rem;

        h3 {
          font-size: 2.5rem;
        }

        span {
          font-size: 1rem;
          color: gainsboro;
        }
      }

      p {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        text-align: justify;
        font-size: 1.5rem;

        * {
          border: none;
        }

        ol {
          li {
            padding-left: 2rem;
            margin: 0.5rem;
            li {
              padding-left: 2rem;
              margin: 0.5rem;
            }
          }
        }
      }
    }
  }
`;
