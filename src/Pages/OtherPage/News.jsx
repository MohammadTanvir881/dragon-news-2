import { Link } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const News = ({ news }) => {
  const { author, image_url, title, details, _id ,rating,total_view} = news;
  console.log(author);
  return (
    <div className="card my-10 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 200 ? (
          <p className="py-5 border-b-2 border-dashed">
            {details.slice(0, 200)}
            <Link to={`/news/${_id}`} className="text-amber-500 font-medium">
              {" "}
              Read More ...
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
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
              checked
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
  );
};

export default News;
