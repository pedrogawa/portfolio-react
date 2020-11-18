import React, { useCallback, useState } from 'react';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import {
  Main,
  Left,
  Title,
  Button,
  TopRight,
  Container,
  BottomLeft,
  Description,
} from './styles';

const LandingPage: React.FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleOnMenuToggle = useCallback(() => {
    setIsSidebarVisible(oldState => !oldState);
  }, []);

  return (
    <Sidebar
      selectedPage="LANDING"
      visible={isSidebarVisible}
      onClose={handleOnMenuToggle}
    >
      <Container>
        <Header onMenuShown={handleOnMenuToggle} selectedPage="LANDING" />
        <Main>
          <Left>
            <div>
              <Title>Programador Freelancer</Title>
              <Description>
                Whatever your needs, there will be a freelancer to get it done:
                from web design, mobile app development, virtual assistants,
                product manufacturing, and graphic design (and a whole lot
                more).
              </Description>
              <Button>SAIBA MAIS</Button>
            </div>
          </Left>
        </Main>
        <TopRight />
        <BottomLeft />
      </Container>
    </Sidebar>
  );
};

export default LandingPage;
