import styled from 'styled-components'

export const Container = styled.div`
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

export const Categories = styled.ul`
  margin-top: 50px;
  list-style: none;
`

export const Category = styled.li`
  border: 1px solid var(--white);
  border-radius: 4px;
  padding: 10px;
  display: flex;
  justify-content: space-between;

  & + li {
    margin-top: 4px;
  }
  
`

export const CategoryDeleteButton = styled.button`
    opacity: 0.2;
    background: none;
    outline: none;
    border: none;
    color: white;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
