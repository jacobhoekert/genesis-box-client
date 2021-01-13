import ReactPlayer from 'react-player/youtube'
import useOnScreen from '../../../hooks/useOnScreen'
import { useRef } from 'react'

export const Video = ({data}) => {
  const ref = useRef()
  const isVisible = useOnScreen(ref)

  return (
    <div ref={ref} id="video">
      <ReactPlayer 
        url='https://www.youtube.com/watch?v=69jf0ZHgK1s' 
        controls={true} 
        muted={true} 
        playing={isVisible}
        width="640px"
      />
    </div>
  )
}