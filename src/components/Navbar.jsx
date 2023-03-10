import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <>
      <div className="header">
        <div className="logo">Learning</div>
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