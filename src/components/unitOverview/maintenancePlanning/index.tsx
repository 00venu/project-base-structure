import { Pivot, PivotItem } from "@fluentui/react";
import { Typography } from "../../../typography";
import TrainData from "./tableData";
import { classNames } from "../classess";
import { Constraints } from "./constraints";
import { MaintenancePlanningFilters } from "./filters";
import { ServiceNotificationDetails } from "./serviceNotificationDetails";
import {
  StyledMaintenanceContainer,
  StyledMaintenanceDiv,
} from "./styledComponents";
import { RepairDetails } from "./repairDetails";
import styled from "styled-components";
import cancleIcon from "../../../assets/img/unitOverView/cancel_icon.svg";
import { useState } from "react";
import { RootState } from "../../../store/reducers";
import { useSelector } from "react-redux";

const StyledTypography = styled(Typography)`
  position: absolute;
  top: -48px;
  right: 512px;
`;
const StyledImg = styled.img`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;
export const MaintenancePlanning = () => {
  const unitMaintenance = useSelector((state:RootState ) => state.unitMaintenanceLog);
  console.log(unitMaintenance);
  const [isTableRowSelected, setTableRowSelectedState] = useState<boolean>(false);
  const [selectedTableRow, setSelectedTableRow] = useState<any>();
  const { linkIsSelected, horizontalLine } = classNames;
  return (
    <div style={{ position: "relative" }}>
      <StyledTypography variant="p1">
        Next Routine Maintenance: 08/01/2021 | Last Routine Maintenance:
        08/12/2021 |
      </StyledTypography>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <MaintenancePlanningFilters />
        <TrainData setTableRowSelectedState={setTableRowSelectedState}
        isTableRowSelected={isTableRowSelected}
        setSelectedTableRow={setSelectedTableRow}/>
        {isTableRowSelected && (
          <StyledMaintenanceDiv>
            <StyledImg src={cancleIcon} onClick={() => setTableRowSelectedState(false)} />
            <StyledMaintenanceContainer>
              <Typography variant="p1" tag="span">
                Service Notification No.: {unitMaintenance.SNDetail.value.sn_id}
              </Typography>
              <Typography variant="p1" tag="span" className="varticalBar">
                |
              </Typography>
              <Typography variant="p1" tag="span">
              Service Order No.: {unitMaintenance.SNDetail.value.service_order_no}
              </Typography>
              <Typography variant="p1" tag="span" className="varticalBar">
                |
              </Typography>
              <Typography variant="p1" tag="span">
                Effect:  {unitMaintenance.SNDetail.value.effect}
              </Typography>
              <Typography variant="p1" tag="span" className="varticalBar">
                |
              </Typography>
              <Typography variant="p1" tag="span">
                Priority: {unitMaintenance.SNDetail.value.priority}
              </Typography>
              <Typography variant="p1" tag="span" className="varticalBar">
                |
              </Typography>
              <Typography variant="p1" tag="span">
                Created Date & Time: {unitMaintenance.SNDetail.value.key_dates.create_datetime}
              </Typography>
              <Typography variant="p1" tag="span" className="varticalBar">
                |{" "}
              </Typography>
              <Typography variant="p1" tag="span">
                Changed Date & Time: {unitMaintenance.SNDetail.value.key_dates.update_datetime}
              </Typography>
            </StyledMaintenanceContainer>
            <div className={horizontalLine} />
            <Pivot
              aria-label="Basic Pivot Example"
              className={linkIsSelected}
              overflowBehavior="menu"
            >
              <PivotItem headerText="Maintenance Details">
                <ServiceNotificationDetails />
              </PivotItem>
              <PivotItem headerText="Constraints">
                <Constraints />
              </PivotItem>
              <PivotItem headerText="Repair Details">
                <RepairDetails />
              </PivotItem>
            </Pivot>
          </StyledMaintenanceDiv>
        )}
      </div>
    </div>
  );
};
