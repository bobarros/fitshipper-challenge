// Third Parties
import { supabase } from "../../auth/supabaseClient";
import { useNavigate } from "react-router-dom";

// Syles
import { Input, ErrorWarning } from "./AuthFormStyle";

// Types
import type { FC } from "react";
import type { FieldValues } from "react-hook-form";

// Hooks
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// Shared Components
import { PrimaryButton } from "../shared";

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
    const { error } = isLogin
      ? await supabase.auth.signIn(currentUser)
      : await supabase.auth.signUp(currentUser);
    if (error) setErrorForm(error.message);
    if (!error) navigate(isLogin ? "/dashboard" : "/login");
    setLoading(false);
  };

  return (
    <div>
      <form className="w-64" onSubmit={handleSubmit(handleLogin)}>
        <Input item="Email" register={register} />
        {errors.email && <ErrorWarning>The email is required</ErrorWarning>}
        <Input item="Password" register={register} />
        {errors.password && (
          <ErrorWarning>The password is required</ErrorWarning>
        )}
        <PrimaryButton disabled={loading} filled>
          {isLogin ? "Login" : "Sign up"}
        </PrimaryButton>
        {errorForm && <ErrorWarning>Something went wrong!</ErrorWarning>}
      </form>
      <div className="text-center mt-6 text-stone-900 dark:text-stone-50">
        <p>
          Not a user? <Link to="/signup">Sign Up</Link>
        </p>
        <p className="mt-2">
          <Link to="/">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
