import { useState } from "react";
import { classNames, CloseLeftarrow } from "./";

const MaximizedPanel = ({ servicePanelHandler }: any) => {
  const {
    maximizedPanel,
    maximizedPanelOpen,
    maximizedPanelClose,
    leftArrowClose,
  } = classNames;
  const [anim, setAnim] = useState(maximizedPanelOpen);

  const animHandler = () => {
    setAnim(maximizedPanelClose);
    setTimeout(() => servicePanelHandler(), 0);
  };

  return (
    <div className={[maximizedPanel, anim].join(" ")}>
      <CloseLeftarrow className={leftArrowClose} onClick={animHandler} />
    </div>
  );
};

export default MaximizedPanel;
