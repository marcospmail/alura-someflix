import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Loading = styled.div` 
  animation: ${rotate360} 1s linear infinite;

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;

  background: transparent;

  width: 30px;
  height: 30px;
  
  border-radius: 50%;
`

export default Loading
