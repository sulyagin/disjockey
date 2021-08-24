import styled from 'styled-components';

export const HeaderElement = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #a6a6a6;
  margin: 1rem 0 2rem 0;

  .left,
  .right {
    display: flex;
    flex-direction: row;
  }

  .description {
    width: 160px;
    margin: -0.6rem 0 0 2rem;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }

  .logo {
    h1 {
      font-size: 3.5rem;
      color: #fff;

      span {
        color: #ff4343;
      }
    }

    h2 {
      margin-top: 0.6rem;
      font-size: 1.3rem;
    }
  }
`;
