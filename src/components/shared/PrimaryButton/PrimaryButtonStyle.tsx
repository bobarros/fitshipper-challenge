// Types
import type { ReactChild } from "react";

type IStandard = {
  children?: ReactChild[] | ReactChild;
  disabled?: boolean;
  filled?: boolean;
  type: "button" | "submit" | "reset" | undefined;
};

/**
 * Tailwind Style
 */

export const Button = ({ children, filled, disabled, type }: IStandard) => {
  const colors = !filled
    ? "border-stone-900 bg-stone-50 text-stone-900 dark:text-stone-50 dark:bg-stone-800"
    : "border-stone-900 bg-stone-900 text-stone-50 dark:bg-stone-800 dark:text-stone-50";

  return (
    <div className={`py-1 px-2 border border-solid mt-2 w-full h-full ${colors}`}>
      <button className="w-full h-full text-left" type={type} disabled={disabled}>
        {disabled ? <span>Loading</span> : <span>{children}</span>}
      </button>
    </div>
  );
};
