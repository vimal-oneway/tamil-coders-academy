import { twMerge } from "tailwind-merge";

export const useMergeTailwindCss =
  () => (baseClassName: string, toAddClassName: string) => {
    return twMerge(baseClassName, toAddClassName);
  };
