import styled from "styled-components";
import { UnitOverview } from "../../components/unitOverview";
import { classNames } from "../landingPage/classess";
import "../../dark-unica.css";
const StyledDiv = styled.div`
margin: 30px;
height: 80vh;
overflow-y: scroll;  
padding: 30px 20px;
overflow-x: 
hidden; 
-ms-overflow-style: none; 
scrollbar-width: none;
::-webkit-scrollbar {
  display: none;
}
`;
const UnitOverviewPage = () => {
  const { pageHeader } = classNames;
  return (
    <StyledDiv>
    <UnitOverview/>
    </StyledDiv>
  );
};

export default UnitOverviewPage;
