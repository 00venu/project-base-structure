import { DetailsList, DetailsListLayoutMode, DetailsRow, IDetailsRowProps } from "@fluentui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import  { ReactComponent as ConstraintIcon} from '../../../assets/img/unitOverView/constraints.svg';
import { Typography } from "../../../typography";
import styled from "styled-components";

const StyledTypography = styled(Typography)`
color: #5D5D5D;
padding: 0px 5px;
`;

interface ITrainDetailsProps {
  setTableRowSelectedState: (status: boolean) => void;
  isTableRowSelected: boolean; 
  selectedTableRow?: any;
  setSelectedTableRow: (props: IDetailsRowProps) => void;
}

export default function TrainDetails({setTableRowSelectedState, isTableRowSelected, setSelectedTableRow}: ITrainDetailsProps) {
  const unitMaintenance = useSelector((state:RootState ) => state.unitMaintenanceLog);
  console.log(unitMaintenance);
  const renderList = unitMaintenance.ServiceNotifications.value.data;
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
      name: "Ticket ID",
      fieldName: "defect_id",
      minWidth: 50,
      maxWidth: 95,
      isResizable: true,
      isSorted: true,
    },
    {
      key: "column2",
      name: "SN/SO No.",
      fieldName: "sn_number",
      minWidth: 50,
      maxWidth: 180,
      isResizable: true,
      isSorted: true,
      // onRender: (item: any) => (
      // console.log(item)
      //     // <><span>{i.sn_number}</span><StyledTypography variant="p1" tag="span">|</StyledTypography><span>{i.so_number}</span></>
      // )
        },
    {
      key: "column3",
      name: "SN/SO Description",
      fieldName: "notification_description",
      minWidth: 50,
      maxWidth: 300,
      isResizable: true,
      isSorted: true,
    },
    {
      key: "column4",
      name: "Date Raised",
      fieldName: "create_datetime",
      minWidth: 50,
      maxWidth: 120,
      isResizable: true,
      isSorted: true,
    },
    {
      key: "column5",
      name: "Car",
      fieldName: "equipment",
      minWidth: 50,
      maxWidth: 80,
      isResizable: true,
      isSorted: true,
    },
    {
      key: "column6",
      name: "Effect",
      fieldName: "status",
      minWidth: 50,
      maxWidth: 80,
      isResizable: true,
      isSorted: true,
    },
    {
      key: "column7",
      name: "Priority",
      fieldName: "priority",
      minWidth: 50,
      maxWidth: 80,
      isResizable: true,
      isSorted: true,
    },
    {
      key: "column8",
      name: "Status",
      fieldName: "status",
      minWidth: 50,
      maxWidth: 80,
      isResizable: true,
      isSorted: true,
    },
    {
      key: "column9",
      name: "Complete By",
      fieldName: "malfunctionstart_datetime",
      minWidth: 80,
      maxWidth: 220,
      isResizable: true,
      isSorted: true,
    },
    {
      key: "column10",
      name: "Constraint",
      fieldName: "constraintsImage",
      minWidth: 60,
      maxWidth: 140,
      isResizable: true,
      isSorted: true,
      onRender: () => (
        <div><ConstraintIcon className="tableTrainIcon" /></div>
      )
    },
  ];

  const _renderRow = (props?: IDetailsRowProps, defaultRender?: any): JSX.Element => {
    return (
      <div onClick={() => {
        setTableRowSelectedState(!isTableRowSelected);
        setSelectedTableRow(props?.item);
      }
      }>{props && <DetailsRow {...props} /> }</div>
    );
  }

  return (
    <>
      <div className={"ms-Grid-col ms-lg12 dl4"}>
        <DetailsList
          items={renderList}
          columns={columns}
          selectionMode={0}
          onRenderRow={_renderRow}
          layoutMode={DetailsListLayoutMode.justified}
        />
      </div>
    </>
  );
}
