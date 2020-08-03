import styled, { css } from 'styled-components'

const Container = styled.div`
  width: 100%;
  background: var(--black);
  z-index: 100;
  height: 94px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 2px solid var(--primary);

  .Logo {
    max-width: 168px;
  }
    
  .Menu {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 20px;

    ${({ fullPage }) => !fullPage && css`
      max-width: 1040px;
    `}
  }

  @media(max-width: 800px) {
    .Logo {
      max-width: 105px;
    }

    .Container {
      height: 40px;
    }

    .Menu {
      justify-content: center;
    }

    a.ButtonLink {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--primary);
      border-radius: 0;
      border: 0;
      text-align: center;
    }
  }
`

export default Container
