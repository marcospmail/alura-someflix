import styled from 'styled-components'
import Button from '../../../components/Button'

export const Categories = styled.div`
  display: grid;
  margin: 40px 0;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: auto;
  grid-gap: 10px 5px;
`

export const Category = styled.a`
  border: 1px solid var(--white);
  border-radius: 4px;
  padding: 10px;
  background-color: ${props => props.backgroundColor};
`

export const SubmitButton = styled(Button)`
  width: 100%;
  text-align: center;
  margin-top: 40px;
`