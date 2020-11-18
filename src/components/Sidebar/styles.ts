import styled, { css } from 'styled-components';

interface IContainerProps {
  hasMinHeight: boolean;
}

interface IContentProps {
  visible: boolean;
}

interface IPageProps {
  selected?: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: row-reverse;

  height: 100vh;
  width: 100vw;
  overflow: hidden;

  ${({ hasMinHeight }) =>
    hasMinHeight &&
    css`
      min-height: 900px;
    `}
`;

export const Content = styled.div<IContentProps>`
  display: flex;
  flex-direction: column;

  min-height: 900px;

  flex-shrink: 0;
  height: 100vh;
  background: #f4f4f6;
  position: relative;
  transition: all 0.3s;

  @media (min-width: 701px) {
    display: none;
  }

  @media (max-width: 700px) {
    width: 0;
    ${({ visible }) =>
      visible
        ? css`
            opacity: 1;
            width: 70% !important;
          `
        : css`
            opacity: 0;
            width: 0;
          `}
  }
`;

export const Header = styled.div`
  display: flex;
  padding: 32px;
  width: 100%;
  justify-content: space-between;
  svg {
    cursor: pointer;
    @media (min-width: 701px) {
      display: none;
    }
  }
`;

export const Pages = styled.div`
  margin-top: 128px;
  button + button {
    margin-top: 16px;
  }
  @media (max-width: 1270px) {
    margin-top: 64px;
  }
`;

export const Page = styled.button<IPageProps>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px;
  background: none;
  border: 0;
  padding: 8px 32px;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.04), transparent);
  position: relative;

  ${({ selected }) =>
    selected
      ? css`
          border-left: 4px solid #78d0d3;
        `
      : ''}

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }

  @media (max-width: 1270px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;
