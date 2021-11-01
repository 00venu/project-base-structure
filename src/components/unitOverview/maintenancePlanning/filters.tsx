import { useState } from "react";
import styled from "styled-components";
import { Typography } from "../../../typography";
import { SearchBoxFullSizeExample } from "./searchBox";
import { Icon } from "@fluentui/react/lib/Icon";
import { Dropdown, IStackTokens, Stack, Toggle } from "@fluentui/react";
import RoundButton from "../../button/RoundButton";
import filterIcon from "../../../assets/img/unitOverView/filter_icon.svg";
import exportIcon from "../../../assets/img/unitOverView/export_icon.svg";
import constraintIcon from '../../../assets/img/unitOverView/constraints_icon.svg'
import FilterDropDown from "./dropDownMenu";
import { StyledFlexContainer } from "./styledComponents";
import MultiSelectChips from "./multiSelectChips";

interface ILink {
  isActive: boolean;
}

const StyledDiv = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #26262d;
  & .varticalBar {
    color: #5d5d5d;
    padding: 0px 5px;
  }
`;
const StyledEventsContainer = styled.div`
  height: 60px;
  background: #26262d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin: 20px 0px;
`;

const StyledLink = styled.span<ILink>`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-decoration-line: underline;
  color: #d8d8d8;
  color: ${(props) => (props.isActive ? "#D8D8D8" : "#008B98")};
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
  cursor: pointer;
`;

const StyledSearchBox = styled.div`
  padding: 0px 10px;
`;
const StyledDropdown = styled(Dropdown)`
  width: 350px;
  .ms-Dropdown {
    width: 350px;
  }
  .ms-Dropdown-title {
    width: 350px;
  }
`;
const StyledTypography = styled(Typography)`
  padding: 0px 10px;
`;
const StyledImg = styled.img`
margin:0px 5px;
`;

export const MaintenancePlanningFilters = () => {
  const [isFilterOpen, setFilterDropDown] = useState<boolean>(false);

  const dropdownControlledExampleOptions = [
    { key: "apple", text: "Apple" },
    { key: "banana", text: "Banana" },
    { key: "orange", text: "Orange", disabled: true },
    { key: "grape", text: "Grape" },
  ];

  const onRenderCaretDown = (): JSX.Element => {
    return <Icon iconName="ChevronDown" />;
  };
  return (
    <StyledEventsContainer>
      <StyledFlexContainer>
        <MultiSelectChips />
        <StyledTypography variant="head3" color="DavysGrey">
          |
        </StyledTypography>
        <RoundButton text="All (30)" />
        <RoundButton text="Unsubmitted (5)" />
        <RoundButton text="Submitted (25)" />
        <StyledTypography variant="head3" color="DavysGrey">
          |
        </StyledTypography>
        <div style={{display:"flex",alignItems:"center"}}>
          <StyledImg src={constraintIcon} />
        <span>Constraints</span>
        <Toggle />
        </div>
      </StyledFlexContainer>
      <StyledFlexContainer>
        <SearchBoxFullSizeExample placeholder="Search by..."/>
        <div style={{ cursor:"pointer",position: "relative" }}>
        <img
          src={filterIcon}
          alt="fliter"
          onClick={() => setFilterDropDown(!isFilterOpen)}
        />
        {isFilterOpen && (
          <FilterDropDown
            setFilterDropDown={setFilterDropDown}
          />
        )}
        </div>
        <StyledTypography variant="head3" color="DavysGrey">
          |
        </StyledTypography>
        <img src={exportIcon} alt="export" />
      </StyledFlexContainer>
    </StyledEventsContainer>
  );
};
