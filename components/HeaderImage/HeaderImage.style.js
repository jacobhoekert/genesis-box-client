import styled, {css} from 'styled-components'

export const ImageDiv = styled.div`
  height: 500px;
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;

  .logo {
    width: 220px;
    height: 150px;
    margin-left: 13%;
    padding-top: 90px;
  }
  
  ${props => css`
    background-image: url(${props.bkg_img});
  `};
`;


