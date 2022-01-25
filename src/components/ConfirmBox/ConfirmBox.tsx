// Styles
import { Wrap, InnerWrap, Background } from "./ConfirmBoxStyle";

// Types
import type { FC } from "react";

/*--------------------*/

// Local Types
type IRemove = 'inactive' | 'remove' | 'cancel';
interface IProps {
  text: string;
  setAction: (action: IRemove) => void;
}

/**
 * ConfirmBox Component
 */
const ConfirmBox: FC<IProps> = ({ text, setAction }) => {
  return (
    <Wrap>
      <InnerWrap>
        <p className="text-2xl">Confirm</p>
        <div>
          <p className="text-center">Remove {text}?</p>
        </div>
        <div className="flex justify-between">
          <button onClick={() => setAction('cancel')}>Cancel</button>
          <button onClick={() => setAction('remove')}>Confirm</button>
        </div>
      </InnerWrap>
      <Background />
    </Wrap>
  );
};

export default ConfirmBox;
