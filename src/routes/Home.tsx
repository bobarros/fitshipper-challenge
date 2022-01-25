// Third Parties
import { Link } from "react-router-dom";

// Types
import type { FC } from "react";
import { Session } from "@supabase/supabase-js";

// Shared Components
import { SideBar } from "components/shared";

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
    <div className={`h-full ${session && "grid grid-cols-8"}`}>
      <SideBar />
      <div className="p-6 col-span-7">
        <p className="text-4xl mt-32 max-w-md mx-auto text-stone-900 dark:text-stone-50 text-center ">
          Welcome to the challenge landing page!
        </p>
      </div>
      {session ? null : <CustomCta />}
    </div>
  );
};

export default Home;
