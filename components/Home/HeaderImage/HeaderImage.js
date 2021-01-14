import { Parallax } from 'react-scroll-parallax'

export const HeaderImage = ({data}) => {
  return (
    <Parallax y={[-27, 0]}>
      <div id="header-image">
        <img width="180px" src="/images/main-logo.png" className="logo" />
      </div>
    </Parallax>
  )
}