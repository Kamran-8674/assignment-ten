import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AUthContext';

const MyFavourites = () => {
    const {user}=use(AuthContext)
    const [favorites,setFavorites]=useState([])

    useEffect(()=>{
      if(user?.email){
          fetch(`https://assignment-ten-server-gamma.vercel.app/favorites?email=${user.email}`,{
             headers: {
            authorazation: `Bearer ${user.accessToken}`,
          },
        }
            
        )
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setFavorites(data)
            
        })
      }
    },[user])
    return (
        <div className=''>
           <div className="py-20 container mx-auto bg-orange-300">
      <h2 className="text-2xl font-bold text-center mt-6 mb-6">My Favourites</h2>

      <div className="overflow-x-auto">
        <table className="table w-full min-w-[600px] border border-orange-300 rounded-lg shadow-sm">
          <thead className="bg-orange-400 text-white">
            <tr>
              <th>Image</th>
              <th>Food Name</th>
              <th>Restaurant</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((review) => (
              <tr key={review._id} className="hover:bg-orange-200">
                <td>
                  <img
                    src={review.foodImage}
                    alt={review.foodName}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                </td>
                <td className="font-medium">{review.foodName}</td>
                <td>{review.restaurantName}</td>
                <td>{new Date(review.date).toLocaleDateString()}</td>
                <td className="flex items-center gap-3">
                  {/* <button
                    onClick={() => handleDelete(review._id)}
                    className="btn btn-xs bg-orange-500 text-white hover:bg-orange-600"
                  >
                    <FaTrash />
                  </button>
                  <Link to={`/update/${review._id}`}>
                    {" "}
                    <button className="btn btn-xs bg-orange-500 text-white hover:bg-orange-600">
                      <CiEdit />
                    </button>
                  </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {favorites.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            You haven’t added any reviews yet.
          </p>
        )}
      </div>
    </div>
        </div>
    );
};

export default MyFavourites;