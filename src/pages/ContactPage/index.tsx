import React, { useCallback, useState } from 'react';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

import contact from '../../assets/contact.svg';

import {
  Container,
  Main,
  Title,
  Message,
  EmailPhone,
  Email,
  Phone,
  Image,
  Content,
} from './styles';

const ContactPage: React.FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleOnMenuToggle = useCallback(() => {
    setIsSidebarVisible(oldState => !oldState);
  }, []);

  return (
    <Sidebar
      selectedPage="CONTACT"
      visible={isSidebarVisible}
      onClose={handleOnMenuToggle}
    >
      <Container>
        <Header
          color="BLACK"
          selectedPage="CONTACT"
          onMenuShown={handleOnMenuToggle}
        />
        <Content>
          <Main>
            <Title>CONTATO</Title>
            <Message>
              Tem alguma dúvida, sugestão, ou mesmo, reclamção? Entre em
              contato.
            </Message>
            <EmailPhone>
              <Email href="mailto:phfbarreiros95@gmail.com">
                phfbarreiros95@gmail.com
              </Email>
              <Phone
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send?phone=5519998728971"
              >
                (19) 9 9872-8971
              </Phone>
            </EmailPhone>
          </Main>
          <Image>
            <img src={contact} alt="carlinho" />
          </Image>
        </Content>
        <Footer />
      </Container>
    </Sidebar>
  );
};

export default ContactPage;
