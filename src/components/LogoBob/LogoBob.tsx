// Types
import type { FC } from "react";

/*--------------------*/

// Local Types
interface IProps {}

/**
 * LogoBob Component
 */
const LogoBob: FC<IProps> = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <rect width="512" height="512" style={{ fill: "transparent" }} />
      <path d="M245.24,258.6l-78.35,67.07,78.35,74.09,78.36-74.09ZM181.84,326l63.41-54.28L308.65,326l-63.41,60Z" />
      <polygon points="212.54 286.59 174.7 254.81 266.97 177.3 132.25 64.14 132.25 290.46 132.25 445.48 217.69 373.71 166.89 325.67 212.54 286.59" />
      <polygon points="379.75 272.55 301.4 205.47 301.4 306.66 323.59 325.66 379.75 272.55" />
      <polygon points="301.4 346.67 301.4 447.87 379.75 373.77 323.58 325.69 301.4 346.67" />
    </svg>
  );
};

export default LogoBob;
