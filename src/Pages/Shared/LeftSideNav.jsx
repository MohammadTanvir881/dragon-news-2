import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {
   const [Category , setCategory]= useState([]);
   useEffect(()=>{
     fetch('categories.json')
     .then(res => res.json())
     .then(data => setCategory(data))
   },[])
    return (
        <div className="p-4">
           <div className="bg-gray-50 p-5 rounded">
           <h1 className="text-3xl font-semibold mb-5"> All Category</h1>
           <ul className="space-y-6">
              {
                Category.map(title=><NavLink to={`${title.id}`} className="block pl-6 text-xl my-3 hover:text-green-400 font-medium" key={title.id}>{title.name}</NavLink>)
              }
           </ul>
           </div>
        </div>
    );
};

export default LeftSideNav;