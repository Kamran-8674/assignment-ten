import React from "react";

const TopLocalChefs = () => {
  const chefs = [
    {
      name: "Chef Nabila Rahman",
      img: "https://images.pexels.com/photos/3769992/pexels-photo-3769992.jpeg",
      specialty: "Bangladeshi Street Food",
    },
    {
      name: "Chef Ayaan Chowdhury",
      img: "https://images.pexels.com/photos/4252132/pexels-photo-4252132.jpeg",
      specialty: "Modern Fusion Cuisine",
    },
    {
      name: "Chef Priya Das",
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D",
      specialty: "Desserts & Pastries",
    },
  ];

  return (
    <section className="py-15 bg-orange-100 ">
      <h2 className="text-2xl mb-8 font-bold text-center">
        Top Local Chefs
      </h2>

      <div className="max-w-6xl  mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {chefs.map((chef, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition"
          >
            <img
              src={chef.img}
              alt={chef.name}
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-orange-400"
            />
            <h3 className="text-xl font-semibold mt-4 text-gray-800">{chef.name}</h3>
            <p className="text-gray-500 mt-2">{chef.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopLocalChefs;
