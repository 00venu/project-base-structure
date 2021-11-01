import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import EventsCard from "./eventCard";
import LiveStatus from "./liveStatus";
import LiveTracking from "./liveTracking";
import MaintenanceCard from "./maintenanceCard";
import { StyledTainDetails } from "./StyledComponents";
import TrainDetails from "./tableData";
import nextStationIcon from "../../../assets/img/unitOverView/next_station_icon.svg";
import constraints from "../../../assets/img/unitOverView/constraints.svg";
import calenderIcon from "../../../assets/img/unitOverView/calender_icon.svg";
import alaramIcon from "../../../assets/img/unitOverView/alaram_icon.svg";
import alertsIcon from "../../../assets/img/unitOverView/alerts_icon.svg";
import eventsIcon from "../../../assets/img/unitOverView/events_icon.svg";
import exportIcon from "../../../assets/img/unitOverView/export_icon.svg";
import { RootState } from "../../../store/reducers";

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
`;
const StyledExportIcon = styled.img`
  cursor: pointer;
  width: 20px;
  height: 30px;
  position: absolute;
  right: 0px;
  top: -120px;
`;
export default function UnitOverView() {
  const unitOverView = useSelector((state: RootState) => state.unitOverView);
  return (
    <div style={{ position: "relative" }}>
      <StyledExportIcon src={exportIcon} alt="img3" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,24%)",
          gridGap: "15px",
        }}
      >
        <EventsCard
          header="Bankstown | 11:04"
          subHeader="Next Station and Arrival Time"
          imgSrc={nextStationIcon}
        />
        <EventsCard
          listItems={["NEPT", "WEOS"]}
          subHeader="Constraints"
          imgSrc={constraints}
        />
        <EventsCard
          header="08 Dec 2020"
          subHeader="Last Routine Service"
          imgSrc={calenderIcon}
        />
        <EventsCard
          header="08 Jan 2021"
          subHeader="Next Routine Service"
          imgSrc={calenderIcon}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,49%)",
          gridGap: "15px",
        }}
      >
        <LiveStatus />
        <LiveTracking />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,49%)",
          gridGap: "15px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,33%)",
            gridGap: "8px",
          }}
        >
          <MaintenanceCard imgSrc={alaramIcon} header="Alaram" eventData={unitOverView.alarms} />
          <MaintenanceCard imgSrc={alertsIcon} header="Alerts" eventData={unitOverView.alerts} />
          <MaintenanceCard imgSrc={eventsIcon} header="Events" eventData={unitOverView.events} />
        </div>
        <StyledTainDetails>
          <TrainDetails />
        </StyledTainDetails>
      </div>
    </div>
  );
}
