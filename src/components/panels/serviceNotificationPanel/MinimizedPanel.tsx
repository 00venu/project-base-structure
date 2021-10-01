import { LockIcon, AlarmBackground, classNames } from "./";

const MinimizedPanel = () => {
  const { minimizedPanel, textRotation, textContainer } = classNames;
  return (
    <div className={minimizedPanel}>
      <LockIcon />
      <div className={textRotation}>Unsubmitted Service Notifications</div>
      <div className={textContainer}>
        <AlarmBackground />
        <span>30</span>
      </div>
    </div>
  );
};

export default MinimizedPanel;
