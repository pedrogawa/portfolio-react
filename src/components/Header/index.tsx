import React, { useCallback } from 'react';

import { FiMenu } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container, Name, Pages, Page } from './styles';

interface IHeaderProps {
  fixed?: boolean;
  color?: 'WHITE' | 'BLACK';
  selectedPage: 'LANDING' | 'PROJECTS' | 'CONTACT';
  onMenuShown: () => void;
}

const Header: React.FC<IHeaderProps> = ({
  fixed,
  onMenuShown,
  selectedPage,
  color,
}) => {
  const history = useHistory();

  const handleNavigateTo = useCallback(
    (route: string) => {
      history.push(route);
    },
    [history],
  );
  return (
    <Container fixed={fixed}>
      <Name onClick={() => handleNavigateTo('/')}>
        <img src={logo} alt="" />
        <strong>Pedro Ferreira</strong>
      </Name>
      <Pages>
        <Page
          isBlack={color === 'BLACK'}
          selected={selectedPage === 'LANDING'}
          onClick={() => handleNavigateTo('/')}
        >
          <span>Inicio</span>
          <div />
        </Page>
        <Page
          isBlack={color === 'BLACK'}
          selected={selectedPage === 'PROJECTS'}
          onClick={() => handleNavigateTo('/projects')}
        >
          <span>Projetos</span>
          <div />
        </Page>
        <Page
          isBlack={color === 'BLACK'}
          selected={selectedPage === 'CONTACT'}
          onClick={() => handleNavigateTo('/contact')}
        >
          <span>Contato</span>
          <div />
        </Page>
      </Pages>
      <FiMenu size={24} onClick={onMenuShown} />
    </Container>
  );
};

export default Header;
