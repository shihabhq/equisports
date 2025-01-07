import React, { useState } from "react";
import { FaStar, FaQuoteLeft, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import Header from "../shared/Header";

const Feedbacks = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    productName: "",
  });

  const testimonials = [
    {
      name: "Michael Thompson",
      rating: 5,
      product: "Pro Power Rack",
      feedback:
        "The build quality is exceptional. This power rack has transformed my home gym setup. Extremely stable and well worth the investment.",
      date: "December 15, 2023",
    },
    {
      name: "Sarah Williams",
      rating: 5,
      product: "Olympic Barbell Set",
      feedback:
        "Perfect knurling and great spin. I've used many barbells before, but this one stands out for its quality and durability.",
      date: "January 2, 2024",
    },
    {
      name: "David Chen",
      rating: 4,
      product: "Adjustable Dumbbells",
      feedback:
        "Quick weight changes and space-saving design. Perfect for home workouts. The only minor issue is the length when using heavier weights.",
      date: "January 5, 2024",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Successfully submitted");
    setFormData({ name: "", email: "", feedback: "", productName: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen  py-12 mt-16 px-4 sm:px-6 lg:px-8">
   
      <div className="max-w-7xl mx-auto text-center">
        <Header text={'Customer Feedbacks'} />
        
      </div>


      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-8">
          Recent Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-gray-100 rounded-full p-3">
                  <FaUser className="w-6 h-6 text-gray-500" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-gray-600 mb-2">
                Product: {testimonial.product}
              </p>
              <div className="relative">
                <FaQuoteLeft className="w-6 h-6 text-gray-200 absolute -left-2 -top-2" />
                <p className="text-gray-600 pl-6">{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feedback Form Section */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md mt-48 p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Share Your Experience
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm bg-white text-black font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border bg-white text-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="productName"
              className="block text-sm font-medium  text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border bg-white text-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rating
            </label>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <button
                    type="button"
                    key={ratingValue}
                    className={`focus:outline-none ${
                      ratingValue <= (hover || rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    onClick={() => setRating(ratingValue)}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}>
                    <FaStar className="w-8 h-8" />
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label
              htmlFor="feedback"
              className="block text-sm font-medium text-gray-700 mb-1">
              Your Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 bg-white text-black py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedbacks;
