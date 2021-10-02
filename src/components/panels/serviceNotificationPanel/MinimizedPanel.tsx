import { LockIcon, AlarmBackground, Rightarrow, classNames } from "./";

const MinimizedPanel = ({ servicePanelHandler }: any) => {
  const { minimizedPanel, textRotation, textContainer, leftArrow } = classNames;
  return (
    <div className={minimizedPanel}>
      <LockIcon />
      <div className={textRotation}>Unsubmitted Service Notifications</div>
      <div className={textContainer}>
        <AlarmBackground />
        <span>30</span>
      </div>
      <div className={leftArrow}>
        <Rightarrow onClick={servicePanelHandler} />
      </div>
    </div>
  );
};

export default MinimizedPanel;
