// Types
import type { FC } from "react";
import type { Session } from "@supabase/supabase-js";

// Hooks
import { useState } from "react";

// Shared Components
import { NavBar, Footer } from "../components/shared";

/*--------------------*/

// Local Types
interface IProps {
  session: Session;
}

/**
 * DefaultLayout Component
 */

const DefaultLayout: FC<IProps> = ({ children, session }) => {
  const [dark, setDark] = useState(true); // pay attention to dark mode being the default one
  return (
    <div
      className={`${dark ? "dark" : "light"} min-h-screen grid`}
      style={{ gridTemplateRows: "max-content 1fr max-content" }}
    >
      <NavBar isCurrentDark={dark} setDark={setDark} session={session} />
      <main className="bg-stone-50 dark:bg-stone-700">{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
