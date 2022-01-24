// Third Parties
import { Link } from "react-router-dom";

// Types
import type { FC } from "react";

// Style
import { SideBarWrap, LinkWrap } from "./SideBarStyle";

/*--------------------*/

// Local Types
interface IProps {}

// Content
const mockLinks = [
  {
    text: "Addresses",
    url: "/addresses",
  },
  {
    text: "Settings",
    url: "/settings",
  },
];

/**
 * NavBar Component
 */
const SideBar: FC<IProps> = () => {
  return (
    <SideBarWrap>
      {mockLinks.map((link, index) => {
        return (
          <LinkWrap key={index}>
            <Link to={link.url}>{link.text}</Link>
          </LinkWrap>
        );
      })}
    </SideBarWrap>
  );
};

export default SideBar;
