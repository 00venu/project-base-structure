import { useState } from "react";
import { CloseRightarrow, classNames } from "./";

const MaximizedAlaramPanel = ({ alaramPanelHandler }: any) => {
  const {
    maximizedAlaramPanel,
    leftArrow,
    maximizedPanelOpen,
    maximizedPanelClose,
  } = classNames;
  const [anim, setAnim] = useState(maximizedPanelOpen);
  const animHandler = () => {
    setAnim(maximizedPanelClose);
    setTimeout(() => alaramPanelHandler(), 0);
  };
  return (
    <div className={[maximizedAlaramPanel, maximizedPanelOpen].join(" ")}>
      <CloseRightarrow className={leftArrow} onClick={animHandler} />
    </div>
  );
};

export default MaximizedAlaramPanel;
