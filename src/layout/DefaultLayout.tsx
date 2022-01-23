// Types
import type { FC } from "react";

// Hooks
import { useState } from "react";

// Shared Components

/*--------------------*/

// Local Types
interface IProps {}

/**
 * DefaultLayout Component
 */

const DefaultLayout: FC<IProps> = ({ children }) => {
  const [dark, setDark] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <nav>Navbar</nav>
      <main className={`${dark ? "dark" : "light"} flex-1`}>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default DefaultLayout;
