import styled from 'styled-components'

export const Container = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > form > div {
    margin-bottom: 20px;
  }

  #buttonWrapper {
    border: 1px solid red;
    display: flex;
    justify-content: center;
  }

  #contentReplacer {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default {
  Container,
}
