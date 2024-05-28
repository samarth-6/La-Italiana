import React from 'react';

import {useNavigate} from 'react-router-dom'
import {toast,ToastContainer} from 'react-toastify';
const dishes = [
  {id:1,name:'Spaghetti Carbonara',description:'Classic Italian pasta.',price:1299,image:'./image/carbonora.jpg'},
  {id:2,name: 'Margherita Pizza',description:'Cheese,tomatoes,and basil.',price: 1099,image:'./image/margherita.webp'},
  {id:3,name:'Chicken ALfredo',description:'Creamy Pasta with Grilled Chicken',price:1599,image:'./image/chickenalfredo.jpg'},
  {id:4,name:'Grilled Salmon',description:'Served with veggies and rice.',price: 1599,image:'./image/salmon.jpg'},
  {id:5,name:'Burger Singh',description: 'With cheese, lettuce, and tomato.',price: 1199,image:'./image/burgersingh.avif'},
  {id:6,name:'Tandoori Chicken',description: 'Juicy Chicken prepared in tandoor.',price: 1399,image:'./image/tandoorichicken.jpg'},
  {id:7,name:'Tiramisu',description:'Classic Italian dessert.',price: 699,image:'./image/tiramisu.jpg'},
  {id:8,name:'Garlic Bread',description: 'Toasted bread with garlic and butter.', price: 499,image:'./image/garlicbread.jpg'},
  {id:9,name:'Lemonade',description:'Freshly squeezed lemons.',price:299,image:'./image/lemonade.jpg'},
]


const Catalogue=()=>{ 
  const navigate=useNavigate();
  const handleClick=(dish)=>{
  // toast.success(`You selected ${dish.name}`,{position:'top-right'})
  navigate('/onlineordering',{state:dish})
}
return(
    <div className="contaiiner mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Catalogue</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dishes.map(dish=>(
                <div key={dish.id} onClick={()=>handleClick(dish)} className="border p-4 rounded shadow transform transition-transform duration-300 hover:scale-105 ">
                <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover rounded mb-2"/>
                <h3 className="text-xl font-semibold">{dish.name}</h3>
                <p>{dish.description}</p>
                <p className="text-green-500 font-bold hover:text-red-600">₹{dish.price}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Catalogue;
