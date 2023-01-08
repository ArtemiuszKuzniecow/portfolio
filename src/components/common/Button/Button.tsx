import * as React from "react";

const Button: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <button
      type="button"
      className="flex items-center gap-3 px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
    >
      {children}
    </button>
  );
};

export default Button;
