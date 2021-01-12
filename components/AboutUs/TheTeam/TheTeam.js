import Link from 'next/link'
import { Profile } from '../TheTeam/Profile/Profile'

export const TheTeam = ({data}) => {
  return (
    <div id="the-team">
      <div className="title-container">
        <h1 className="this-is-who">this is who</h1>
        <h1 className="we-are">we are.</h1>
      </div>
      <div className="profiles"> 
      {
        data.profiles.map((profile) => {
          return <Profile profile={profile}/>
        })
      }
      </div>
    </div>

  )
}