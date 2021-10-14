import { useState, useEffect } from "react";
import { FocusZone, FocusZoneDirection } from "@fluentui/react/lib/FocusZone";
import { List } from "@fluentui/react/lib/List";
import { Text } from "@fluentui/react/lib/Text";
import { Stack } from "@fluentui/react/lib/Stack";
import { Toggle } from "@fluentui/react/lib/Toggle";
import {
  classNames,
  TrainSvg,
  activeTabData,
  AlarmoverviewSpanelGreen,
  AlarmoverviewSpanelWhite,
  AlarmtrainIcon,
  UOSVG,
} from "./";

const ActiveTab = (props: any) => {
  const [activeData, setActiveData]: any = useState(activeTabData);
  const [pLowData, setPLowData] = useState([]);
  const [pHighData, setPHighData] = useState([]);

  const filterItems = (key: any, value: any) => {
    return activeTabData.filter(
      (v: any) => v[key].toString().toLocaleLowerCase() === value
    );
  };
  useEffect(() => {
    const lowData: any = filterItems("priority", "low");
    const highData: any = filterItems("priority", "high");
    setPLowData(lowData);
    setPHighData(highData);
  }, [activeData]);

  const {
    card,
    cardHeaderContainer,
    labelWidth,
    cardBottom,
    labelWidth2,
    cardsParent,
    buttonParent,
    priorityButtons,
    trainCircle,
    trainIcon,
    colorOrange,
    colorRed,
    activeButton,
    repairPriorityLow,
    repairPriorityHigh,
    spannerIcon,
    trainColorBlue,
    trainColorPink,
  } = classNames;
  interface CardList {
    defect_id: string;
    date: string;
    time: string;
    defect_description: string;
    functional_location: any;
    priority: string;
    is_sn_raised: any;
    sn_status: any;
    unit_status: any;
  }
  const alarmData = filterItems("type", "alarm");
  const eventData = filterItems("type", "event");
  const alertData = filterItems("type", "alert");

  const spanerIconFn = (is_sn_raised: any, sn_status: any) => {
    if (!is_sn_raised) {
      return null;
    } else if (is_sn_raised && sn_status.toString().toLowerCase() === "open") {
      return <AlarmoverviewSpanelWhite className={spannerIcon} />;
    } else {
      return <AlarmoverviewSpanelGreen className={spannerIcon} />;
    }
  };
  const trainColor = (unit_status: any) => {
    let val = unit_status.toString().toLowerCase();
    return val.includes("operation");
  };
  const onRenderCell = (
    item: CardList | undefined,
    index: number | undefined
  ): JSX.Element => {
    return (
      <div className={card} onClick={props.showDetails}>
        <div className={cardHeaderContainer} style={{ paddingBottom: "10px" }}>
          <ul>
            <li>
              <Stack>
                <Text nowrap={true} className={labelWidth}>
                  {spanerIconFn(item?.is_sn_raised, item?.sn_status)}
                  {item?.defect_id}
                </Text>
              </Stack>
            </li>
            <li>
              <Stack>
                <Text nowrap className={labelWidth}>
                  {item?.defect_description}
                </Text>
              </Stack>
            </li>
          </ul>
          <ul>
            <li>{item?.date}</li>
            <li>{item?.time}</li>
          </ul>
        </div>
        <div className={cardBottom}>
          <div>
            <UOSVG
              className={
                trainColor(item?.unit_status) ? trainColorBlue : trainColorPink
              }
            />
            <div>
              <Stack>
                <Text nowrap className={labelWidth2}>
                  {item?.functional_location}
                </Text>
              </Stack>
            </div>
          </div>
          <div
            className={
              item?.priority.toString().toLowerCase() === "low"
                ? repairPriorityLow
                : repairPriorityHigh
            }
          >
            {item?.priority}
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className={buttonParent}>
        <Toggle defaultChecked label={`Alarm (${alarmData.length})`} />
        <Toggle defaultChecked label={`Events (${eventData.length})`} />
        <Toggle defaultChecked label={`Alerts (${alertData.length})`} />
      </div>
      <ul className={priorityButtons}>
        <li className={activeButton}>
          <span className={trainCircle}>
            <UOSVG className={trainIcon} />
          </span>
          All <p>{activeData.length}</p>
        </li>
        <li>
          <span className={[trainCircle, colorRed].join(" ")}>
            <UOSVG className={trainIcon} />
          </span>
          High Priority <p>{pHighData.length}</p>
        </li>
        <li>
          <span className={[trainCircle, colorOrange].join(" ")}>
            <UOSVG className={trainIcon} />
          </span>
          Low Priority <p>{pLowData.length}</p>
        </li>
      </ul>
      <div className={cardsParent} style={{ height: "55vh" }}>
        <FocusZone direction={FocusZoneDirection.vertical}>
          <List items={activeData} onRenderCell={onRenderCell} />
        </FocusZone>
      </div>
    </>
  );
};

export default ActiveTab;
