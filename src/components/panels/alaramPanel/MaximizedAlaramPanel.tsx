import { useState } from "react";
import {
  CloseRightarrow,
  classNames,
  RoundButton,
  SearchIcon,
  TrainAlert,
  AlaramPanelTabs,
  Exporticon,
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
    mb20,
    cursor,
  } = classNames;
  const [anim, setAnim] = useState(maximizedPanelOpen);
  const [details, setDetails] = useState(true);
  const animHandler = () => {
    setAnim(maximizedPanelClose);
    setTimeout(() => alaramPanelHandler(), 0);
  };
  const alertInfo = {
    noOfCabins: 2,
    issueInCabin: 1,
  };
  const showDetails = () => {
    setDetails(false);
  };
  return (
    <div className={[maximizedAlaramPanel, maximizedPanelOpen].join(" ")}>
      <CloseRightarrow className={leftArrow} onClick={animHandler} />
      {details ? (
        <div>
          <div className={[panelHeaderContainer, mb20].join(" ")}>
            <h3>Alarms, Alerts and Events Summary</h3>
            <SearchIcon className={searchIcon} />
            <Exporticon className={cursor} />
            <RoundButton text="Show All" />
          </div>
          <AlaramPanelTabs showDetails={showDetails} />
        </div>
      ) : (
        <div
          className={trainAlertParent}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <TrainAlert alertInfo={alertInfo} />
        </div>
      )}
    </div>
  );
};

export default MaximizedAlaramPanel;
