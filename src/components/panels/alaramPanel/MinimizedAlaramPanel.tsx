import { AlarmIcon, AlarmBackground, Leftarrow, classNames } from "./";

const MinimizedAlaramPanel = ({ alaramPanelHandler }: any) => {
  const { minimizedAlaramPanel, textRotation, textContainer, leftArrow } =
    classNames;
  return (
    <div className={minimizedAlaramPanel}>
      <AlarmIcon />
      <div className={textRotation}>Alarms</div>
      <div className={textContainer}>
        <AlarmBackground />
        <span>30</span>
      </div>
      <div className={textRotation}>Events</div>
      <div className={textContainer}>
        <AlarmBackground />
        <span>30</span>
      </div>
      <div className={textRotation}>Alerts</div>
      <div className={textContainer}>
        <AlarmBackground />
        <span>30</span>
      </div>
      <Leftarrow className={leftArrow} onClick={alaramPanelHandler} />
    </div>
  );
};

export default MinimizedAlaramPanel;
