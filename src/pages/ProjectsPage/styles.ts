import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  overflow-y: scroll;

  animation: smooth-appearance 0.7s ease;

  @keyframes smooth-appearance {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Repositories = styled.div`
  max-width: 1200px;
  padding: 150px 64px 32px 64px;
  overflow: hidden;
  > div + div {
    margin-top: 32px;
  }
  @media (max-width: 700px) {
    padding: 150px 32px 32px 32px;
  }
`;

export const AnimationContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
