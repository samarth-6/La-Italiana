import React, {useState} from 'react';
import {useNavigate,Link} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {authActions} from '../../store';


const Signin=()=>{
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [inputs,setInputs]=useState({email:"",password:"" });
  const [errorMessage,setErrorMessage]=useState('');

  const handleChange=(e)=>{
    const {name,value }=e.target;
    setInputs({...inputs,[name]:value });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if (!inputs.email ||!inputs.password) {
      setErrorMessage('Email and password are required.');
      return;
    }

    try{
      const response=await axios.post(`${window.location.origin}/api/v1/signin`,inputs);
      console.log("Response data:",response.data);

      if(response.status===204) {
        setErrorMessage('Password is Incorrect');
      }else if(response.status===203) {
        setErrorMessage('Please Sign Up first');
      } else if(response.data) {
        sessionStorage.setItem("id",response.data.user._id);
        sessionStorage.setItem("username",response.data.user.username);
        dispatch(authActions.login());
        navigate("/")
      }else{
        console.error("Unexpected response format:",response);
      }
    } catch(error){
      console.error("An error occurred:", error);
      alert("An error occurred during sign-in.");
    }
  };

  return(
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form onSubmit={handleSubmit} className="w-full max-w-xs mx-auto">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" name="email" value={inputs.email} onChange={handleChange} />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" name="password" value={inputs.password} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
          <div className="flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " type="submit">
              Sign In
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className=" text-gray-700  py-2 px-4 rounded focus:outline-none focus:shadow-outline " >
              Do Not have An Account?</span>
              <Link to="/signup" className="text-blue-500">Sign Up</Link> 
            </div>
          </div>
        </div>
        {errorMessage&&<p className="text-red-500 text-xs italic">{errorMessage}</p>}
      </form>
    </div>
  );
};
export default Signin;
