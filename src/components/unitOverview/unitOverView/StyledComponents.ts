import styled from "styled-components";
import { Typography } from "../../../typography";

export const StyledContainer = styled.div`
  background: #26262d;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 16px;
  margin: 20px 0px;
`;

export const StyledDiv = styled.div`
  background: #1d1d24;
  border-radius: 4px;
  padding: 16px;
  display: flex;
  align-items: center;
`;

export const StyledImg = styled.img`
  height: 34px;
  width: 34px;
  margin-right: 20px;
`;

export const StyledTypography = styled(Typography)`
  margin: 0px;
  line-height:10px;
`;
export const StyledTainDetails = styled.div`
padding: 20px;
background: #26262d;
`;

export const StyledDivContainer = styled.div`
  height: 430px;
  background: #26262D;
  padding: 20px;
`;
export const StyledTrainAlert = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 48%; 
`;

export const StyledTable = styled.table`
border-width:1px;
border: 1px solid #5D5D5D;
border-collapse:collapse;
background: #26262D;
border-radius: 4px;
width: 100%;
margin-top: 20px;
height: 30%;
td,tr{
  border: 1px solid #5D5D5D;
}
td{
  width: 100px;
  height: 40px;
  padding: 10px;
}
.tableHeading{
  background: #26262D;
}
}
`;

export const StyledSpan = styled(Typography)`
  margin: 0px;
`;


export const StyledStatusTitle = styled.div`
 display: flex; 
 justify-content: space-between;
`;
export const StyledTrackingDiv = styled.div`
 height: 430px;
 padding: 20px;
 background: #26262D;
 position: relative;
 .esri-view-surface{
height: 400px;
 }
 .viewDiv{
   height: 400px !important;
 }
`;
export const StyledEventCardContainer = styled.div`
  background: #26262d;
  height: 300px;
  padding: 20px;
  margin-right: 10px;
`;

export const StyledEventCardDiv = styled.div`
  height: 57px;
  background: #1d1d24;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
export const StyledUnacknowledged = styled.div`
height: 25px;
display: flex;
align-items:center;
justify-content: space-between;
padding: 10px;
background: #1d1d24;
`;

export const StyledStatus = styled(StyledUnacknowledged)`
  background: #2e2e33;
`;
export const StyledEventsIcon = styled.img`
  height: 34px;
  width: 34px;
  margin-right: 10px;
`;
export const StyledVerticalLine = styled(Typography)`
font-size: 20px;
color: grey;
`;