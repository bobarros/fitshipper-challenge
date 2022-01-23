// Types
import type { FC } from "react";

// Hooks
import { useState } from "react";

// Shared Components
import { NavBar, Footer } from "../components/shared";

/*--------------------*/

// Local Types
interface IProps {}

/**
 * DefaultLayout Component
 */

const DefaultLayout: FC<IProps> = ({ children }) => {
  const [dark, setDark] = useState(false);
  return (
    <div className={`${dark ? "dark" : "light"} min-h-screen flex flex-col`}>
      <NavBar isCurrentDark={dark} setDark={setDark} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
