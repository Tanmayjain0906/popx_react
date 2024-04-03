import "./style.css";
import { useNavigate } from "react-router-dom";


function Home() {

    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="data">
                <h1>Welcome to PopX</h1>
                <p className="para">lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <button id="create-btn" onClick={()=>navigate("signup")}>Create Account</button>
                <button id="register-btn" onClick={()=>navigate("login")}>Already Registered? Login</button>
            </div>
        </div>
    )
}

export default Home;