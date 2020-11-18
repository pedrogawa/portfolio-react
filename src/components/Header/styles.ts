import styled, { css } from 'styled-components';

interface IContainerProps {
  fixed?: boolean;
}

interface IPageProps {
  isBlack?: boolean;
  selected?: boolean;
}

export const Container = styled.header<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 32px 64px;

  svg {
    display: none;

    cursor: pointer;

    @media (max-width: 700px) {
      display: block;
    }
  }

  @media (max-width: 700px) {
    padding: 32px;
  }

  ${({ fixed }) =>
    fixed &&
    css`
      width: 100%;
      z-index: 2;
      position: fixed;
      background: #f0f0f0;
    `}
`;

export const Name = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 30px;
    width: 30px;

    @media (max-width: 430px) {
      display: none;
    }
  }

  strong {
    color: #574e65;
    font-size: 28px;
    font-weight: 500;

    @media (min-width: 431px) {
      margin-left: 16px;
    }

    @media (max-width: 800px) {
      font-size: 20px;
    }
  }
`;

export const Pages = styled.div`
  display: flex;

  button + button {
    margin-left: 64px;

    @media (max-width: 800px) {
      margin-left: 32px;
    }
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Page = styled.button<IPageProps>`
  border: 0;
  background: 0;
  padding-bottom: 8px;
  font-size: 18px;

  ${({ selected, isBlack }) =>
    selected
      ? css`
          color: #78d0d3;
          border-bottom: solid 2px #78d0d3;
        `
      : css`
          color: ${isBlack ? '#1b1c1e' : '#fff'};
          border-bottom: solid 2px transparent;

          @media (max-width: 960px) {
            color: #1b1c1e;
          }
        `}
`;
