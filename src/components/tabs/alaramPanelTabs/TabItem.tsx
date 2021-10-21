import { useState, useEffect } from "react";
import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';
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
    AlarmoverviewSpanelGreen,
    AlarmoverviewSpanelWhite,
    AlarmtrainIcon,
    UOSVG,
} from ".";

const TabItem = (props: any) => {
    const [activeData, setActiveData]: any = useState([]);
    const [pLowData, setPLowData]: any = useState([]);
    const [pHighData, setPHighData]: any = useState([]);
    const [alarmData, setAlarmData]: any = useState([]);
    const [eventData, setEventData]: any = useState([]);
    const [alertData, setAlertData]: any = useState([]);
    const [filterValues, setFilterValues] = useState({
        alarm: true,
        event: false,
        alert: false,
    });

    const { tabItemData, loading } = props;
    useEffect(() => {

        setActiveData(tabItemData)

    }, [tabItemData])
    const filterItems = (key: any, value: any) => {
        return activeData.filter(
            (v: any) => v[key].toString().toLowerCase() === value
        );
    };
    const filterActiveItems = (key: any, value: any) => {
        return tabItemData.filter(
            (v: any) => v[key].toString().toLowerCase() === value
        );
    };
    useEffect(() => {

        const alarmFilterData = filterActiveItems("type", "alarm");
        const evenFiltertData = filterActiveItems("type", "event");
        const alertFilterData = filterActiveItems("type", "alert");
        setAlarmData(alarmFilterData);
        setEventData(evenFiltertData);
        setAlertData(alertFilterData);

    }, [tabItemData]);
    useEffect(() => {
        const lowData: any = filterItems("priority", "low");
        const highData: any = filterItems("priority", "high");
        setPLowData(lowData);
        setPHighData(highData);
    }, [activeData]);

    useEffect(() => {
        if (tabItemData.length) {
            const revisedData = tabItemData.filter((item: any, i: any) => {
                return (
                    (filterValues.alarm &&
                        item.type.toString().toLowerCase() === "alarm") ||
                    (filterValues.event &&
                        item.type.toString().toLowerCase() === "event") ||
                    (filterValues.alert &&
                        item.type.toString().toLowerCase() === "alert")
                );
            });
            setActiveData(revisedData);
        }
    }, [tabItemData, filterValues]);

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
    //Shimmer

    const onRenderCell = (
        item: CardList | undefined,
        index: number | undefined
    ): JSX.Element => {
        return (

            <div className={card} onClick={() => props.showDetails(item?.priority)}>
                <div className={cardHeaderContainer} style={{ paddingBottom: "10px" }}>
                    <ul>
                        <li>
                            <Stack>
                                <Text nowrap className={labelWidth}>
                                    {spanerIconFn(item?.is_sn_raised, item?.sn_status)}
                                    {item?.defect_id}
                                </Text>
                            </Stack>
                        </li>
                        <li>
                            <Stack>
                                <Text className={labelWidth}>
                                    {item?.defect_description}
                                </Text>
                            </Stack>
                        </li>
                    </ul>
                    <ul>
                        <li><Text nowrap>{item?.date}</Text></li>
                        <li><Text nowrap>{item?.time}</Text></li>
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
    const nodata = (
        <div className={noData}>
            <Icon iconName="sad" />
            <h3>No Data</h3>
        </div>);

    let allRecords: any = <Spinner size={SpinnerSize.large} />

    if (tabItemData.length && activeData.length) {
        allRecords = (<FocusZone direction={FocusZoneDirection.vertical}>
            <List items={activeData} onRenderCell={onRenderCell} />
        </FocusZone>)
    }
    if (!activeData.length && !loading || !tabItemData.length && !loading) {
        allRecords = nodata
    }

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
                    id="alert"
                    label={`Alerts (${alertData.length})`}
                    onChange={ToggleChange}
                />
                <Toggle
                    id="event"
                    label={`Events (${eventData.length})`}
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
                            {allRecords}
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
                            ) : nodata}
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
                            ) : nodata}
                        </div>
                    </PivotItem>
                </Pivot>
            </div>
        </>
    );
};

export default TabItem;
