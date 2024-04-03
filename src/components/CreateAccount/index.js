import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.css"

function CreateAccount({setProfileName, setProfileEmail}) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [yes, setYes] = useState(null);
  const [no, setNo] = useState(null);

  const navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();
    
    if(!name || !number || !email || !password || (yes==null && no==null))
    {
      alert("Please fill all feilds");
      return;
    }
    if(number.length !== 10)
    {
      alert("Enter correct phone number");
      return;
    }
    setProfileName(name);
    setProfileEmail(email);
    navigate("/profile");
  }

  function handleYesRadio(e) {
    setYes(e.target.value);
    setNo(null);
  }

  function handleNoRadio(e) {
    setNo(e.target.value);
    setYes(null);
  }

  return (
    <div className='container'>
      <div className='data'>
        <h1>Create your PopX account</h1>

        <form className='signup-form' onSubmit={handleForm}>

          <div className="input-container">
            <input type="text" id="name" placeholder='Enter Full Name' value={name} onChange={(e) => setName(e.target.value)} />
            <label for="name">Full Name<span style={{ color: "red" }}>*</span></label>
          </div>

          <div className="input-container">
            <input type="number" id="number" placeholder='Enter phone number' value={number} onChange={(e) => setNumber(e.target.value)} />
            <label for="number">Phone number<span style={{ color: "red" }}>*</span></label>
          </div>

          <div className="input-container">
            <input type="email" id="emailID" placeholder='Enter email address' value={email} onChange={(e) => setEmail(e.target.value)} />
            <label for="emailID">Email address<span style={{ color: "red" }}>*</span></label>
          </div>

          <div className="input-container">
            <input type="password" id="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <label for="password">Password<span style={{ color: "red" }}>*</span></label>
          </div>

          <div className="input-container">
            <input type="text" id="company" placeholder='Enter company name' value={company} onChange={(e) => setCompany(e.target.value)} />
            <label for="company">Company name</label>
          </div>

          <div className='agency-container'>
            <p>Are you an Agency?<span style={{ color: "red" }}>*</span></p>
            <div className='radio-btn'>
              <div>
                <input type="radio" id="radio-btn" name="agency" onChange={handleYesRadio} />
                <label for="agency">Yes</label>
              </div>
              <div>
                <input type="radio" id="radio-btn" name="agency" onChange={handleNoRadio}/>
                <label for="agency">No</label>
              </div>
            </div>
          </div>

          <button id='create-btn' type='submit'>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default CreateAccount;
