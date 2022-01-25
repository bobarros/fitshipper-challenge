// Types
import type { ReactChild } from "react";
type IStandard = {
  children: ReactChild[] | ReactChild;
};

/**
 * Tailwind Style
 */

export const FooterWrap = ({ children }: IStandard) => (
  <footer
    className={`
    px-6 py-12 text-center text-base text-center border-t border-solid border-stone-900
    bg-stone-50 text-stone-900
    dark:text-stone-50 dark:bg-stone-900
    md:text-xl
    2xl:text-2xl
  `}
  >
    {children}
  </footer>
);

export const Logo = ({ children }: IStandard) => (
  <div className="w-20 h-20 bg-stone-50 rounded-full mx-auto mb-12">
    {children}
  </div>
);

export const Disclaimer = () => (
  <p>
    This is the solution done by
    <a
      className="ml-2 italic underline"
      href="https://brunobarros.dev"
      rel="noopener noreferrer"
      target="_blank"
    >
      Bruno Barros
    </a>
  </p>
);
