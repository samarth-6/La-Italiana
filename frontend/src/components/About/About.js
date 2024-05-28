import React from 'react';

const About=()=>{
  return(
    <div className="p-8 bg-gray-200 rounded-md mx-4">
      <h2 className="text-center font-semibold text-3xl mb-8">About Us</h2>
      <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8">
      <div className=" flex flex-col items-center ">
        <img  src="./image/myimg.jpg"  alt="Owner" className="w-60 h-auto mb-4 md:mb-0 rounded-lg shadow-lg align-center"/>
        <p className="text-gray-700 text-center font-semibold">Owner</p></div>
        <div className="space-y-4 text-gray-700">
          <p>
            Welcome to La Italiana! We are dedicated to bringing you the most authentic and delicious Italian cuisine. Our passion for food and tradition is reflected in every dish we prepare. From the freshest ingredients to the time-honored recipes, we strive to deliver an unforgettable dining experience.
          </p>
          <p>
            Since then,La Italiana has grown into a beloved establishment known for its warm hospitality and exquisite cuisine. Our menu features a wide variety of Italian classics, from handmade pastas and wood-fired pizzas to succulent seafood and tender meats. Each dish is crafted with care and attention to detail, ensuring that every bite is a celebration of Italian culture.
          </p>
          <p>
            We are committed to sustainability and use locally sourced ingredients whenever possible. Our chefs work closely with farmers and suppliers to ensure that we are getting the best and freshest produce, meats, and seafood. This not only supports local businesses but also allows us to provide our guests with the highest quality meals.
          </p>
          <p>
            Thank you for choosing La Italiana. We are honored to serve you and look forward to creating many wonderful memories together. Buon appetito!
          </p>
          <p>
            <strong>Our Vision:</strong> To be the leading Italian restaurant known for its authentic flavors,exceptional service,and commitment to sustainability.
          </p>
          <p>
            <strong>Our Mission:</strong> To provide an unforgettable dining experience by offering the highest quality Italian cuisine and creating a welcoming atmosphere for all our guests.
          </p>
          <p>
            <strong>Our Values:</strong> Authenticity,Quality,Hospitality,Sustainability,Community.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
