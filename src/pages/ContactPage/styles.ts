import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 660px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 32px;

  @media (max-width: 900px) {
    justify-content: flex-start;
  }
`;

export const Main = styled.div``;

export const Title = styled.div`
  color: #78d0d3;

  font-size: 32px;
  font-weight: 500;

  @media (max-width: 900px) {
    margin-top: --128px;
  }
`;

export const Message = styled.div`
  margin-top: 16px;

  font-size: 22px;
  max-width: 600px;

  @media (max-width: 900px) {
    font-size: 18px;
  }
`;

export const EmailPhone = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 500;

  margin-top: 32px;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const Email = styled.a`
  cursor: pointer;
  border-bottom: 4px solid transparent;
  padding-bottom: 4px;

  color: #78d0d3;
  text-decoration: none;

  &:hover {
    transition: border-bottom 0.4s;
    border-bottom: 4px solid #78d0d3;
  }
`;

export const Phone = styled.a`
  margin-left: 32px;
  padding-bottom: 4px;

  color: #78d0d3;
  text-decoration: none;

  cursor: pointer;
  border-bottom: 4px solid transparent;

  &:hover {
    transition: border-bottom 0.4s;
    border-bottom: 4px solid #78d0d3;
  }

  @media (max-width: 1100px) {
    margin-left: 0;
  }
`;

export const Image = styled.div`
  margin-left: 128px;

  @media (max-width: 1500px) {
    img {
      height: 600px;
      width: 400px;
    }
  }

  @media (max-width: 1250px) {
    height: 450px;
    width: 300px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
