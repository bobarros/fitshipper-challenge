// Third Parties
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Types
import { FC, ReactNode } from "react";

// Styles
import "./styles/globals.scss";

// Routes
import { Home, Login } from "./routes";
import DefaultLayout from "./layout/DefaultLayout";

// Local Types
interface IProps {}

/**
 * Render React App
 */
const App: FC<IProps> = () => {
  const CustomRender = (page: ReactNode) => {
    return <DefaultLayout>{page}</DefaultLayout>;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={CustomRender(<Home />)} />
        <Route path="/login" element={CustomRender(<Login />)} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
