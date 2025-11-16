import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from '../context/AUthContext';
import { toast } from "react-toastify";
import { GiSelfLove } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";


const AllReviews = () => {
  const { user } = use(AuthContext)
  const [reviews, setReviews] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    fetch(`https://assignment-ten-server-gamma.vercel.app/reviews?search=${search}`, {
      cache: "no-store",
    })
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error(err));
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // ❤️ Add to favorites
  const handleAddFavorite = (review) => {
    if (!user) return toast("Please login to add favorites.");

    const favoriteData = {
      foodName: review.foodName,
      foodImage: review.foodImage,
      restaurantName: review.restaurantName,
      location: review.location,
      rating: review.rating,
      userEmail: user.email,
      reviewId: review._id,
      date: new Date(),
    };

    fetch("https://assignment-ten-server-gamma.vercel.app/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(favoriteData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("Added to favorites ");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" bg-orange-300">
    <div className="px-4 max-w-6xl mx-auto  py-6">

     
      <input
        onChange={handleSearch}
        type="search"
        placeholder="Search by food name..."
        className="input bg-blue-200 w-full mb-6 text-lg p-3 rounded-xl border"
      />

      
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={review.foodImage}
              alt={review.foodName}
              className="h-48 w-full object-cover"
            />

            <div className="p-4 space-y-2">

            
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">{review.foodName}</h3>

               
                <button
                  onClick={() => handleAddFavorite(review)}
                  className="text-red-500 text-2xl hover:scale-110 transition"
                >
                  <CiHeart />
                </button>
              </div>

              <p className="text-gray-600">
                {review.restaurantName} • {review.location}
              </p>

              <p className="text-sm text-gray-500">
                Reviewer:{" "}
                <span className="font-medium">
                  {review.reviewerName || "Anonymous"}
                </span>
              </p>

              <p className="text-yellow-500 font-semibold">⭐ {review.rating}/5</p>

              <Link
                to={`/reviews/${review._id}`}
                className="block mt-2 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AllReviews;
