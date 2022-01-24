// Syles
import { FormWrap } from "./SignUpStyle";

// Types
import type { FC } from "react";

// Shared Components
import { AuthForm } from "..";

/*--------------------*/

// Local Types
interface IProps {}
/**
 * SignUp Component
 */

const SignUp: FC<IProps> = () => {
  return (
    <FormWrap>
      <h1 className="mb-8 text-stone-900 dark:text-stone-50">Create New User</h1>
      <AuthForm type="signup" />
    </FormWrap>
  );
};

export default SignUp;
