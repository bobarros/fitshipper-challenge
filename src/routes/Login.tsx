// Types
import type { FC } from "react";

// Shared Components
import { Auth } from "components";

/*--------------------*/

// Local Types
interface IProps {}

/**
 * Login Component
 */

const Login: FC<IProps> = () => {
  return (
    <div>
      <Auth />
    </div>
  );
};

export default Login;
