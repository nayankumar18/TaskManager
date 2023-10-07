import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => (
  <nav className="nav-header">
    <img
        className="website-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSjmY6j4zBSeKxLjTXNj4oK2g4xrtAj9rTNw&usqp=CAU"
        alt="website logo"
      />
    <div className="nav-content">
      
      <ul className="nav-menu">
        <li>
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
        </li>
        
      </ul>
      
      <Link to="/" type="button" className="logout-desktop-btn">
        Exit
      </Link>
     
    </div>
  </nav>
)
export default Header
