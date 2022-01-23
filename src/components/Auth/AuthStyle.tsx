// Types
import type { ReactChild } from "react";
import type { FieldValues, UseFormRegister } from "react-hook-form";

type IStandard = {
  children?: ReactChild[] | ReactChild;
  item?: string;
  register?: UseFormRegister<FieldValues>;
  loading?: boolean;
};

/**
 * Tailwind Style
 */

export const FormWrap = ({ children }: IStandard) => (
  <div className="flex items-center justify-center mt-32 flex-col">
    {children}
  </div>
);