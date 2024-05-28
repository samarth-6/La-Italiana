import React,{useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import {authActions} from '../../store'


const OnlineOrdering = () => {
  const checkLogin=useSelector((state)=>state.isLoggedIn)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const location=useLocation();
  const dish=location.state||{};
  const username=sessionStorage.getItem("username")||'';
  const [order,setOrder]=useState({name:username,address:'',dish: dish.name||'',price: dish.price||'', quantity:1});
  const [orderplaced,setorderplaced]=useState(false);
  useEffect(()=>{
    setOrder(prevOrder=>({...prevOrder,dish:dish.name,price:dish.price}));
  },[dish]);

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setOrder({...order,[name]:value });
  };

  const handleSubmit=(e)=>{
     e.preventDefault();
     {checkLogin?dispatch(authActions.login()):navigate('/signin')}
    if(!order.name||!order.address||!order.dish||!order.price||!order.quantity){
      toast.error("All fields are required",{position:"top-right",autoClose:3000,closeOnClick: true,pauseOnHover: true,
      });
      return;
    }else{
   
    toast.success(`Order placed of price ₹${order.price}`, {position:"top-right",autoClose:3000,closeOnClick: true,pauseOnHover: true,
    });
    toast.error(`₹${order.price} Deducted from Your Bank Account`, {position:"top-right",autoClose:3000,closeOnClick: true,pauseOnHover: true,
    });
    setorderplaced(true);
  }
  };
  const goToCatalogue=()=>{
    navigate('/');
  }

  const goToService=()=>{
    navigate('/service');
  };
  return (
    <div className="container mx-auto p-4 max-w-lg" >
    <ToastContainer/>
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Please Place Your Order</h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
        <div className="relative">
          <input type="text" name="name" placeholder="Your Name" value={order.name} onChange={handleChange} className="w-full p-3 border rounded focus:ring-blue-400 transition duration-200" />
        </div>
        <div className="relative">
          <input type="text" name="address" placeholder="Your Address" value={order.address} onChange={handleChange} className="w-full p-3 border rounded  focus:ring-blue-400 transition duration-200"
          />
        </div>
        <div className="relative">
          <input type="text" name="dish"  placeholder="Dish Name" value={order.dish}  onChange={handleChange} className="w-full p-3 border rounded  focus:ring-blue-400 transition duration-200" />
        </div>
        <div className="relative">
          <input type="number" name="quantity" placeholder="Quantity"  value={order.quantity}  onChange={handleChange} className="w-full p-3 border rounded   focus:ring-blue-400 transition duration-200" />
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Place Order
        </button>
      </form>
      {orderplaced && (
        <div className="mt-6 flex justify-between">
          <button onClick={goToCatalogue} className="w-full mr-2 p-3 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200">
            CheckOut More
            </button>
            <button onClick={goToService} className="w-full ml-2 p-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-200">

            Go to Service Page
          </button>
            </div>
      )}
    </div>
  );
};

export default OnlineOrdering;
