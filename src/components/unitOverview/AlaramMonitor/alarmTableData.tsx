import { useSelector } from "react-redux";
import { DetailsList, DetailsListLayoutMode } from "@fluentui/react";
import { ReactComponent as CriticalityLow } from "../../../assets/img/unitOverView/criticality_low.svg";
import { ReactComponent as CriticalityHig } from "../../../assets/img/unitOverView/criticality_high.svg";
import { ReactComponent as MaintenanceIcon } from "../../../assets/img/unitOverView/alarm_maintenance_icon.svg";
import { RootState } from "../../../store/reducers";


export default function TrainDetails() {
  const renderList = useSelector((state:RootState ) => state.unitAEEMonitor.AlarmsList.value.data);

  // const renderList = [
  //   {
  //     train_number: "121331",
  //     unit_number: "coupling",
  //     alarm_source: "source",
  //     status: "08/01/2021",
  //   },
  //   {
  //     train_number: "121331",
  //     unit_number: "coupling",
  //     alarm_source: "source",
  //     status: "08/01/2021",
  //   },
  //   {
  //     train_number: "121331",
  //     unit_number: "coupling",
  //     alarm_source: "source",
  //     status: "08/01/2021",
  //   },
  //   {
  //     train_number: "121331",
  //     unit_number: "coupling",
  //     alarm_source: "source",
  //     status: "08/01/2021",
  //   },
  //   {
  //     train_number: "121331",
  //     unit_number: "coupling",
  //     alarm_source: "source",
  //     status: "08/01/2021",
  //   },
  //   {
  //     train_number: "121331",
  //     unit_number: "coupling",
  //     alarm_source: "source",
  //     status: "08/01/2021",
  //   },
  //   {
  //     train_number: "121331",
  //     unit_number: "coupling",
  //     alarm_source: "source",
  //     status: "08/01/2021",
  //   },
  //   {
  //     train_number: "121331",
  //     unit_number: "coupling",
  //     alarm_source: "source",
  //     status: "08/01/2021",
  //   },
  // ];
  const columns = [
    {
      key: "column1",
      name: "Type",
      fieldName: "type",
      minWidth: 50,
      maxWidth: 95,
      isResizable: true,
      isSorted: true
    },
    {
      key: "column2",
      name: "Defect ID",
      fieldName: "defect_id",
      minWidth: 50,
      maxWidth: 130,
      isResizable: true,
      isSorted: true
    },
    {
      key: "column3",
      name: "Description",
      fieldName: "defect_description",
      minWidth: 130,
      maxWidth: 200,
      isResizable: true,
      isSorted: true
    },
    {
      key: "column4",
      name: "Mode",
      fieldName: "mode",
      minWidth: 100,
      maxWidth: 130,
      isResizable: true,
    },
    {
      key: "column5",
      name: "Car No",
      fieldName: "equipment",
      minWidth: 80,
      maxWidth: 130 ,
      isResizable: true,
      isSorted: true
    },
    {
      key: "column6",
      name: "System",
      fieldName: "subsystem",
      minWidth: 80,
      maxWidth: 130,
      isResizable: true,
      isSorted: true
    },
    {
      key: "column7",
      name: "Component",
      fieldName: "component",
      minWidth: 90,
      maxWidth: 140,
      isResizable: true,
      isSorted: true
    },
    {
      key: "column8",
      name: "Date & Time",
      fieldName: "date",
      minWidth: 150,
      maxWidth: 200,
      isResizable: true,
      isSorted: true
    },
    {
      key: "column9",
      name: "Criticality",
      fieldName: "priority",
      minWidth: 80,
      maxWidth: 120,
      isResizable: true,
      isSorted: true,
      onRender: (items: any) => (
        <div>
          {items.priority == 'LOW' ?   <CriticalityLow  /> : <CriticalityHig />}
        </div>
      ),
    },
    {
      key: "column10",
      name: "Maintenance",
      fieldName: "constraintsImage",
      minWidth: 60,
      maxWidth: 140,
      isResizable: true,
      onRender: () => (
        <div> <MaintenanceIcon /></div>
      )
    },
  ];

  return (
    <DetailsList
      items={renderList}
      columns={columns}
      selectionMode={0}
      onRenderRow={(props, defaultRender: any) => (
        <div>{defaultRender(props)}</div>
      )}
      layoutMode={DetailsListLayoutMode.justified}
    />
  );
}
