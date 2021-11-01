import {
  StyledEventCardContainer,
  StyledEventCardDiv,
  StyledEventsIcon,
  StyledStatus,
  StyledTypography,
  StyledUnacknowledged,
  StyledVerticalLine,
} from "./StyledComponents";
interface IEventData {
  count: number;
  low_priority: number;
  high_priority: number;
  acknowledged: number;
  unacknowledged: number;
}
interface ICardProps {
  imgSrc?: string;
  header?: string;
  eventData?: IEventData;
}

export default function MaintenanceCard({
  imgSrc,
  header,
  eventData,
}: ICardProps) {
  return (
    <StyledEventCardContainer>
      <StyledEventCardDiv>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "35px",
              height: "35px",
              background: "#333D3D",
              borderRadius: "50%",
              padding: "5px",
              marginRight: "5px",
            }}
          >
            <StyledEventsIcon src={imgSrc} alt="" />
          </div>
          <StyledTypography variant="p1">{header}</StyledTypography>
        </div>
        <div>
          <StyledTypography variant="head4">
            {eventData && eventData.count}
          </StyledTypography>
        </div>
      </StyledEventCardDiv>

      <div style={{ margin: "20px 0px" }}>
        <StyledUnacknowledged>
          <StyledTypography variant="p1">Acknowledged</StyledTypography>
          <StyledTypography variant="p1">
            {eventData && eventData.acknowledged}
          </StyledTypography>
        </StyledUnacknowledged>

        <StyledStatus>
          <StyledTypography variant="p1">High</StyledTypography>
          <StyledTypography variant="p1" color="Error">
            {eventData && eventData.high_priority}
          </StyledTypography>
          <StyledVerticalLine variant="p2" tag="span">
            |
          </StyledVerticalLine>
          <StyledTypography variant="p1">Low</StyledTypography>
          <StyledTypography variant="p1" color="Orange">
            {eventData && eventData.low_priority}
          </StyledTypography>
        </StyledStatus>
      </div>

      <div style={{ margin: "10px 0px" }}>
        <StyledUnacknowledged>
          <StyledTypography variant="p1">Unacknowledged</StyledTypography>
          <StyledTypography variant="p1">
            {eventData && eventData.unacknowledged}
          </StyledTypography>
        </StyledUnacknowledged>

        <StyledStatus>
          <StyledTypography variant="p1">High</StyledTypography>
          <StyledTypography variant="p1" color="Error">
            {eventData && eventData.high_priority}
          </StyledTypography>
          <StyledVerticalLine variant="p2" tag="span">
            |
          </StyledVerticalLine>
          <StyledTypography variant="p1">Low</StyledTypography>
          <StyledTypography variant="p1" color="Orange">
            {eventData && eventData.low_priority}
          </StyledTypography>
        </StyledStatus>
      </div>
    </StyledEventCardContainer>
  );
}
