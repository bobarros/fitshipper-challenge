// Third Parties
import { supabase } from "../../auth/supabaseClient";
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
 * AuthForm Component
 */

const AuthForm: FC<IProps> = ({ type }) => {
  const isLogin = type === "login";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [errorForm, setErrorForm] = useState<string | null>(null);

  const handleLogin = async (data: FieldValues) => {
    const { email, password } = data;
    const currentUser = {
      email: email,
      password: password,
    };
    const { error } = isLogin ? await supabase.auth.signIn(currentUser) : await supabase.auth.signUp(currentUser);
    if (error) setErrorForm(error.message);
    if (!error) navigate("/dashboard");
    setLoading(false);
  };

  return (
    <form className="w-64" onSubmit={handleSubmit(handleLogin)}>
      <Input item="Email" register={register} />
      {errors.email && <ErrorWarning>The email is required</ErrorWarning>}
      <Input item="Password" register={register} />
      {errors.password && <ErrorWarning>The password is required</ErrorWarning>}
      <Button loading={loading} />
      {errorForm && <ErrorWarning>Something went wrong!</ErrorWarning>}
    </form>
  );
};

export default AuthForm;
