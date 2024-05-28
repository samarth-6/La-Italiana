import React from 'react';
const Cards=({title,description}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200 ease-in-out">
      <div>
        <h5 className="text-xl font-semibold mb-2 text-gray-800">{title}</h5>
        <p className="text-gray-600 line-clamp-5">{description}...</p>
      </div> 
      </div> 
  );
};

export default Cards;
