import React from "react";

const Header = () => {
  const cities = [
    { name: "India", id: 1 },
    { name: "London", id: 2 },
    { name: "Japan", id: 3 },
    { name: "USA", id: 4 },
    { name: "Germany", id: 5 },
    ];

  return (
    <div className="flex justify-between items-center text-white">
      {cities.map((city) => (
        <button
          key={city.id}
          className=" text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default Header;
