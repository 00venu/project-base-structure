import styled from "styled-components";
import { Typography } from "../../../typography";
import RoundButton from "../../button/RoundButton";
import TrainAlert from "./trainAlerts";
import { classNames } from '../classess';
import { StyledDivContainer, StyledSpan, StyledStatusTitle, StyledTable, StyledTrainAlert } from "./StyledComponents";
import { useSelector } from "react-redux";


const StyledTrainDetails = styled.div`
display: flex;
min-width: 320px;
justify-content: space-between;
align-items: center;
`;

export default function LiveStatus() {
  const state = useSelector((state:any) => state.unitOverView.live_tracking);
  const { trainAlertParent } = classNames;
  const alertInfo = {
    noOfCabins: 1,
    issueInCabin: 1,
  };
  return (
    <>
      <StyledDivContainer>
        <StyledStatusTitle>
          <Typography variant="p1" weight={700}>Live Status</Typography>
          <RoundButton text="View Driver HMI" />
        </StyledStatusTitle>
        <StyledTrainAlert
          className={trainAlertParent}
        >
          <TrainAlert alertInfo={alertInfo} />

          <div style={{display:"flex",marginTop:"50px"}}>
            <span style={{background: '#2616E3',borderRadius: '6px',padding:"4px",marginRight:"20px"}}>LOWER</span>
            <StyledTrainDetails>
            <span>300</span>
            <span>300</span>
            <span>300</span>
            <span>300</span>
            <span>300</span>
            <span>300</span>
            </StyledTrainDetails>
            <span style={{background: '#2616E3',borderRadius: '6px',padding:"4px",marginLeft:"20px"}}>RAISE</span>

          </div>
        </StyledTrainAlert>
        <StyledTable>
          <tr>
            <td>
              <StyledSpan variant="p2">Train Number</StyledSpan>
              <StyledSpan variant="p1" weight={600}>{state && state.train_number}</StyledSpan>
            </td>
            <td>
              <StyledSpan variant="p2">Mode</StyledSpan>
              <StyledSpan variant="p1" weight={600}>Operational</StyledSpan>
            </td>
            <td>
              <StyledSpan variant="p2">Speed</StyledSpan>
              <StyledSpan variant="p1" weight={600}>{state.speed}</StyledSpan>
            </td>
            <td>
              <StyledSpan variant="p2">Fuel Level</StyledSpan>
              <StyledSpan variant="p1"weight={600}>100L</StyledSpan>
            </td>
          </tr>
          <tr>
            <td>
              <StyledSpan variant="p2">Status</StyledSpan>
              <StyledSpan variant="p1" weight={600}>In Service</StyledSpan>
            </td>
            <td>
              <StyledSpan variant="p2">Driving Mode</StyledSpan>
              <StyledSpan variant="p1" weight={600}>{state.driving_mode}</StyledSpan>
            </td>
            <td>
              <StyledSpan variant="p2">Outside Temp.</StyledSpan>
              <StyledSpan variant="p1">{state.outside_temp}</StyledSpan>
            </td>
            <td>
              <StyledSpan variant="p2">AdBlue Level</StyledSpan>
              <StyledSpan variant="p1">20L</StyledSpan>
            </td>
          </tr>
        </StyledTable>
      </StyledDivContainer>
    </>
  );
}
