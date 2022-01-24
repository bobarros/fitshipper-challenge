// Third Parties
import { Link } from "react-router-dom";

// Types
import type { FC } from "react";
import { Session } from "@supabase/supabase-js";

/*--------------------*/

// Local Types
interface IProps {
  session?: Session;
}

// Local Prep

const CustomCta = () => {
  return (
    <p className="text-xl mt-4 text-stone-900 dark:text-stone-50">
      Please,{" "}
      <Link className="underline" to="login">
        login
      </Link>{" "}
      to start
    </p>
  );
};

/**
 * Home Component
 */
const Home: FC<IProps> = ({ session }) => {
  return (
    <div className="h-full text-center">
      <p className="text-4xl mt-32 max-w-md mx-auto text-stone-900 dark:text-stone-50">
        Welcome to the challenge landing page!
      </p>
      {session ? null : <CustomCta />}
    </div>
  );
};

export default Home;
