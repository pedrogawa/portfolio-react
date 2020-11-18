import React, { useCallback } from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Page, Pages, Header, Content, Container } from './styles';

interface ISidebarProps {
  visible: boolean;
  selectedPage: 'LANDING' | 'PROJECTS' | 'CONTACT';
  onClose: () => void;
}

const Sidebar: React.FC<ISidebarProps> = ({
  visible,
  children,
  selectedPage,
  onClose,
}) => {
  const history = useHistory();

  const handleNavigateTo = useCallback(
    (route: string) => {
      history.push(route, { drawerVisible: visible });
    },
    [history, visible],
  );

  return (
    <Container hasMinHeight={selectedPage === 'LANDING'}>
      <Content visible={visible}>
        <Header>
          <FiArrowLeft size={24} onClick={onClose} />
        </Header>
        <Pages>
          <Page
            selected={selectedPage === 'LANDING'}
            onClick={() => handleNavigateTo('/')}
          >
            <span>Início</span>
          </Page>
          <Page
            selected={selectedPage === 'PROJECTS'}
            onClick={() => handleNavigateTo('/projects')}
          >
            <span>Projetos</span>
          </Page>
          <Page
            selected={selectedPage === 'CONTACT'}
            onClick={() => handleNavigateTo('/contact')}
          >
            <span>Contato</span>
          </Page>
        </Pages>
      </Content>
      {children}
    </Container>
  );
};

export default Sidebar;
