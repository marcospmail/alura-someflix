import React from 'react'

import { Container } from './styles'

function FormField({ label, type, value, name, onChange }) {
  return (
    <Container>

      <label>
        {label}
      </label>

      {(type === 'textarea' &&
        <textarea
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />)

        ||

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      }

    </Container>
  )
}

export default FormField


