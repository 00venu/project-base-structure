import { useState } from "react";
import {
  CloseRightarrow,
  classNames,
  RoundButton,
  SearchIcon,
  TrainAlert,
  AlaramPanelTabs,
} from "./";

const MaximizedAlaramPanel = ({ alaramPanelHandler }: any) => {
  const {
    maximizedAlaramPanel,
    leftArrow,
    maximizedPanelOpen,
    maximizedPanelClose,
    panelHeaderContainer,
    searchIcon,
    trainAlertParent,
  } = classNames;
  const [anim, setAnim] = useState(maximizedPanelOpen);
  const animHandler = () => {
    setAnim(maximizedPanelClose);
    setTimeout(() => alaramPanelHandler(), 0);
  };
  const alertInfo = {
    noOfCabins: 2,
    issueInCabin: 1,
  };
  return (
    <div className={[maximizedAlaramPanel, maximizedPanelOpen].join(" ")}>
      <CloseRightarrow className={leftArrow} onClick={animHandler} />
      <div className={panelHeaderContainer}>
        <h3>Alarms, Alerts and Events Summary</h3>
        <SearchIcon className={searchIcon} />
        <RoundButton text="Show All" />
      </div>
      <div
        className={trainAlertParent}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <TrainAlert alertInfo={alertInfo} />
      </div>
      <AlaramPanelTabs />
    </div>
  );
};

export default MaximizedAlaramPanel;
