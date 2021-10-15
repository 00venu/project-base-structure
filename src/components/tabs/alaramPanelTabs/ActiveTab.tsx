import { useState, useEffect } from "react";
import { FocusZone, FocusZoneDirection } from "@fluentui/react/lib/FocusZone";
import { List } from "@fluentui/react/lib/List";
import { Text } from "@fluentui/react/lib/Text";
import { Stack } from "@fluentui/react/lib/Stack";
import { Toggle } from "@fluentui/react/lib/Toggle";
import { Icon } from "@fluentui/react/lib/Icon";
import { Label, Pivot, PivotItem } from "@fluentui/react";
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
  const [pLowData, setPLowData]: any = useState([]);
  const [pHighData, setPHighData]: any = useState([]);
  const [alarmData, setAlarmData]: any = useState([]);
  const [eventData, setEventData]: any = useState([]);
  const [alertData, setAlertData]: any = useState([]);
  const [filterValues, setFilterValues] = useState({
    alarm: true,
    event: true,
    alert: true,
  });

  const filterItems = (key: any, value: any) => {
    return activeData.filter(
      (v: any) => v[key].toString().toLocaleLowerCase() === value
    );
  };
  const filterActiveItems = (key: any, value: any) => {
    return activeTabData.filter(
      (v: any) => v[key].toString().toLocaleLowerCase() === value
    );
  };
  useEffect(() => {
    const alarmFilterData = filterActiveItems("type", "alarm");
    const evenFiltertData = filterActiveItems("type", "event");
    const alertFilterData = filterActiveItems("type", "alert");
    setAlarmData(alarmFilterData);
    setEventData(evenFiltertData);
    setAlertData(alertFilterData);
  }, []);
  useEffect(() => {
    const lowData: any = filterItems("priority", "low");
    const highData: any = filterItems("priority", "high");
    setPLowData(lowData);
    setPHighData(highData);
  }, [activeData]);

  useEffect(() => {
    const revisedData = activeTabData.filter((item, i) => {
      return (
        (filterValues.alarm &&
          item.type.toString().toLocaleLowerCase() === "alarm") ||
        (filterValues.event &&
          item.type.toString().toLocaleLowerCase() === "event") ||
        (filterValues.alert &&
          item.type.toString().toLocaleLowerCase() === "alert")
      );
    });
    console.log(revisedData);
    setActiveData(revisedData);
  }, [filterValues]);

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
    noData,
    tabParent,
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
    name: any;
  }

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
  const ToggleChange = (
    ev: React.MouseEvent<HTMLElement>,
    checked?: boolean
  ) => {
    const id = ev.currentTarget["id"];
    if (id) {
      setFilterValues((state) => {
        return {
          ...state,
          [id]: checked,
        };
      });
    }
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
        <Toggle
          id="alarm"
          defaultChecked
          label={`Alarm (${alarmData.length})`}
          onChange={ToggleChange}
        />
        <Toggle
          id="event"
          defaultChecked
          label={`Events (${eventData.length})`}
          onChange={ToggleChange}
        />
        <Toggle
          id="alert"
          defaultChecked
          label={`Alerts (${alertData.length})`}
          onChange={ToggleChange}
        />
      </div>
      <div className={tabParent}>
        <Pivot aria-label="Links of Tab Style Pivot Example" linkFormat="tabs">
          <PivotItem
            onRenderItemLink={() => (
              <>
                <span className={trainCircle}>
                  <UOSVG className={trainIcon} />
                </span>
                All <p>{activeData.length}</p>
              </>
            )}
          >
            <div className={cardsParent}>
              {activeData.length ? (
                <FocusZone direction={FocusZoneDirection.vertical}>
                  <List items={activeData} onRenderCell={onRenderCell} />
                </FocusZone>
              ) : (
                <div className={noData}>
                  <Icon iconName="sad" />
                  <h3>No Data</h3>
                </div>
              )}
            </div>
          </PivotItem>
          <PivotItem
            onRenderItemLink={() => (
              <>
                <span className={[trainCircle, colorRed].join(" ")}>
                  <UOSVG className={trainIcon} />
                </span>
                High Priority <p>{pHighData.length}</p>
              </>
            )}
          >
            <div className={cardsParent}>
              {pHighData.length ? (
                <FocusZone direction={FocusZoneDirection.vertical}>
                  <List items={pHighData} onRenderCell={onRenderCell} />
                </FocusZone>
              ) : (
                <div className={noData}>
                  <Icon iconName="sad" />
                  <h3>No Data</h3>
                </div>
              )}
            </div>
          </PivotItem>
          <PivotItem
            onRenderItemLink={() => (
              <>
                <span className={[trainCircle, colorOrange].join(" ")}>
                  <UOSVG className={trainIcon} />
                </span>
                Low Priority <p>{pLowData.length}</p>
              </>
            )}
          >
            <div className={cardsParent}>
              {pLowData.length ? (
                <FocusZone direction={FocusZoneDirection.vertical}>
                  <List items={pLowData} onRenderCell={onRenderCell} />
                </FocusZone>
              ) : (
                <div className={noData}>
                  <Icon iconName="sad" />
                  <h3>No Data</h3>
                </div>
              )}
            </div>
          </PivotItem>
        </Pivot>
      </div>
    </>
  );
};

export default ActiveTab;
