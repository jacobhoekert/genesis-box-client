import styled, {css} from 'styled-components';

export const ImageDiv = styled.div`
  width: 40%;
  background-size: cover;
  border-radius: 20px;
  
  ${props => css`
    background-image: url(${props.bkg_img});
  `};
`;


