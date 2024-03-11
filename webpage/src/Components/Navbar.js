import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import toast  from 'react-hot-toast';

const Navbar = ({ isLogedIn, setIsLoggedIn }) => {
    
    
  return (
    <div className='flex justify-evenly py-3 bg-richblack-900' >
      <div>
        <Link  to="/">
        <img src={Logo} alt="Logo" width="200px"  />
        </Link>
      </div>
      <div>
        <ul className='flex justify-center gap-6 text-white text-xl font-semibold mt-1'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
        </ul>
        </div>
        <div className='flex gap-6  text-white text-xl font-semibold mt-1'>
            { !isLogedIn  &&
                <Link to="/signin">
                <button  >Login</button>

                </Link>
            }
            { !isLogedIn  &&
                <Link to="/signup">
                <button>Sign Up</button>
                </Link>
            }
            { isLogedIn &&
                <Link to="/">
                <button onClick={() => {setIsLoggedIn(false);
                toast.success("Loged Out")}}>Log Out</button>
                </Link>
            }
            { isLogedIn &&
                <Link to="/dashboard">
                <button>Dashboard</button>
                </Link>
            }   
        
      </div>
    </div>
  )
}

export default Navbar
