import { useState } from "react";
import {
  CloseRightarrow,
  classNames,
  UpArrow,
  RoundButton,
  SearchIcon,
  TrainAlert,
  AlaramPanelTabs,
  Exporticon
} from "./";

const MaximizedAlaramPanel = ({ alaramPanelHandler, showDetails }: any) => {
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
    cursor
  } = classNames;
  const [anim, setAnim] = useState(maximizedPanelOpen);
  
  const animHandler = () => {
    setAnim(maximizedPanelClose);
    setTimeout(() => alaramPanelHandler(), 0);
  };
 
 
  return (
    <section className="ms-Grid">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-xl11 ms-xxl11 ms-xxxl11">
          <div className={[maximizedAlaramPanel, maximizedPanelOpen].join(" ")}>
            <div>
              <div className={[panelHeaderContainer, mb20].join(" ")}>
                <h3>Alarms, Alerts and Events (AAE) Summary</h3>
                <div >
                  <SearchIcon className={searchIcon} />
                  <Exporticon className={cursor} />
                  <RoundButton text="Show All" />
                </div>
              </div>
              <AlaramPanelTabs showDetails={showDetails} />
            </div>
            
          </div>
        </div>
        <div className="ms-Grid-col ms-xl1 ms-xxl1 ms-xxxl1 leftArrow">
          <UpArrow onClick={animHandler} className={arrowRotation} />
        </div>
      </div>
    </section>

  );

};

export default MaximizedAlaramPanel;
