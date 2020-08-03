import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import styled from 'styled-components'

const StyledSelect = styled(Select)`
  .react-asyncselect-container {
    outline: 0;
    border: 0;

    &:focus, &:active {
      border: 0 !important;
      outline: 0 !important;
    }
  }

  .react-asyncselect__control {
    position: relative;
    background: var(--inputBackground);
    color: #F5F5F5;
    height: 57px;
    font-size: 18px;

    outline: 0;
    border: 0;

    border-radius: 4px;
    transition: border-color .3s;

     &:hover {
      border: 0;
    }

    &:focus, &:active {
      border: 0 !important;
      outline: 0 !important;
    } 
  }

  .react-asyncselect__control--is-focused {
    border: 0;
    outline: 0;
  }

  .react-asyncselect__single-value  {
    left: 16px;

    color: #F5F5F5;
    height: 57px;

    display: flex;
    align-items: center;

    transform-origin: 0% 0%;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;

    transition: .1s ease-in-out;
  }

  .react-asyncselect__input {
    color: #F5F5F5;
  }
`

const colourStyles = {
  option: (styles) => ({
    ...styles,
    color: 'var(--inputBackground)',
  }),
}

function MySelect({
  value, name, options, onChange,
}) {
  return (
    <StyledSelect
      placeholder="Selecione..."
      name={name}
      value={value}
      onChange={(newValue) => onChange(name, newValue)}
      options={options}
      getOptionValue={(option) => option.id}
      getOptionLabel={(option) => option.name}
      className="react-asyncselect-container"
      classNamePrefix="react-asyncselect"
      styles={colourStyles}
    />
  )
}

export default MySelect
