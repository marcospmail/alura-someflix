import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button'

import Logo from '../../assets/img/logo.png'

import Container from './styles'

function Menu({ fullPage }) {
  return (
    <Container className="Container" fullPage={fullPage}>
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="Marcosflix logo" />
        </Link>

        <Button as={Link} className="ButtonLink" to="/register/video">Novo vídeo</Button>
      </nav>
    </Container>
  )
}

export default Menu
