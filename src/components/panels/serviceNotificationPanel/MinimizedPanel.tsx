import { LockIcon, AlarmBackground, Rightarrow, classNames, UpArrow } from "./";

const MinimizedPanel = ({ servicePanelHandler }: any) => {
  const { minimizedPanel, textRotation, textContainer, leftArrow , arrowRotation90,countRotation} = classNames;
  return (
    <div className={minimizedPanel}>
      <UpArrow onClick={servicePanelHandler} className={arrowRotation90}/>
    
      <div className={textRotation}>Tickets Summary</div>
      <div className={[textContainer, countRotation].join(" ")}>
     
        <AlarmBackground />
        <span>30</span>
      </div>
      {/* <div className={leftArrow}>
        <Rightarrow onClick={servicePanelHandler} />
      </div> */}
    </div>
  );
};

export default MinimizedPanel;
