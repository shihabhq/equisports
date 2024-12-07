import React from "react";

const Input = ({ name, type, placeholder }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-900 mb-2">
        Email Address
      </label>
      <input
        type={type}
        id={name}
        className="shadow-lg rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder={placeholder}
        style={{ backgroundColor: "white" }}
        required
      />
    </div>
  );
};

export default Input;
