import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & + div {
    margin-top: 20px;
  }

  label {
    font-size: 26px;
  }

  input {
    border-radius: 4px;
    width: 100%;
    height: 44px;
  }

  textarea {
    width: 100%;
    height: 100px;
  }

  label + input, label + textarea {
     margin-top: 5px;
    }
  
`