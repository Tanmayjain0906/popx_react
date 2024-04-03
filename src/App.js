import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import ProfilePage from "./pages/ProfilePage";
import { useState } from "react";

function App() {
  const [profileName, setProfileName] = useState("");
  const [profileEmail, setProfileEmail] = useState("");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<CreateAccountPage setProfileName={setProfileName} setProfileEmail={setProfileEmail}/>} />
          <Route path="/profile" element={<ProfilePage profileName={profileName} profileEmail={profileEmail}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
