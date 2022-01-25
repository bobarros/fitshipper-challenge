// Styles
import { Wrap, InnerWrap, Background } from "./ConfirmBoxStyle";

// Types
import type { FC } from "react";

/*--------------------*/

// Local Types
interface IProps {}

/**
 * ConfirmBox Component
 */
const ConfirmBox: FC<IProps> = () => {
  return (
    <Wrap>
      <InnerWrap>
        <p className="text-2xl">Confirm</p>
        <div>
          <p className="text-center">Remove 123 Test Street</p>
        </div>
        <div className="flex justify-between">
          <button>Cancel</button>
          <button>Confirm</button>
        </div>
      </InnerWrap>
      <Background />
    </Wrap>
  );
};

export default ConfirmBox;
