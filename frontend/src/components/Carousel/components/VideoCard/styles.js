import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s;
  &:hover,
  &:focus  {
    opacity: .8;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
  
`;

export const VideoTitle = styled.span`
    opacity: 0;  
    font-size: 20px;
    font-weight: bold;  
    transition: opacity .4s;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

    ${VideoCardContainer}:hover & {
      opacity: 1;
    }
`
