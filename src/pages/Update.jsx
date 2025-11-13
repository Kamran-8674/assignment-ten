import React, { use } from 'react';
import { AuthContext } from '../context/AUthContext';
import {  useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Update = () => {
   
    const {user}=use(AuthContext)
    const data = useLoaderData()
    const {foodImage,foodName,reviewText,rating,restaurantName,_id,location}=data
    const navigate = useNavigate()


    const handleUpdate =(e)=>{
         e.preventDefault();

    const foodName = e.target.foodName.value;
    const foodImage = e.target.foodImage.value;
    const restaurantName = e.target.restaurantName.value;
    const location = e.target.location.value;
    const rating = e.target.rating.value;
    const reviewText = e.target.reviewText.value;
    const email = user?.email || "anonymous";
    const date = new Date().toISOString();
        const reviewData = {
      foodName,
      foodImage,
      restaurantName,
      location,
      rating,
      reviewText,
      email,
      date,
    };
      fetch(`http://localhost:3000/reviews/${_id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(reviewData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Review Updated:", data);
            if(data.modifiedCount){
              Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Sucessfully Updated",
      showConfirmButton: false,
      timer: 1500
    });
            }
            e.target.reset();
            navigate("/");
          })
          .catch((err) => {
            console.error("Error adding review:", err);
           
          });
       }
    return (
        <div>
             <div className="flex justify-center bg-orange-300 items-center md:pt-40 pb-10">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl p-5">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Update Your Review
        </h2>
             <form onSubmit={handleUpdate}>
          <fieldset className="fieldset space-y-3">
            <div>
              <label className="label font-medium">Food Name</label>
              <input
                name="foodName"
                type="text"
                placeholder="Enter food name"
                className="input input-bordered w-full"
                defaultValue={foodName}
              />
            </div>

            <div>
              <label className="label font-medium">Food Image URL</label>
              <input
                name="foodImage"
                type="url"
                placeholder="Enter image link"
                className="input input-bordered w-full"
                defaultValue={foodImage}
              />
            </div>

            <div>
              <label className="label font-medium">Restaurant Name</label>
              <input
                name="restaurantName"
                type="text"
                placeholder="Restaurant name"
                className="input input-bordered w-full"
                defaultValue={restaurantName}
              />
            </div>

            <div>
              <label className="label font-medium">Location</label>
              <input
                name="location"
                type="text"
                placeholder="Enter location"
                className="input input-bordered w-full"
                defaultValue={location}
              />
            </div>

            <div>
              <label className="label font-medium">Star Rating</label>
              <select
                name="rating"
                className="select select-bordered w-full"
                defaultValue={rating}
              >
                <option value="">Select rating</option>
                <option value="1">⭐ 1</option>
                <option value="2">⭐⭐ 2</option>
                <option value="3">⭐⭐⭐ 3</option>
                <option value="4">⭐⭐⭐⭐ 4</option>
                <option value="5">⭐⭐⭐⭐⭐ 5</option>
              </select>
            </div>

            <div>
              <label className="label font-medium">Review Text</label>
              <textarea
                name="reviewText"
                placeholder="Write your review..."
                className="textarea textarea-bordered w-full"
                defaultValue={reviewText}
              ></textarea>
            </div>

            <div>
              <label className="label font-medium">Your Email</label>
              <input
                type="email"
                value={user?.email || "anonymous"}
                className="input input-bordered w-full bg-gray-100"
                readOnly
              />
            </div>

            <div>
              <label className="label font-medium">Date</label>
              <input
                type="text"
                value={new Date().toLocaleDateString()}
                className="input input-bordered w-full bg-gray-100"
                readOnly
              />
            </div>

            <button type="submit" className="btn bg-orange-400 hover:bg-orange-500 w-full mt-3">
              Update
            </button>
          </fieldset>
        </form>
        </div>
   </div>
  </div>
    );
};

export default Update;