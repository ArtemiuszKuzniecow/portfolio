import * as React from "react";

const HeadlineSecond: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <h2 className="text-4xl font-bold text-center my-10 p-5">{children}</h2>
  );
};

export default HeadlineSecond;
