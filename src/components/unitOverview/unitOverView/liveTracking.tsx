import styled from "styled-components";
import MapComponent from "./map";
import { StyledTrackingDiv } from "./StyledComponents";

export default function LiveTracking() {
  return (
    <StyledTrackingDiv>
      <MapComponent trainNumber="" changeState={() => {}} />
    </StyledTrackingDiv>
  );
}
