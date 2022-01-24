// Third Parties

// Styles
import { Button } from "./PrimaryButtonStyle";

// Next

// Types
import { FC } from "react";

// Hooks

// Shared Components

/*--------------------*/

// Local Types
interface IProps {
  children: string;
  filled?: boolean;
  disabled?: boolean;
}

/**
 * Boilerplate Component
 */
const Boilerplate: FC<IProps> = ({ children, filled, disabled }) => {
  return (
    <Button filled={filled} disabled={disabled}>
      {children}
    </Button>
  );
};

export default Boilerplate;
