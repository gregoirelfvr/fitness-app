import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        
      </div>
      <ul>
        <Link to="/"><button>Home</button></Link>
        <Link to="/plans"><button>Plan</button></Link>
        <Link to="/contact"><button>Contact</button></Link>
      </ul>
    </nav>
  );
}

export default Navbar;
