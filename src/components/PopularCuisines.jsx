import React from "react";

const PopularCuisines = () => {
  const cuisines = [
  
    {
      name: "Desserts",
      img: "https://images.pexels.com/photos/3026807/pexels-photo-3026807.jpeg",
      desc: "Sweet treats that make every meal complete.",
    },
    {
      name: "Asian Cuisine",
      img: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg",
      desc: "Bold flavors from the heart of Asia.",
    },
    {
      name: "Seafood",
      img: "https://i.ibb.co/ch5SXJ6R/download-4.jpg",
      desc: "Fresh and flavorful seafood dishes you’ll love.",
    },
  ];

  return (
    <section className="py-16  bg-orange-300 px-4">
      <h2 className="text-2xl mb-8 font-bold text-center">
        Popular Cuisines
      </h2>

    <div className="max-w-6xl  mx-auto ">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cuisines.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden rotate-3 hover:scale-105 transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-48 w-full  object-cover"
            />
            <div className="p-4 bg-orange-200">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default PopularCuisines;
