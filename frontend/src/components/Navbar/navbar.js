import React,{useState} from 'react';
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import {authActions} from '../../store'

const Navbar=()=>{
  const isLoggedIn=useSelector((state)=>state.isLoggedIn)
  const [menuOpen,setMenuOpen]=useState(false);
  const dispatch=useDispatch();
  const logout=()=>{
    //logout karne pe session storage jo hogi use khaali karenge jo usme id h use remove kardenge
    sessionStorage.clear("id")
    //ye user ki id h
    //store se logout function jo reducers m h use call kar rahe h
    dispatch(authActions.logout())
  }
  const handleMenu=()=>{
    setMenuOpen(!menuOpen)
    const menu=document.querySelector('.md\\:flex ');
    menu.classList.toggle('hidden')
  }
  return (
    <nav className="bg-light p-4">
      <div className="container mx-auto flex justify-between items-center ">
        <Link to="/" className="font-bold text-xl ">
        <span className={`italic text-3xl text-red-400  flex flex-row gap-4  items-center md:block ${menuOpen?'hidden':''}`}>
          La Italiana
         
          </span>
        </Link>
        <div className={`block  md:hidden`}>
          <button className="focus:outline-none" onClick={handleMenu}>
            Menu
          </button>
        </div>
        <div className={`${isLoggedIn? 'block' : 'hidden'} md:flex`}>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-500">Catalogue</Link></li>
            <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
            <li><Link to="/call" className="hover:text-blue-500">Customer Service</Link></li>
            <li><Link to="/onlineordering" className="hover:text-blue-500">Order Online</Link></li>
            <li><Link to="/service" className="hover:text-blue-500">Customer Reviews</Link></li>
            {!isLoggedIn && 
              <>
                <li><Link to="/signup" className="hover:text-blue-500">SignUp</Link></li>
                <li><Link to="/signin" className="hover:text-blue-500">Sign In</Link></li>
              </>
            }
            {isLoggedIn &&
              <li><Link to="#" onClick={logout} className="hover:text-red-500">Log Out</Link></li>
            }
            <li><Link to="#"><img alt="user image" className="h-10 w-10 rounded-full" src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"/></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
