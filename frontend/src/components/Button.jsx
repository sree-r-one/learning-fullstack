import React from "react";

const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={`relative mx-1 inline-flex items-center rounded border border-gray-200 p-2 font-medium text-gray-700 hover:bg-blue-50 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
