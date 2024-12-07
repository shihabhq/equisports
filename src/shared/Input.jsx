import React from "react";

const Input = ({ name, type, placeholder, text, value, changeVal }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-900 mb-2">
        {text}
      </label>
      <input
        type={type}
        value={value}
        id={name}
        className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder={placeholder}
        style={{ backgroundColor: "white" }}
        required
        onChange={(e) => changeVal(e.target.value)}
      />
    </div>
  );
};

export default Input;
