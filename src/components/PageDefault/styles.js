import styled, { css } from 'styled-components'

export const Container = styled.div`
  background-color: var(--black);
  flex: 1;
  margin-top: 94px;
  height: 100%;
`
export const Main = styled.main`
  margin: 0 auto;
  color: var(--white);

  ${({ fullPage }) => !fullPage && css`
    padding: 50px 0;
    max-width: 1040px;
    margin: 0 auto;
    padding: 0 20px;
  `}

`
