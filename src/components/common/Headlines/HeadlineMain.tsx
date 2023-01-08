import * as React from "react";

const HeadlineMain: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center pt-2">
      {children}
    </h1>
  );
};

export default HeadlineMain;
