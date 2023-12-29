import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Buttton = ({ children }: Props) => {
  return (
    <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
      {children}
    </button>
  );
};
