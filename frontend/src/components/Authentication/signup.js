import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import Heading from './heading.js'; 

const Signup=()=>{
  const history=useNavigate();
  const [inputs,setInputs]=useState({email:'',username:'',password:''});

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setInputs({...inputs,[name]:value});
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const response=await axios.post(`${window.location.origin}/api/v1/register`,inputs);
      if (response.data.message==='User Already Exists') {
        alert(response.data.message);
      } else {
        alert(response.data.message);
        setInputs({ email: '', username: '', password: '' });
        history('/signin/');
      }
    } catch (error) {
        console.log(error.message)
      }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 flex justify-center">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md overflow-hidden">
              <input className="p-2 my-3 w-full border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"  type="email"  name="email"  placeholder="Enter Your Email"onChange={handleChange}  value={inputs.email} />
              <input  className="p-2 my-3 w-full border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"   type="text"name="username" placeholder="Enter Your Username"onChange={handleChange} value={inputs.username} />
              <input  className="p-2 my-3 w-full border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"    type="password"  name="password"  placeholder="Enter Your Password"  onChange={handleChange}  value={inputs.password} />
              <button className="p-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4"  onClick={handleSubmit} >
                Sign Up
              </button>
              <div className="flex flex-col items-center justify-center">
            <span className=" text-gray-700  py-2 px-4 rounded focus:outline-none focus:shadow-outline " >
              Already have An Account?</span>
              <Link to="/signin" className="text-blue-500">Sign In</Link> 
            </div>
            </div>
            
          </div>
          <div className="hidden lg:block lg:w-1/3">
            <div className="flex justify-center items-center h-full">
              <Heading first="Sign"second="up" /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
