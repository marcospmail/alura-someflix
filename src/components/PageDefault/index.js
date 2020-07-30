import React from 'react'

import Menu from '../Menu'
import Footer from '../Footer'

import { Container, Main } from './styles'

function PageDefault({ children }) {
  const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--black')


  return (
    <>
      <Menu />
      <Container>
        <Main >
          {children}
        </Main>
      </Container>
      <Footer />
    </>
  )
}

export default PageDefault