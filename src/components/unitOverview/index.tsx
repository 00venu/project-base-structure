import * as React from "react";
import {
  IStyleSet,
  Label,
  ILabelStyles,
  Pivot,
  PivotItem,
  Dropdown,
  Icon,
  IDropdownOption,
} from "@fluentui/react";
import { classNames } from "./classess";
import { Typography } from "../../typography";
import backIcon from "../../assets/img/unitOverView/back_button.svg";
import lastWatched from "../../assets/img/unitOverView/last-watched-icon.svg";
import exportIcon from "../../assets/img/unitOverView/export_icon.svg";
import refreshIcon from "../../assets/img/unitOverView/refresh_icon.svg";
import trainIcon from "../../assets/img/unitOverView/train_icon.svg";
import { UnitOverviewTabs } from "./tabs";
import styled from "styled-components";
import { AlarmsOverview } from "./AlaramMonitor/alarmsOverview";
import { MaintenancePlanning } from "./maintenancePlanning";
import UnitOverView from "./unitOverView";
import { useDispatch, useSelector } from "react-redux";
import { fetchUnitsRequest } from "../../store/actions/unitOverviewActions";
import { AlaramDropdown } from "./dropDown";
import { fetchUnitAEEMonitorRequest } from "../../store/actions/unitAEEMonitor";
import { fetchUnitServiceNotificationsRequest } from "../../store/actions/unitMaintenanceLog";
import { RootState } from "../../store/reducers";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledDivContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: 35px;
  right: 0px;
`;

const StyledRefreshIcon = styled.img`
  padding-left: 10px;
`;
const StyledFlexContainer = styled.div`
  display: flex;
`;
const StyledVerticalLine = styled(Typography)`
  padding: 0px 10px;
`;
const StyledIcon = styled.img`
  padding-right: 10px;
`;
const StyledDropdown = styled(Dropdown)`
  width: 320px;
  margin-right: 40px;
  .ms-Dropdown {
    width: 320px;
  }
  .ms-Dropdown-title {
    width: 320px;
  }
`;
const StyledTitle = styled(Typography)`
  width: 150px;
  height: 24px;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  padding-top: 8px;
`;

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: {
    marginTop: "10px",
  },
};

export const UnitOverview: React.FunctionComponent = () => {
  const unitOverView = useSelector((state:RootState ) => state.unitOverView);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUnitsRequest());
    dispatch(fetchUnitAEEMonitorRequest());
    dispatch(fetchUnitServiceNotificationsRequest());
  }, [dispatch]);
  
  const { linkIsSelected, horizontalLine } = classNames;

  return (
    <>
      <StyledDiv>
        <StyledFlexContainer>
            <img src={backIcon} alt="img1" style={{marginRight:"10px"}} />
          <StyledTitle variant="head1"> Unit Overview</StyledTitle>
          <UnitOverviewTabs />
        </StyledFlexContainer>
        <StyledFlexContainer>
          <AlaramDropdown/>
        </StyledFlexContainer>
      </StyledDiv>
      <StyledDivContainer>
        <Typography variant="p1">Last Washed:{unitOverView.last_washed_date}</Typography>
        <StyledVerticalLine variant="p1">|</StyledVerticalLine>
        <Typography variant="p1">
          <StyledIcon src={lastWatched} alt="img2" />
          Last Communication: 05/01/2021 09:20 AM
          <StyledRefreshIcon src={refreshIcon} alt="refreshIcon" />
        </Typography>
      </StyledDivContainer>
      <div className={horizontalLine} />
      <Pivot
        aria-label="Basic Pivot Example"
        className={linkIsSelected}
        overflowBehavior="menu"
      >
        <PivotItem headerText="Overview">
          <UnitOverView />
        </PivotItem>
        <PivotItem headerText="AAE Monitor">
          <AlarmsOverview />
        </PivotItem>
        <PivotItem headerText="Maintenance Log">
          <MaintenancePlanning />
        </PivotItem>
        <PivotItem headerText="Systems">
          <Label styles={labelStyles}></Label>
        </PivotItem>
        <PivotItem headerText="Parameters">
          <Label styles={labelStyles}></Label>
        </PivotItem>
      </Pivot>
    </>
  );
};
