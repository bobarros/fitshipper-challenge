// Types
import type { ReactChild } from "react";

type IStandard = {
  children?: ReactChild[] | ReactChild;
  disabled?: boolean;
  filled?: boolean;
};

/**
 * Tailwind Style
 */

export const Button = ({ children, filled, disabled }: IStandard) => {
  const colors = !filled
    ? "border-stone-900 bg-stone-50 text-stone-900 dark:text-stone-50 dark:bg-stone-800"
    : "border-stone-900 bg-stone-900 text-stone-50 dark:bg-stone-800 dark:text-stone-50";

  return (
    <div className={`py-1 px-2 border border-solid mt-2 ${colors}`}>
      <button type="submit" disabled={disabled}>
        {disabled ? <span>Loading</span> : <span>{children}</span>}
      </button>
    </div>
  );
};
