import { Link } from 'react-router-dom';
import './index.css';
const Header = () => {
  return (
    <header className="header" >
      <div className="container">
        <h1 ><Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>Start Bootstrap</Link></h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/samplepost">Sample Post</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      </div>
    </header>

  );
};

export default Header;
