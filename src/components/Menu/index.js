import React from 'react'

import Button from '../Button'
import Logo from '../../assets/img/logo.png'

import './styles.css'

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Marcosflix logo" />
      </a>

      <Button as="a" className="ButtonLink">Novo vídeo</Button>
    </nav>
  )
}

export default Menu