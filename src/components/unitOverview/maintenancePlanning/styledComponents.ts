import styled from "styled-components";
import { Typography } from "../../../typography";
import { Link } from "react-router-dom";

export const StyledDiv = styled.div`
display: grid;
grid-template-columns: repeat(2, 49.25%);
grid-gap: 20px;
`;

export const StyledTable = styled.table`
border-width:1px;
border: 1px solid #5D5D5D;
border-collapse:collapse;
background: #26262D;
margin-top: 30px;
border-radius: 4px;
width: 100%;
td,tr{
border: 1px solid #5D5D5D;
}
td{
width: 200px;
height: 40px;
padding: 10px;
}
.tableHeading{
background: #26262D;
}
}
`;

export const StyledTableHeader = styled.th`
height:30px;
text-align:left;
padding-left:10px;
background:#2e2e33;
`;

export const StyledSpan = styled(Typography)`
margin: 0px;
`;
export const StyledLongText = styled.div`
width: 100%;
height: 200px;
overflow-y: auto;
margin: 10px;
`;
export const StyledMaintenanceDiv = styled.div`
  margin-top: 50px;
  background: #26262D;
  padding: 20px;
  position: relative;
`;
export const StyledMaintenanceContainer = styled.div`
  position: relative;
  top: 36px;
  display: flex;
  justify-content: flex-end;
  span{
    padding: 0px 2px;
  }
  & .varticalBar{
    color: #5D5D5D;
  }
`;
export const StyledFlexContainer = styled.div`
display: flex;
align-items: center;
button{
  margin: 0px 5px;
}
.ms-Toggle-innerContainer{
  margin-top:10px;
}
`;
export const StyledLink = styled(Link)`
padding: 10px;
color: #008B98;
`;
export const StyledLongDetailts = styled(Link)`
position: absolute;
right: 10px;
color:#008B98;
bottom: 5px;
`;