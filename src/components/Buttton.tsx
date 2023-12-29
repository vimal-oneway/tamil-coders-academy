import { useMergeTailwindCss } from "@/hooks/useMergeTailwindCss";
import React, { ButtonHTMLAttributes } from "react";

export const Buttton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  const { children, className, ...prop } = props;

  const baseClassName = "bg-blue-500 text-white px-3 py-1 rounded-md";

  const mergeClass = useMergeTailwindCss();

  return (
    <button
      className={
        className ? mergeClass(baseClassName, className) : baseClassName
      }
      {...prop}
    >
      {children}
    </button>
  );
};
