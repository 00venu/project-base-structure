import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlarmRequest } from "../../../store/actions/alarmActions";

import { Pivot, PivotItem } from "@fluentui/react";

import { classNames, TabItem } from "./";
const AlaramPanelTabs = (props: any) => {
  const [alaramListData, setAlaramListData]: any = useState([]);
  const [activeTabData, setActiveTabData]: any = useState([]);
  const [acknowledgedTabData, setAcknowledgedTabData]: any = useState([]);
  const [unacknowledgedTabData, setUnacknowledgedTabData]: any = useState([]);
  const [isIsolatedData, setIsIsolated]: any = useState([]);
  const [loading, setLoading]: any = useState(false);
  const dispatch = useDispatch();
  const { searchWord } = props;

  const { linkIsSelected } = classNames;

  useEffect(() => {
    dispatch(fetchAlarmRequest());
  }, [dispatch]);

  const data: any = useSelector((state: any) => state.AlarmReducer);

  useEffect(() => {
    if (
      data &&
      data.alarmData &&
      data.alarmData.data &&
      data.alarmData.data.AlarmsList
    ) {
      const alaramList = data.alarmData.data.AlarmsList.value.data;
      setAlaramListData(alaramList);

      let test = alaramList.map((u: any) => {
        return {
          ...u,
          isAcknowledged: u.isAcknowledged.toString(),
          isIsolated: u.isIsolated.toString(),
          is_sn_raised: u.is_sn_raised.toString(),
        };
      });

      test = test.sort((a:any, b:any) => a.type.localeCompare(b.type));
      
      props.getDownloadData(test);
    }
    setLoading(data.loading);
  }, [data]);

  useEffect(() => {
    const activeTabInfo = alaramListData.filter(
      (v: any) => !v.isIsolated && typeof v.isAcknowledged === "boolean"
    );
    const acknowledgedTabInfo = alaramListData.filter(
      (v: any) => v.isAcknowledged && v.isAcknowledged
    );
    const unacknowledgedInfo = alaramListData.filter(
      (v: any) => !v.isAcknowledged && !v.isAcknowledged
    );
    const isIsolatedInfo = alaramListData.filter(
      (v: any) => v.isIsolated && v.isIsolated
    );
    setActiveTabData(activeTabInfo);
    setAcknowledgedTabData(acknowledgedTabInfo);
    setUnacknowledgedTabData(unacknowledgedInfo);
    setIsIsolated(isIsolatedInfo);
  }, [alaramListData]);

  useEffect(() => {
    if (
      data &&
      data.alarmData &&
      data.alarmData.data &&
      data.alarmData.data.AlarmsList &&
      searchWord
    ) {
      let searchword = searchWord.toLowerCase();
      const alaramList = data.alarmData.data.AlarmsList.value.data;
      const searchResult: any = alaramList.filter((u: any) => {
        return (
          u.defect_description.toLowerCase().includes(searchword) ||
          u.defect_id.toLowerCase().includes(searchword) ||
          u.unit_status.toLowerCase().includes(searchword) ||
          u.fault_condition.toLowerCase().includes(searchword) ||
          u.functional_location.toLowerCase().includes(searchword)
        );
      });

      setAlaramListData(searchResult);
    }
    if (
      data &&
      data.alarmData &&
      data.alarmData.data &&
      data.alarmData.data.AlarmsList &&
      !searchWord
    ) {
      const alaramList = data.alarmData.data.AlarmsList.value.data;
      setAlaramListData(alaramList);
    }
  }, [searchWord]);

  return (
    <div>
      <Pivot
        aria-label="Basic Pivot Example"
        className={linkIsSelected}
        overflowBehavior="menu"
      >
        <PivotItem headerText={`Active(${activeTabData.length})`}>
          <TabItem
            showDetails={props.showDetails}
            tabItemData={activeTabData}
            loading={loading}
          />
        </PivotItem>
        <PivotItem headerText={`Acknowledged(${acknowledgedTabData.length})`}>
          <TabItem
            showDetails={props.showDetails}
            tabItemData={acknowledgedTabData}
            loading={loading}
          />
        </PivotItem>
        <PivotItem
          headerText={`Unacknowledged(${unacknowledgedTabData.length})`}
        >
          <TabItem
            showDetails={props.showDetails}
            tabItemData={unacknowledgedTabData}
            loading={loading}
          />
        </PivotItem>
        <PivotItem headerText={`Isolated(${isIsolatedData.length})`}>
          <TabItem
            showDetails={props.showDetails}
            tabItemData={isIsolatedData}
            loading={loading}
          />
        </PivotItem>
      </Pivot>
    </div>
  );
};

export default AlaramPanelTabs;
