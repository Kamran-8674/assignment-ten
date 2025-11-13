import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    
      useEffect(() => {
        fetch("http://localhost:3000/reviews")
          .then(res => res.json())
          .then(data => setReviews(data))
          .catch(err => console.error(err));
      }, []);
    return (
          <div className="grid bg-orange-300 md:py-18 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="bg-white h-100 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={review.foodImage}
              alt={review.foodName}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{review.foodName}</h3>
              <p className="text-gray-600">
                {review.restaurantName} • {review.location}
              </p>
              <p className="text-sm text-gray-500">
                Reviewer: <span className="font-medium">{review.reviewerName || "Anonymous"}</span>
              </p>
              <p className="text-yellow-500">⭐ {review.rating}/5</p>

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
    );
};

export default AllReviews;