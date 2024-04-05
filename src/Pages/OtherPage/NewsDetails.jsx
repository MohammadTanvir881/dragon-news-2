import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";
import RightSideNav from "../Shared/RightSideNav";
import { MdOutlineRemoveRedEye } from "react-icons/md";


const NewsDetails = () => {
    const id = useParams();
    console.log(id.id)
    const data = useLoaderData();
    // console.log(data)
    const newsData = data.find(news=> news._id === id.id)
    const { author, image_url, title, details, _id ,rating,total_view} = newsData;
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
             <div className="my-5 p-3 grid md:grid-cols-4 gap-2">
                  <div className=" md:col-span-3" >
                  <div className="card my-10 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
      {
        details
      }
        <div className="my-5 flex justify-between items-center gap-4">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
             <p className="text-xl ml-2 font-medium">{rating.number}</p>
          </div>
           <div className="flex text-xl font-medium items-center gap-2">
           <MdOutlineRemoveRedEye /> {total_view}
           </div>
        </div>
      </div>
    </div>
                  </div>

                  <div className="md:col-span-1 ">
                     <RightSideNav></RightSideNav>
                  </div>
             </div>
        </div>
    );
};

export default NewsDetails;