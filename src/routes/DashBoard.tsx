// Types
import type { FC } from "react";

/*--------------------*/

// Local Types
interface IProps {}

/**
 * Dashboard Component
 */

const Dashboard: FC<IProps> = () => {
  return (
    <div className="h-full text-center">
      <p className="text-4xl mt-32 max-w-md mx-auto">
        Welcome to the Dashboard landing page!
      </p>
    </div>
  );
};

export default Dashboard;
