import { use } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AUthContext";
import Swal from "sweetalert2";

const AddReview = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handleAddReview = (e) => {
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

    fetch("https://assignment-ten-server-gamma.vercel.app/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorazation: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Review added:", data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "New Review Added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        e.target.reset();
        navigate("/");
      })
      .catch((err) => {
        console.error("Error adding review:", err);
      });
  };

  return (
    <div className="flex justify-center bg-orange-300 items-center md:pt-40 pb-10">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl p-5">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Add Review
        </h2>

        <form onSubmit={handleAddReview}>
          <fieldset className="fieldset space-y-3">
            <div>
              <label className="label font-medium">Food Name</label>
              <input
                name="foodName"
                type="text"
                placeholder="Enter food name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label font-medium">Food Image URL</label>
              <input
                name="foodImage"
                type="url"
                placeholder="Enter image link"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label font-medium">Restaurant Name</label>
              <input
                name="restaurantName"
                type="text"
                placeholder="Restaurant name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label font-medium">Location</label>
              <input
                name="location"
                type="text"
                placeholder="Enter location"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label font-medium">Star Rating</label>
              <select
                name="rating"
                className="select select-bordered w-full"
                required
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
                required
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

            <button
              type="submit"
              className="btn bg-orange-400 hover:bg-orange-500 w-full mt-3"
            >
              Update
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
