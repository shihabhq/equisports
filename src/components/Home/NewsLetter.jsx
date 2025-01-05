import newsImage from "../../assets/newsletter.png";
import Header from "../../shared/Header";

const NewsLetter = () => {
  return (
    <div className="w-[85%] md:w-[70%] mx-auto my-44">
      <Header text={"Get in touch with us"} />
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={newsImage} className="w-96 rounded-md" alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Get exclusive discounts, new Arrival news <br /> and many More from
            us
          </h2>
          <div className="join my-5">
            <input
              className="input input-bordered join-item w-3/4"
              placeholder="Email"
            />
            <button className="btn join-item rounded-r-full">Subscribe</button>
          </div>
          <p>
            Subscribed users tend to get more offers and discounts <br /> than
            regular users. Hurry up! What are you thinking?
          </p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Look exclusive offers</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
