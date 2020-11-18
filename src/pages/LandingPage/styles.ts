import styled from 'styled-components';

import bottomLeft from '../../assets/bottom-left.svg';
import topRight from '../../assets/portfolio.jpg';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  min-width: 100vw;

  min-height: 900px;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  padding: 0 64px;

  max-width: 1800px;

  @media (max-width: 700px) {
    display: 0 32px;
  }
`;

export const Left = styled.section`
  flex: 1;

  > div {
    max-width: 600px;
  }

  @media (max-width: 1500px) {
    padding-top: 120px;
  }

  @media (max-width: 1200px) {
    padding-top: 200;
  }

  @media (max-width: 960px) {
    padding-top: 120px;
  }

  @media (max-width: 520px) {
    padding-top: 60px;
  }
`;
export const Right = styled.section`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Image = styled.img`
  height: 700px;

  @media (max-width: 1500px) {
    height: 120px;
  }
`;

export const Title = styled.h2`
  color: #574e65;
  font-weight: 900;
  font-size: 80px;
  line-height: 90px;

  @media (max-width: 1500px) {
    font-size: 60px;
    line-height: 70px;
  }

  @media (max-width: 520px) {
    font-size: 40px;
    line-height: 50px;
  }
`;

export const Description = styled.div`
  color: #aba6b2;
`;

export const Button = styled.button`
  border: 0;
  border-radius: 8px;

  color: #fff;
  background: #78d0d3;

  padding: 16px 32px;
  margin-top: 64px;

  font-weight: 500;
  box-shadow: 3px 3px 16px 2px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.4s;

  &:hover {
    box-shadow: 3px 3px 16px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const BottomLeft = styled.div`
  height: 100vh;
  width: 100%;
  min-height: 900px;
  background: url(${bottomLeft}) no-repeat -1% 100%;
  position: absolute;
  z-index: -1;
  top: 0;
`;

export const TopRight = styled.div`
  height: 100vh;
  top: 0;
  width: 100%;
  min-height: 900px;
  background: url(${topRight}) no-repeat 101% 1%;
  position: absolute;
  z-index: -1;

  @media (max-width: 1800px) {
    background-size: 60%;
  }

  @media (max-width: 960px) {
    display: none;
  }
`;
