import styled, {css} from 'styled-components'

export const ImageDiv = styled.div`
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;

  @media screen and (max-width: 600px) {
    height: 230px;
    background-position: top;
  }

  .logo {
    width: 220px;
    height: 150px;
    margin-left: 13%;
    padding-top: 5%;

    @media screen and (max-width: 600px) {
      margin-left: 6%;
      padding-top: 15%;
      width: 150px;
      height: 100px;
    }
  }
  
  ${props => css`
    background-image: url(${props.bkg_img});
    height: ${props.height};
  `};
`;


