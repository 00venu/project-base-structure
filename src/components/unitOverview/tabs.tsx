import { classNames } from "./classess";
import rectangle from "../../assets/img/unitOverView/rectangular-Icon.svg";
import styled from "styled-components";
import { useState } from "react";
import { Typography } from "../../typography";


const StyledDivContainer = styled.div`
display: flex;
`;
const StyledDivTab = styled.div<{ isActive?: boolean }>`
width: 125px;
height: 40px;
background: ${props => props.isActive ? '#333D3D' : '#26262D'};
border-radius: 4px 0px 0px 4px;
display: flex;
justify-content: center;
align-items: center;
position: relative;
cursor: pointer;
`;
const StyledTab = styled(StyledDivTab)<{ isActive?: boolean }>`
border-radius: 0px 4px 4px 0px;
`;
const StyledImg = styled.img<{ isActive?: boolean }>`
  height: 20px;
  width: 20px;
  position: absolute;
  top:30px;
  display:  ${props => props.isActive ? 'block' : 'none'};
`;
export const StyledTypography = styled(Typography)`
margin: 5px 20px 5px 5px;
`;

export const UnitOverviewTabs = () => {
  const [isTabSelected, setSelectedTab] = useState(true);
  const [isItemSelected, setItemSelected] = useState(false);
  
  const handleClick = () =>{
    setSelectedTab(true);
    setItemSelected(false);
  }
  const handleTabClick = () =>{
    setItemSelected(true);
    setSelectedTab(false);
  }
  return (
    <StyledDivContainer>
        <StyledTypography variant="head3" color="DavysGrey">
            |
          </StyledTypography>
      <StyledDivTab isActive={isTabSelected} onClick={handleClick}>
        UT-1234
        <StyledImg src={rectangle} alt="rectangleIcon"  isActive={isTabSelected}/>
      </StyledDivTab>
      <StyledTab isActive={isItemSelected} onClick={handleTabClick}>
        UT-4568
        <StyledImg src={rectangle} alt="rectangleIcon" isActive={isItemSelected} />
      </StyledTab>
    </StyledDivContainer>
  );
};
