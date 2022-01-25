// Third Parties
import { useNavigate } from "react-router-dom";
import { supabase } from "auth/supabaseClient";

// Types
import type { FC } from "react";

// Shared Components
import { PrimaryButton, SideBar } from "components";

/*--------------------*/

// Local Types
interface IProps {}

/**
 * Settings Component
 */

const Settings: FC<IProps> = () => {
  const navigate = useNavigate();
  // Logoff function
  const authSignout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
    if (!error) {
      navigate("/");
    }
  };
  return (
    <div className="h-full min-h-full grid grid-cols-8">
      <SideBar />
      <div className="p-6 col-span-7">
        <p className="text-4xl max-w-md text-stone-900 dark:text-stone-50">Settings</p>
        <div className="w-32 mt-8 cursor-pointer" onClick={() => authSignout()}>
          <PrimaryButton>Logout</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Settings;
