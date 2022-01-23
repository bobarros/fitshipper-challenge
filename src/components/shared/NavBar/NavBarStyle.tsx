// Types
import type { ReactChild } from "react";
type IStandard = {
  children?: ReactChild[] | ReactChild;
  setDark?: (variable: boolean) => void;
  isCurrentDark?: boolean;
};

/**
 * Tailwind Style
 */

export const NavWrap = ({ children }: IStandard) => (
  <nav
    className="
    px-6 flex h-32 justify-between items-center text-base border-b border-solid border-stone-900
    bg-white text-stone-900
    dark:text-white dark:bg-stone-900
    md:text-xl
    2xl:text-2xl"
  >
    {children}
  </nav>
);

export const Logo = ({ children }: IStandard) => (
  <div className="w-20 h-20 bg-white rounded-full">{children}</div>
);

export const AllLinks = ({ children }: IStandard) => (
  <div className="flex items-center">{children}</div>
);

export const NavLink = ({ children }: IStandard) => (
  <div className="cursor-pointer ">{children}</div>
);

export const SwitchTheme = ({ setDark, isCurrentDark }: IStandard) => (
  <button
    onClick={() => setDark && setDark(!isCurrentDark)}
    className="cursor-pointer "
  >
    Theme: {isCurrentDark ? "Light Mode" : "Dark Mode"}
  </button>
);

export const Divider = () => (
  <div
    className="
    bg-stone-900
    dark:bg-white
    w-px h-8 mx-6"
  />
);
