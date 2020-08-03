import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const FormFieldWrapper = styled.div`
  position: relative;

  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`

const Label = styled.label``

Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: .1s ease-in-out;
`

const Input = styled.input`
  background: var(--inputBackground);
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;

  padding: 16px;

  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }

  ${({ hasValue }) => hasValue && css`
    &:not([type='color']) + ${Label.Text} {
      transform: scale(.6) translateY(-10px);
  }`}
`

function FormField({
  label, type, value, name, onChange,
}) {
  const as = type === 'textarea' ? 'textarea' : 'input'
  const fieldId = `field_${name}`
  const hasValue = value.length

  return (
    <FormFieldWrapper>

      <Label htmlFor={fieldId}>

        <Input
          id={fieldId}
          as={as}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          hasValue={hasValue}
        />

        <Label.Text>
          {label}
        </Label.Text>

      </Label>

    </FormFieldWrapper>
  )
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

FormField.defaultProps = {
  value: '',
  onChange: () => { },
}

export default FormField
