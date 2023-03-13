import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <div className="logo" onClick={() => navigate("/")}>
          Learning
        </div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link>Classes</Link>
          </li>
          <li>
            <Link>Action</Link>
          </li>
          <li>
            <Link>Login</Link>
          </li>
        </ul>
        <div className="nav-btn">
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
