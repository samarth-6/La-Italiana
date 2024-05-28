import React from "react";
const Heading=({first,second})=>{
  return(
    <div>
      <h1 className="text-center text-8xl font-bold mt-5 mb-14 mr-9">{first}<br/>{second}</h1>
    </div>
  );
};

export default Heading;
