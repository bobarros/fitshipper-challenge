// Types
import type { FC } from "react";

/*--------------------*/

// Local Types
interface IProps {}

/**
 * Settings Component
 */

const Settings: FC<IProps> = () => {
  return (
    <div className="h-full">
      <p className="text-4xl mt-16 ml-8 max-w-md">Settings</p>
    </div>
  );
};

export default Settings;
