import styled, {css} from 'styled-components'

export const TestimonialsSection = styled.section`
  background-size: cover;
  background-position: center;
  height: 650px;
  
  ${props => css`
    background-image: url(${props.bkg_img});
  `};
`;