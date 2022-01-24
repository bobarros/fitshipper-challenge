// Third Parties
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { supabase } from "./auth/supabaseClient";

// Types
import { FC, ReactNode } from "react";

// Hooks
import { useState, useEffect } from "react";

// Styles
import "./styles/globals.scss";

// Routes
import { Dashboard, Home, Login } from "./routes";
import DefaultLayout from "./layout/DefaultLayout";

// Local Types
interface IProps {}

/**
 * Render React App
 */
const App: FC<IProps> = () => {
  const [session, setSession] = useState<any>(null);

  // Check Authentication
  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const CustomRender = (page: ReactNode) => {
    return <DefaultLayout session={session}>{page}</DefaultLayout>;
  };

  if (!session) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={CustomRender(<Login />)} />
          <Route path="/" element={CustomRender(<Home />)} />
          <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={CustomRender(<Login />)} />
        <Route path="/" element={CustomRender(<Home session={session} />)} />
        <Route path="/dashboard" element={CustomRender(<Dashboard />)} />
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
