import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router";


const FeaturedReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading,setloding]=useState(true)


  useEffect(() => {
    fetch("http://localhost:3000/featuredreviews")
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error(err))
      .finally(setloding(false))
      
  }, []);

  if(loading) return <span className="loading flex justify-center mx-auto items-center loading-spinner loading-xl"></span>


  return (
    <div className=" mx-auto px-4 py-10 bg-orange-300">
      <div className="  flex justify-center mb-6">
        <FaStar className="mt text-4xl text-orange-400" />

        <h2 className="text-2xl font-bold">Featured Reviews</h2>
       
      </div>
       
      <div className="grid md:grid-cols-3 max-w-6xl mx-auto sm:grid-cols-2 gap-6">
        
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
                className="block mt-2  text-center bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
       <Link
                to={`/allReviews`}
                className=" mt-4 md:w-30 text-center bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 mx-auto flex justify-center transition"
              >
                View All<GrFormNextLink className="mt-1" />
              </Link>

    

    </div>
  );
};

export default FeaturedReviews;
