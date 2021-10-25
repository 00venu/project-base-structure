import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AlarmIcon, AlarmBackground, Leftarrow, classNames, UpArrow } from "./";
import { fetchAlarmRequest } from "../../../store/actions/alarmActions";

const MinimizedAlaramPanel = ({ alaramPanelHandler }: any) => {
  const [alarmData, setalArmData]:any=useState([]);
  const [alertData, setAlertData]:any=useState([]);
  const [eventData, setEventData]:any=useState([]);

  const {
    minimizedAlaramPanel,
    textRotation,
    textContainer,
    leftArrow,
    arrowRotation90,
  } = classNames;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlarmRequest());
  }, [dispatch]);

  const data: any = useSelector((state: any) => state.AlarmReducer);

  const filterItems = (key: any, value: any, data: any) => {
    return data.filter((v: any) => v[key].toString().toLowerCase() === value);
  };

  useEffect(() => {
    if (
      data &&
      data.alarmData &&
      data.alarmData.data &&
      data.alarmData.data.AlarmsList
    ) {
      const alaramList = data.alarmData.data.AlarmsList.value.data;

      const alarmFilterData = filterItems("type", "alarm", alaramList);
      const alertFilterData = filterItems("type", "alert", alaramList);
      const evenFiltertData = filterItems("type", "event", alaramList);

      setalArmData(alarmFilterData);
      setAlertData(alertFilterData);
      setEventData(evenFiltertData);
    }
  }, [data]);

  return (
    <div className={minimizedAlaramPanel}>
      <UpArrow onClick={alaramPanelHandler} className={arrowRotation90} />
      <div className={textRotation}>Events</div>
      <div className={[textContainer, textRotation].join(" ")}>
        <AlarmBackground />
        <span>{eventData.length}</span>
      </div>
      <div className={textRotation}>Alerts</div>
      <div className={[textContainer, textRotation].join(" ")}>
        <AlarmBackground />
        <span>{alertData.length}</span>
      </div>
      <div className={textRotation}>Alarms</div>
      <div className={[textContainer, textRotation].join(" ")}>
        <AlarmBackground />
        <span>{alarmData.length}</span>
      </div>
      {/* <Leftarrow className={leftArrow} onClick={alaramPanelHandler} /> */}
    </div>
  );
};

export default MinimizedAlaramPanel;
