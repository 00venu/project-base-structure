import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AlarmIcon,
  AlarmBackground,
  Leftarrow,
  classNames,
  UpArrow,
  data as dummyData,
} from "./";
import {
  fetchAlarmRequest,
  pushDummyContent,
} from "../../../store/actions/alarmActions";

const MinimizedAlaramPanel = ({ alaramPanelHandler }: any) => {
  const [alarmData, setalArmData]: any = useState([]);
  const [alertData, setAlertData]: any = useState([]);
  const [eventData, setEventData]: any = useState([]);

  const [lengthChange, setLengthChange]: any = useState({
    alarm: 0,
    alert: 0,
    event: 0,
  });

  const {
    minimizedAlaramPanel,
    textRotation,
    textContainer,
    leftArrow,
    arrowRotation90,
    colorSvg,
  } = classNames;
  const dispatch = useDispatch();

  /*useEffect(() => {
    dispatch(fetchAlarmRequest());
  }, [dispatch]);*/

  const data: any = useSelector((state: any) => state.AlarmReducer);

  const filterItems = (key: any, value: any, data: any) => {
    return data.filter((v: any) => v[key].toString().toLowerCase() === value);
  };
  const panelHandler = () => {
    setLengthChange({
      alarm: 0,
      alert: 0,
      event: 0,
    });
    alaramPanelHandler();
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
    console.log(data);
  }, [data]);

  useEffect(() => {
    (window as any).MyNamespace = setInterval(() => {
      const rndInt = Math.floor(Math.random() * dummyData.length);
      dispatch(pushDummyContent(dummyData[rndInt]));
    }, 10000);
    return () => {
      clearInterval((window as any).interval23);
    };
  }, []);
  useEffect(() => {
    setLengthChange((state: any) => {
      return {
        ...state,
        alarm: state.alarm + 1,
      };
    });
  }, [alarmData.length]);
  useEffect(() => {
    setLengthChange((state: any) => {
      return {
        ...state,
        alert: state.alert + 1,
      };
    });
  }, [alertData.length]);
  useEffect(() => {
    setLengthChange((state: any) => {
      return {
        ...state,
        event: state.event + 1,
      };
    });
  }, [eventData.length]);

  return (
    <div className={minimizedAlaramPanel}>
      <UpArrow onClick={panelHandler} className={arrowRotation90} />
      <div className={textRotation}>Alarms</div>
      <div className={[textContainer, textRotation].join(" ")}>
        <AlarmBackground className={lengthChange.alarm > 2 ? colorSvg : ""} />
        <span>{alarmData.length}</span>
      </div>
      <div className={textRotation}>Alerts</div>
      <div className={[textContainer, textRotation].join(" ")}>
        <AlarmBackground className={lengthChange.alert > 2 ? colorSvg : ""} />
        <span>{alertData.length}</span>
      </div>
      <div className={textRotation}>Events</div>
      <div className={[textContainer, textRotation].join(" ")}>
        <AlarmBackground className={lengthChange.event > 2 ? colorSvg : ""} />
        <span>{eventData.length}</span>
      </div>
      {/* <Leftarrow className={leftArrow} onClick={alaramPanelHandler} /> */}
    </div>
  );
};

export default MinimizedAlaramPanel;
