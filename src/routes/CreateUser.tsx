// Types
import type { FC } from "react";

// Shared Components
import { SignUp } from "../components";

/*--------------------*/

// Local Types
interface IProps {}

/**
 * CreateUser Component
 */

const CreateUser: FC<IProps> = () => {
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default CreateUser;
