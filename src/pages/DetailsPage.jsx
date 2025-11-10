import React from 'react';
import { Link, useLoaderData } from 'react-router';

const DetailsPage = () => {
    const review = useLoaderData()
    console.log(review)
    const {foodImage,foodName,rating,restaurantName,_id}=review
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 text-sm font-medium rounded-lg flex items-center gap-1">
           {rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{foodName}</h3>
        <p className="text-gray-600 text-sm">
          {restaurantName}
        </p>
        <p className="text-sm text-gray-500">
          Reviewed by <span className="font-medium text-gray-700">{ "Anonymous"}</span>
        </p>

        <Link
          to={`/reviews/${_id}`}
          className="block mt-3 bg-blue-600 text-white text-center py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
    );
};

export default DetailsPage;