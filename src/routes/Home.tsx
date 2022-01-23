// Types
import type { FC } from "react";

/*--------------------*/

// Local Types
interface IProps {}

/**
 * Home Component
 */

const Home: FC<IProps> = () => {
  return (
    <div className="h-full text-center">
      <p className="
      text-4xl mt-32 max-w-md mx-auto
      text-stone-900
      dark:text-stone-50
      ">
        Welcome to the challenge landing page!
      </p>
    </div>
  );
};

export default Home;
