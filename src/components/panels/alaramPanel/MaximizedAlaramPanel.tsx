import { useState } from "react";
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { CSVLink, CSVDownload } from "react-csv";
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
    cursor,
    searchBox
  } = classNames;
  const [anim, setAnim] = useState(maximizedPanelOpen);
  const [searchBoxVisable, setSearchBoxVisable]: any = useState(false);
  const [searchWord, setSearchWord]: any = useState();
  const [csvData, setCsvData] = useState([]);

  const animHandler = () => {
    setAnim(maximizedPanelClose);
    setTimeout(() => alaramPanelHandler(), 0);
  };
  const searchIconHandler = () => {
    setSearchBoxVisable(true)
  }
  const closeSearchBoxHandler = () => {
    setSearchBoxVisable(false)
  }

  function debounce<Params extends any[]>(
    func: (...args: Params) => any,
    timeout: number,
  ): (...args: Params) => void {
    let timer: NodeJS.Timeout
    return (...args: Params) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func(...args)
      }, timeout)
    }
  }

  function test(message: any) {
    setSearchWord(message);
  }
  const debouncedTest = debounce(test, 500);

  const onSearchHandler = (val: any) => {
    debouncedTest(val)
  }

  return (
    <section className="ms-Grid">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-xl11 ms-xxl11 ms-xxxl11">
          <div className={[maximizedAlaramPanel, maximizedPanelOpen].join(" ")}>
            <div>
              <div className={[panelHeaderContainer, mb20].join(" ")}>
                <h3>Alarms, Alerts and Events (AAE) Summary</h3>
                <div >
                  <SearchIcon className={searchIcon} onClick={searchIconHandler} />
                  <CSVLink data={csvData} filename={"AAE_Summary.csv"}><Exporticon className={cursor} /></CSVLink>
                  <RoundButton text="Show All" />
                </div>
              </div>
              <AlaramPanelTabs showDetails={showDetails} searchWord={searchWord} getDownloadData={setCsvData} />
            </div>
            {searchBoxVisable ? <SearchBox placeholder="Enter Search Phrase" className={searchBox} onChange={(ev: any, val) => onSearchHandler(val)} onClear={closeSearchBoxHandler} onEscape={closeSearchBoxHandler} /> : null}
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
