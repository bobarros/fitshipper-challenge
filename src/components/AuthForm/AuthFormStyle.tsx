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

export const Input = ({ item = "", register }: IStandard) => (
  <div className="border-2 py-2 px-4 my-4">
    {register && (
      <input
        className="w-full h-full bg-transparent
        text-stone-900
        dark:text-stone-50"
        placeholder={item}
        type={item?.toLowerCase()}
        {...register(item.toLowerCase(), { required: true })}
      />
    )}
  </div>
);

export const Button = ({ loading }: IStandard) => (
  <div className="py-1 px-2 border border-solid border-stone-900 mt-2
  bg-stone-50 text-stone-900
  dark:text-stone-50 dark:bg-stone-800">
    <button type="submit" disabled={loading}>
      {loading ? <span>Loading</span> : <span>Login</span>}
    </button>
  </div>
);

export const ErrorWarning = ({ children }: IStandard) => (
  <span className="block mt-2 text-red-600 pl-2">{children}</span>
);
