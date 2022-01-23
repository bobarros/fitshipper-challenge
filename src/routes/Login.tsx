// Types
import type { FC } from "react";

/*--------------------*/

// Local Types
interface IProps {}

/**
 * Login Component
 */

const Login: FC<IProps> = () => {
  return (
    <div className="h-full text-center">
      <p className="text-4xl mt-32 max-w-md mx-auto">
        Login Page
      </p>
    </div>
  );
};

export default Login;
