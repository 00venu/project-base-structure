import { Dropdown } from "@fluentui/react";
import styled from "styled-components";
import { Typography } from "../../../typography";

export const StyledDiv = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const StyledIcon = styled.img`
padding-left: 20px;
cursor: pointer;
`;

export const StyledEventsContainer = styled.div`
  height: 60px;
  background: #26262d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin-top: 20px;
  .ms-Toggle-innerContainer{
    width: 120px;
    align-items: center;
  }
`;
export const StyledDropdown = styled(Dropdown)`
  width: 360px;
  .ms-Dropdown {
    width: 360px;
  }
  .ms-Dropdown-title {
    width: 360px;
  }
  .ms-Dropdown-caretDownWrapper{
    top:16px;
  }
`;
export const StyledTypography = styled(Typography)`
padding: 0px 10px;
`;
export const StyledFilterIcon = styled.img`
cursor: pointer;
`;
export const StyledDetailsList = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;
export const StyledDropDownMenu = styled.div`
  background: #26262d;
  border: 1px solid #424242;
  box-sizing: border-box;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 1;
  width: 400px;
  padding: 20px;
  position: absolute;
  right: 30px;
`;
export const StyledSystemDropDown = styled.div`
  background: #1d1d24;
  width: 320px;
  height: 300px;
  padding: 20px;
`;
export const StyledDropDownList = styled.div`
width: 320px;
height: 220px;
overflow-y: auto;
margin: 20px 0px;
`;
export const StyledLine = styled.div`
width: 100%;
height: 0.5px;
background: #5D5D5D;
margin: 5px 0px 10px 0px;
`;
export const StyledDivContainer = styled.div`
display: flex;
`;
export const StyledDivTab = styled.div<{isActive?: boolean}>`
width: 125px;
height: 40px;
background: ${props => props.isActive ? '#333D3D' : '#26262D' };
border-radius: 4px 0px 0px 4px;
display: flex;
justify-content: center;
align-items: center;
position: relative;
cursor: pointer;

`;
export const StyledImg = styled.img<{isActive?: boolean}>`
  height: 20px;
  width: 20px;
  position: absolute;
  top:30px;
  display:  ${props => props.isActive ? 'block' : 'none' };
`;
