// Types
import type { ReactChild } from "react";
type IStandard = {
  children: ReactChild[] | ReactChild;
};

/**
 * Tailwind Style
 */

export const SideBarWrap = ({ children }: IStandard) => (
  <div
    className={`
    px-6 pt-6 justify-between items-center text-base border-r border-solid border-stone-900 h-full
    md:text-xl
    2xl:text-2xl
    bg-stone-50 text-stone-900
    dark:bg-stone-900 dark:text-white
  `}
  >
    {children}
  </div>
);

export const LinkWrap = ({ children }: IStandard) => (
  <div className="block">{children}</div>
);
