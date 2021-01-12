import Link from 'next/link';

export const Profile = ({profile}) => {
  return (
    <div className="profile">
      <img className="profile-image" src={profile.image.url}/>
      <div className="profile-text-container">
        <h2 className="profile-name">{profile.name}</h2>
        <p className="profile-bio">{profile.bio}</p>
      </div>
    </div>
  )
}