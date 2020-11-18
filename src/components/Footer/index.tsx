import React from 'react';

import { Container, MadeWith, Heart, By } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <MadeWith>Feito com</MadeWith>
      <Heart>❤</Heart>
      <By>por</By>
      <a
        href="https://github.com/pedrogawa"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pedro Henrique
      </a>
    </Container>
  );
};

export default Footer;
