import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AUthContext';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyReviews = () => {
    const {user}=use(AuthContext)
    console.log(user)
    const [myReviews, setMyReviews]=useState([])


  

    useEffect(()=>{
   if(user?.email){
         fetch(`http://localhost:3000/my-reviews?email=${user.email}`)
     .then(res=>res.json())
     .then(data=> {
        console.log(data)
        setMyReviews(data)
     })
   }

    },[user?.email])

      const handleDelete = (_id) =>{
      Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
     fetch(`http://localhost:3000/reviews/${_id}`,{
        method:'DELETE',
       })
       .then(res=>res.json())
       .then(data=>{
        if(data.deletedCount){
          Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });

        }
       })
   const remainingReviews = myReviews.filter(rev => rev._id !== _id);
  setMyReviews(remainingReviews)
    
  }
});
     

    }
    return (
       <div className="py-20 container mx-auto bg-orange-300">
      <h2 className="text-2xl font-bold text-center mt-6 mb-6">My Reviews</h2>

      <div className="">
        <table className="table w-full border border-orange-300 rounded-lg shadow-sm">
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
            {myReviews.map((review) => (
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
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="btn btn-xs bg-orange-500 text-white hover:bg-orange-600"
                  >
                    <FaTrash />
                  </button>
                 <Link to={`/update/${review._id}`}> <button
                    
                    className="btn btn-xs bg-orange-500 text-white hover:bg-orange-600"
                  >
                    <CiEdit />
                  </button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {myReviews.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            You haven’t added any reviews yet.
          </p>
        )}
      </div>
    </div>
    );
};

export default MyReviews;