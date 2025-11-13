import React, { use } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../context/AUthContext';
import { FaStar } from 'react-icons/fa';


const DetailsPage = () => {
    const review = useLoaderData()
   


    const {user}=use(AuthContext)
    console.log(review)
    const {foodImage,foodName,reviewText,rating,restaurantName,_id,location}=review
    return (
        <div className="bg-orange-300 space-x-5  md:flex h-screen justify-center items-center">

         

     
      <div className="">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full rounded-2xl md:h-100 md:rotate-6 md:bg-white p-4"
        />
       
      </div>
        <div className="space-y-3.5">
          <h1 className='text-2xl font-bold'>{foodName}</h1>
           <div><p>"{reviewText}"</p>
            <h1 className='flex justify-end '>{user?.displayName}</h1></div>
            <h4></h4>
            <p className='font-semibold text-xl'> RestaurentName: <span className='text-orange-700'>{restaurantName}</span></p>
            <p><span className='font-semibold text-xl'>Adress</span>: <span>{location}</span></p>
            <p className='font-semibold text-xl flex'>Rating:        ⭐ {rating}/5
            </p>

           <Link
                to={`/addReview`}
                className="block mt-2  text-center bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 transition"
              >
                Add Your Review
              </Link>
        </div>

      

      {/* Content */}
      
    </div>
    );
};

export default DetailsPage;