import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../Menu';
import Footer from '../Footer';

import { Container, Main } from './styles';

function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Container>
        <Main>
          {children}
        </Main>
      </Container>
      <Footer />
    </>
  );
}

PageDefault.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageDefault;
