// Types
import type { FC } from "react";

// Shared Components
import { SideBar } from "components";

/*--------------------*/

// Local Types
interface IProps {}
/**
 * LoggedArea Component
 */

const LoggedArea: FC<IProps> = () => {
  return (
    <div className="h-full min-h-full grid grid-cols-8">
      <SideBar />
      <div className="p-6 col-span-7">
        <p className="text-4xl mt-32 max-w-md mx-auto text-stone-900 dark:text-stone-50 text-center ">
          Welcome to the challenge landing page!
        </p>
      </div>
    </div>
  );
};

export default LoggedArea;
