import React from 'react'
import  CreateAccount from "../components/CreateAccount"

function CreateAccountPage({setProfileName, setProfileEmail}) {
  return (
    <div>
      <CreateAccount setProfileName={setProfileName} setProfileEmail={setProfileEmail}/>
    </div>
  )
}

export default CreateAccountPage
