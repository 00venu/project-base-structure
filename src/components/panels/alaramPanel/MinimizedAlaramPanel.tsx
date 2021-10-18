import { AlarmIcon, AlarmBackground, Leftarrow, classNames,UpArrow } from "./";

const MinimizedAlaramPanel = ({ alaramPanelHandler }: any) => {
  const { minimizedAlaramPanel, textRotation, textContainer, leftArrow,arrowRotation90 } =
    classNames;
  return (
    <div className={minimizedAlaramPanel}>
<UpArrow  onClick={alaramPanelHandler} className={arrowRotation90}/>
    
      <div className={textRotation}>Alarms</div>
      <div className={[textContainer, textRotation].join(" ")}>
        <AlarmBackground />
        <span>30</span>
      </div>
      <div className={textRotation}>Events</div>
      <div className={[textContainer, textRotation].join(" ")}>
        <AlarmBackground />
        <span>30</span>
      </div>
      <div className={textRotation}>Alerts</div>
      <div className={[textContainer, textRotation].join(" ")}>
        <AlarmBackground />
        <span>30</span>
      </div>
      {/* <Leftarrow className={leftArrow} onClick={alaramPanelHandler} /> */}
    
    </div>
  );
};

export default MinimizedAlaramPanel;
