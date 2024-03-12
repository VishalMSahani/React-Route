import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import toast  from 'react-hot-toast';

const Navbar = ({ isLogedIn, setIsLoggedIn }) => {
    
    
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] mt-3 mx-auto' >
      <div>
        <Link  to="/">
        <img src={Logo} alt="Logo" width="200px"  />
        </Link>
      </div>
      <div>
        <ul className='flex gap-x-6 text-richblack-100'>
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
        <div className='flex items-center gap-x-4 text-richblack-100'>
            { !isLogedIn  &&
                <Link to="/signin">
                <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700' >Login</button>

                </Link>
            }
            { !isLogedIn  &&
                <Link to="/signup">
                <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                >Sign Up</button>
                </Link>
            }
            { isLogedIn &&
                <Link to="/">
                <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                 onClick={() => {setIsLoggedIn(false);
                toast.success("Loged Out")}}>Log Out</button>
                </Link>
            }
            { isLogedIn &&
                <Link to="/dashboard">
                <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                >Dashboard</button>
                </Link>
            }   
        
      </div>
    </div>
  )
}

export default Navbar
