import React from "react";

export function Button({ children, variant = "default", className = "", ...props }) {
  const base =
    "px-4 py-2 rounded-md font-medium transition-all duration-200";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-black hover:bg-gray-200",
    outline: "border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
