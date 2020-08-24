import React from 'react'
import PropTypes from 'prop-types'
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

        <Button as={Link} className="ButtonLink" to="/register/video">
          New video
        </Button>
      </nav>
    </Container>
  )
}

Menu.propTypes = {
  fullPage: PropTypes.bool.isRequired,
}

export default Menu
