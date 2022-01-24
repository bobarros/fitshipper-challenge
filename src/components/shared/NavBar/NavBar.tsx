// Third Parties
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "auth/supabaseClient";

// Style
import {
  NavWrap,
  Logo,
  AllLinks,
  NavLink,
  SwitchTheme,
  Divider,
  ProfileName,
  Image,
} from "./NavBarStyle";

// Types
import type { FC } from "react";
import type { Session } from "@supabase/supabase-js";

// Shared Components
import { LogoBob } from "..";

/*--------------------*/

// Local Types
interface IProps {
  setDark: (dark: boolean) => void;
  isCurrentDark: boolean;
  session: Session;
}

/**
 * NavBar Component
 */
const NavBar: FC<IProps> = ({ setDark, isCurrentDark, session }) => {
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
    <NavWrap>
      <Logo>
        <Link to="/">
          <LogoBob />
        </Link>
      </Logo>
      <AllLinks>
        {session ? (
          <>
            <NavLink onClick={() => authSignout()}>Logout</NavLink>
            <Divider />
            <ProfileName>{session.user?.email as string}</ProfileName>
            <Divider />
            <Image>
              <img
                src="https://res.cloudinary.com/bobarros/image/upload/v1642774262/mock_profile.jpg"
                alt=""
              />
            </Image>
          </>
        ) : (
          <NavLink>
            <Link to="/login">Login</Link>
          </NavLink>
        )}
        <Divider />
        <SwitchTheme isCurrentDark={isCurrentDark} setDark={setDark} />
      </AllLinks>
    </NavWrap>
  );
};

export default NavBar;
