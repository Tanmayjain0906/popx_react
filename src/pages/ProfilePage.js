import React from 'react'
import Profile from '../components/Profile'

function ProfilePage({profileName, profileEmail}) {
  return (
    <div>
      <Profile profileName={profileName} profileEmail={profileEmail}/>
    </div>
  )
}

export default ProfilePage;
