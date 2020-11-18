import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  width: 100vw;
  background: #403d52;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #dbdbdb;

  a {
    color: #fff;
    font-size: 18px;
    text-decoration: none;

    @media (max-width: 350px) {
      font-size: 16px;
    }
  }

  @media (max-width: 350px) {
    font-size: 13px;
  }
`;

export const MadeWith = styled.span``;

export const Heart = styled.span`
  margin: 0 6px;
`;

export const By = styled.span`
  margin-right: 6px;
`;
