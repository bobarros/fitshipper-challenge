// Types
import type { ReactChild } from "react";

type IStandard = {
  children?: ReactChild[] | ReactChild;
};

/**
 * Tailwind Style
 */

export const Wrap = ({ children }: IStandard) => (
  <div className="">{children}</div>
);

export const InnerWrap = ({ children }: IStandard) => (
  <div className="">{children}</div>
);
