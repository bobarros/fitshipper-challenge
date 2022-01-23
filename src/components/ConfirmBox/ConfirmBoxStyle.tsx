// Types
import type { ReactChild } from "react";

type IStandard = {
  children?: ReactChild[] | ReactChild;
};

/**
 * Tailwind Style
 */

export const Wrap = ({ children }: IStandard) => (
  <div className="h-screen w-screen fixed inset-0 z-0">
    {children}
  </div>
);

export const Background = ({ children }: IStandard) => (
  <div className="h-screen w-screen fixed inset-0 z-0 bg-stone-900 opacity-40">
    {children}
  </div>
);

export const InnerWrap = ({ children }: IStandard) => (
  <div
    className="w-96 h-64 border border-solid border-stone-900 absolute inset-1/2 z-50 -translate-x-1/2 -translate-y-1/2
    flex flex-col justify-between p-6
    bg-stone-50 text-stone-900
    dark:bg-stone-800 dark:text-stone-50
    "
  >
    {children}
  </div>
);
