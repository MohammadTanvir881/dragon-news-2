import Marquee from "react-fast-marquee";

const Latest = () => {
  return (
    <div className="flex flex-col md:flex-row  bg-gray-100 p-4 my-5">

        <button className="btn mb-3 md:mb-0 btn-secondary">Breaking News</button>
      <Marquee className="mr-5" speed={100}>
        <p className="mr-5"> I can be a React component, multiple React components, or just some
        text.</p>
        <p className="mr-5"> I can be a React component, multiple React components, or just some
        text.</p>
        <p className="mr-5"> I can be a React component, multiple React components, or just some
        text.</p>
      </Marquee>
      
    </div>
  );
};

export default Latest;
