import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
       <footer className="footer sm:footer-horizontal w-full mx-auto bg-white text-neutral-content p-10">
  <nav>
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyiFKndjuEHhwP9JkJjdpXq7aOzlH0kOfl5w&s" className='rounded-full w-25' alt="" />
     <h1 className='text-2xl font-bold text-orange-300'>FlavorTrail</h1>
      <p className="text-black mt-2 text-sm">
            Discover and review the best dishes and restaurants around you.
          </p>

   <h1></h1>
  </nav>
  <nav className='text-black'>
    <h6 className="footer-title">Pages</h6>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/addReview'}>Add Review</NavLink>
    <NavLink to={'/myReviews'}>My Reviews</NavLink>
    <NavLink to={'/allReviews'}>AllReviews</NavLink>
  </nav>
  <nav className='text-black'>
    <h6 className="footer-title">Social Links</h6>
      <div className='flex space-x-2 text-2xl'>
         <a href="#" className="hover:text-orange-500"><FaFacebookF /></a>
          <a href="#" className="hover:text-orange-500"><FaInstagram /></a>
          <a href="#" className="hover:text-orange-500"><FaSquareXTwitter /></a>
      </div>
  </nav>
   
</footer>
    );
};

export default Footer;