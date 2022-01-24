// Third Parties
import { useNavigate } from "react-router-dom";
import { supabase } from "auth/supabaseClient";

// Types
import { PrimaryButton } from "components/shared";
import type { FC } from "react";

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
    <div className="h-full pt-16 pl-8 ">
      <p className="text-4xl max-w-md">Settings</p>
      <div className="w-32 mt-8 cursor-pointer" onClick={() => authSignout()}>
        <PrimaryButton>Logout</PrimaryButton>
      </div>
    </div>
  );
};

export default Settings;
