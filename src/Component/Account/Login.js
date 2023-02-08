import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-heading">
          <h3>Sign in to your account</h3>
        </div>
        <div className="login-form">
          <form>
            <div>
              <input type="email" placeholder="Email / Phone number" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
            <div>
              <button onClick={() => navigate("/movie")}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
