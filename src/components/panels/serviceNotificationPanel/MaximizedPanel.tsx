import { useState } from "react";
import { FocusZone, FocusZoneDirection } from "@fluentui/react/lib/FocusZone";
import { List } from "@fluentui/react/lib/List";
import {
  classNames,
  CloseLeftarrow,
  RoundButton,
  SearchIcon,
  TrainSvg,
  DummyData,
} from "./";

const MaximizedPanel = ({ servicePanelHandler }: any) => {
  const {
    maximizedPanel,
    maximizedPanelOpen,
    maximizedPanelClose,
    leftArrowClose,
    panelHeaderContainer,
    searchIcon,
    cardsParent,
    card,
    cardHeaderContainer,
    cardBody,
    cardBottom,
  } = classNames;
  const [anim, setAnim] = useState(maximizedPanelOpen);

  const animHandler = () => {
    setAnim(maximizedPanelClose);
    setTimeout(() => servicePanelHandler(), 0);
  };

  interface CardList {
    text1: string;
    text2: string;
    date: string;
    time: string;
    text3: string;
    text5: string;
  }
  const onRenderCell = (
    item: CardList | undefined,
    index: number | undefined
  ): JSX.Element => {
    return (
      <div className={card}>
        <div className={cardHeaderContainer}>
          <ul>
            <li>{item?.text1}</li>
            <li>{item?.text2}</li>
          </ul>
          <ul>
            <li>{item?.date}</li>
            <li>{item?.time}</li>
          </ul>
        </div>
        <div className={cardBody}>{item?.text3}</div>
        <div className={cardBottom}>
          <div>
            <TrainSvg /> {item?.text5}
          </div>
          <ul>
            <li>OPEN</li>
            <li>TOP</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className={[maximizedPanel, anim].join(" ")}>
      <CloseLeftarrow className={leftArrowClose} onClick={animHandler} />
      <div className={panelHeaderContainer}>
        <h3>Unsubmitted Service Notifications</h3>
        <SearchIcon className={searchIcon} />
        <RoundButton text="Show All" />
      </div>
      <div className={cardsParent}>
        <FocusZone direction={FocusZoneDirection.vertical}>
          <List items={DummyData} onRenderCell={onRenderCell} />
        </FocusZone>
      </div>
    </div>
  );
};

export default MaximizedPanel;
