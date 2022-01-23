// Third Parties
import { useNavigate } from "react-router-dom";

// Syles
import { Input, Button, ErrorWarning } from "./AuthFormStyle";

// Types
import type { FC } from "react";
import type { FieldValues } from "react-hook-form";

// Hooks
import { useState } from "react";
import { useForm } from "react-hook-form";

/*--------------------*/

// Local Types
interface IProps {
  type: "login" | "signup";
}
/**
 * SupaForm Component
 */

const SupaForm: FC<IProps> = ({ type }) => {
  const formConfig = {
    redirect: type === "login" ? "/" : "/dashboard",
  };

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = async (data: FieldValues) => {
    const { email, password } = data;
    console.log("Show form data for now:", email, password)

    if(true) {
      navigate("/");
    }

    if(false) {
      // TODO handle when login is not successful
    }

    setLoading(false);
  };

  return (
    <form className="w-64" onSubmit={handleSubmit(handleLogin)}>
      <Input item="Email" register={register} />
      {errors.email && <ErrorWarning>The email is required</ErrorWarning>}
      <Input item="Password" register={register} />
      {errors.password && <ErrorWarning>The password is required</ErrorWarning>}
      <Button loading={loading} />
      {error && <ErrorWarning>Something went wrong! Please, try again.</ErrorWarning>}
    </form>
  );
};

export default SupaForm;
