import React from 'react'
import PropTypes from 'prop-types'

import Menu from '../Menu'
import Footer from '../Footer'

import { Container, Main } from './styles'

function PageDefault({ children, fullPage }) {
  return (
    <>
      <Menu fullPage={fullPage} />
      <Container>
        <Main fullPage={fullPage}>
          {children}
        </Main>
      </Container>
      <Footer />
    </>
  )
}

PageDefault.defaultProps = {
  fullPage: false,
}

PageDefault.propTypes = {
  children: PropTypes.node.isRequired,
  fullPage: PropTypes.bool,
}

export default PageDefault
