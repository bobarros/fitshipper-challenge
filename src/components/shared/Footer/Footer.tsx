// Third Parties
import { Link } from "react-router-dom";

// Types
import type { FC } from "react";

// Style
import { FooterWrap, Logo, Disclaimer } from "./FooterStyle";

// Shared Components
import { LogoBob } from "..";

/*--------------------*/

// Local Types
interface IProps {}

/**
 * Footer Component
 */
const Footer: FC<IProps> = () => {
  return (
    <FooterWrap>
      <Logo>
        <Link to="/">
          <LogoBob />
        </Link>
      </Logo>
      <Disclaimer />
    </FooterWrap>
  );
};

export default Footer;
