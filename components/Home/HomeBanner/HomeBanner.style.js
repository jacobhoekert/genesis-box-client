import styled, {css} from 'styled-components'

export const ImageDiv = styled.div`
  width: 585px;
  height: 400px;
  background-size: cover;
  border-radius: 80px;
  margin-left: 20px;

  @media screen and (max-width: 1100px) {
    width: 400px;
    height: 270px;
    margin-left: 0px;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
  
  ${props => css`
    background-image: url(${props.bkg_img});
  `};
`;


