// Third Parties
import { Link } from "react-router-dom";

// Style
import { NavWrap, Logo, AllLinks, NavLink, SwitchTheme, Divider } from "./NavBarStyle";

// Types
import type { FC } from "react";

// Shared Components
import { LogoBob } from "..";

/*--------------------*/

// Local Types
interface IProps {
  setDark: (dark: boolean) => void;
  isCurrentDark: boolean;
}

/**
 * NavBar Component
 */
const NavBar: FC<IProps> = ({ setDark, isCurrentDark }) => {
  return (
    <NavWrap>
      <Logo>
        <Link to="/">
          <LogoBob />
        </Link>
      </Logo>
      <AllLinks>
        <NavLink>
          <Link to="/login">Login</Link>
        </NavLink>
        <Divider />
        <SwitchTheme isCurrentDark={isCurrentDark} setDark={setDark} />
      </AllLinks>
    </NavWrap>
  );
};

export default NavBar;
