// Syles
import { FormWrap } from "./AuthStyle";

// Types
import type { FC } from "react";

// Shared Components
import { AuthForm } from "components";

/*--------------------*/

// Local Types
interface IProps {}
/**
 * Auth Component
 */

const Auth: FC<IProps> = () => {
  return (
    <FormWrap>
      <h1 className="mb-8 text-stone-900 dark:text-stone-50">Login</h1>
      <AuthForm type="login" />
    </FormWrap>
  );
};

export default Auth;
