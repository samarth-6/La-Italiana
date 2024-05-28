import React, { useState, useEffect } from 'react';
import Cards from './customerservicecards.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Service=()=>{
  const id=sessionStorage.getItem('id');
  const [inputs,setInputs]=useState({title:'',description:''});
  const [array,setArray]=useState([]);
  const show=()=>document.getElementById('textarea').style.display = 'block';
  const change=(e) => {
    const {name,value }=e.target;
    setInputs({...inputs, [name]: value });
  };
  const submit=async()=>{
    if (inputs.title===''||inputs.description==='') {
      toast.error("Title or Description can't be empty");
    } else{
      if(id){
        await axios.post(`${window.location.origin}/api/v2/addviews`, { title:inputs.title, description: inputs.description,id:id,}).then((response)=>{
            console.log(response);
          });
        setInputs({ title:'',description:''});
        toast.success('Your Review is added');
      }else{
        setArray([...array,inputs]);
        setInputs({title:'',description:''});
        toast.success('Your Review is added');
        toast.error('Your Review is not saved. Please sign up');
      }
    }
  };
 
  useEffect(() => {
    if (id){
      const fetch=async()=>{
        await axios.get(`${window.location.origin}/api/v2/getviews/${id}`).then((response)=>{
          setArray(response.data.list);
        });
      };
      fetch();
    }
  },[submit]);
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <ToastContainer />
        <div className="max-w-4xl w-full space-y-5 p-6 bg-white rounded-lg shadow-md mt-2">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Customer Reviews</h2> 
          <div className="space-y-3">
            <input type="text"  placeholder="Title"  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"  onClick={show}  onChange={change}  name="title" value={inputs.title} />
            <textarea id="textarea" placeholder="Description"  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500" onChange={change} name="description"  value={inputs.description}  style={{ display: 'none' }}   />
          </div>
          <div className="flex justify-end">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200" onClick={submit}>
              Add

            </button>
          </div>
        </div>
        <div className="w-full mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {array.map((item, index) => (
              <div className="p-4 bg-white rounded-lg shadow-md" key={index}>
                <Cards title={item.title} description={item.description}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
