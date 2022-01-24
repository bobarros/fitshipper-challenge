// Types
import type { ReactChild } from "react";
type IStandard = {
  children?: ReactChild[] | ReactChild;
  setDark?: (variable: boolean) => void;
  isCurrentDark?: boolean;
  onClick?: () => void;
};

/**
 * Tailwind Style
 */

export const NavWrap = ({ children }: IStandard) => (
  <nav
    className="
    px-6 flex h-32 justify-between items-center text-base border-b border-solid border-stone-900
    bg-stone-50 text-stone-900
    dark:text-stone-50 dark:bg-stone-900
    md:text-xl
    2xl:text-2xl"
  >
    {children}
  </nav>
);

export const Logo = ({ children }: IStandard) => (
  <div className="w-20 h-20 bg-stone-50 rounded-full">{children}</div>
);

export const AllLinks = ({ children }: IStandard) => (
  <div className="flex items-center">{children}</div>
);

export const NavLink = ({ children, onClick }: IStandard) => (
  <div onClick={onClick} className="cursor-pointer ">{children}</div>
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
    dark:bg-stone-50
    w-px h-8 mx-6"
  />
);

export const Image = ({ children }: IStandard) => (
  <div className=" w-12 h-12 rounded-full overflow-hidden">{children}</div>
);

export const ProfileName = ({ children }: IStandard) => (
  <p className="">{children}</p>
);
