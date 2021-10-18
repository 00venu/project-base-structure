import { useState } from "react";
import {
  CloseRightarrow,  
  classNames,
  UpArrow,
  RoundButton,
  SearchIcon,
  TrainAlert,
  AlaramPanelTabs,
} from "./";

const MaximizedAlaramPanel = ({ alaramPanelHandler }: any) => {
  const {
    maximizedAlaramPanel,
    leftArrow,
    arrowRotation,
    maximizedPanelOpen,
    maximizedPanelClose,
    panelHeaderContainer,
    searchIcon,
    trainAlertParent,
    mb20,
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
    <section className="ms-Grid">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-xl11 ms-xxl11 ms-xxxl11">
          <div className={[maximizedAlaramPanel, maximizedPanelOpen].join(" ")}>
            {/* <CloseRightarrow className={leftArrow} onClick={animHandler} /> */}

            {details ? (
              <div>
                <div className={[panelHeaderContainer, mb20].join(" ")}>
                  <h3>Alarms, Alerts and Events Summary</h3>
                  <SearchIcon className={searchIcon} />
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
        </div>
        <div className="ms-Grid-col ms-xl1 ms-xxl1 ms-xxxl1 leftArrow">
          <UpArrow onClick={animHandler} className={arrowRotation}/>
        </div>
      </div>
    </section>

  );

};

export default MaximizedAlaramPanel;
