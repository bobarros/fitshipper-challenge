// Styles
import { Button } from "./PrimaryButtonStyle";

// Types
import { FC } from "react";

/*--------------------*/

// Local Types
interface IProps {
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
  filled?: boolean;
  disabled?: boolean;
}

/**
 * Boilerplate Component
 */
const Boilerplate: FC<IProps> = ({ children, filled, disabled, type = "submit" }) => {
  return (
    <Button type={type} filled={filled} disabled={disabled}>
      {children}
    </Button>
  );
};

export default Boilerplate;
