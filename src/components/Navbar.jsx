import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../context/AUthContext';

const Navbar = () => {
   const {user,signOutfunc}=use(AuthContext)
   const handleLogOut = () =>{
    signOutfunc()
    .then(res=> console.log(res))
    .catch(err=>console.log(err))
   }

  const links= <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/allReviews'}>All Reviews</NavLink></li>
            {/* <li><NavLink to={'/register'}>Register</NavLink></li> */}
           </>
          
  
    return (
        <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          {links}
      </ul>
    </div>
  <h1 className='text-2xl font-bold text-orange-300'>FlavorTrail</h1>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
 

  <div className="navbar-end mr-4">
    {user? <div className="dropdown dropdown-bottom  dropdown-center">
  <div tabIndex={0} role="button" className="|">
    <img  className='rounded-full w-15' src={user.photoURL} alt="User" />
  </div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 mr-14 mt-4 p-2 shadow-sm">
    <li><NavLink className={' '} to={'/addReview'}>AddReview</NavLink></li>
    <li><NavLink className={' '} to={'/myReviews'}>MyReviews</NavLink></li>
    <li><NavLink className={' '} to={'/favourites'}>My Favourites</NavLink></li>
    
    <li><button onClick={handleLogOut} className='btn bg-orange-400 text-white hover:bg-orange-500 rounded-full'>SignOut</button></li>
  </ul>
     </div> : <>
      <NavLink className={'btn bg-orange-400 text-white hover:bg-orange-500 rounded-full'} to={'/register'}>Register</NavLink>
     <NavLink className={'btn bg-orange-400 hover:bg-orange-500 text-white rounded-full'} to={'/login'}>Login</NavLink>
     </>
     }
    
    
  </div>

  
 
 
</div>
    );
};

export default Navbar;