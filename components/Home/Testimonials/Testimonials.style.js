import styled, {css} from 'styled-components'

export const TestimonialsSection = styled.section`
  background-size: cover;
  background-position: center;
  height: 580px;
  
  ${props => css`
    background-image: url(${props.bkg_img});
  `};
`;