import React from 'react'
import "./style.css"
import profile from "../../assets/profile.png"

function Profile({profileName, profileEmail}) {
    return (
        <div className='container'>
            <div className='profile-data'>
                <h3>Account Settings</h3>
                <div className='info'>
                    <div className='personal-info'>
                        <img src={profile} alt='profile' width="100px" />
                        <div>
                            {profileName ? <h5>{profileName}</h5> : <h5>Marry Doe</h5>}

                            {profileEmail ? <p>{profileEmail}</p> : <p>Marry@gmail.com</p>}
                        </div>
                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;
