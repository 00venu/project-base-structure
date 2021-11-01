import { useState } from "react";
import { Typography } from "../../../typography";
import cross_icon from "../../../assets/img/unitOverView/cross_icon.svg";
import styled, { css } from "styled-components";
import { SearchBoxFullSizeExample } from "./searchBox";
import {
  ChoiceGroup,
  IChoiceGroupOption,
} from "@fluentui/react/lib/ChoiceGroup";
import { classNames } from "./classess";
import RoundButton from "../../button/RoundButton";
import { DefaultButton } from "@fluentui/react";
import {
  StyledDropDownList,
  StyledDropDownMenu,
  StyledLine,
  StyledSystemDropDown,
} from "./StyledComponents";
import dropDownUpIcon from "../../../assets/img/unitOverView/drop_down_up_icon.svg";

interface IFilterDropDownProps {
  setFilterDropDown: (isFilterOpen: boolean) => void;
}

const StyledImg = styled.img<{ system: boolean }>`
  cursor: pointer;
  margin-top: 20px;
  transform: rotate(180deg);
  transition: 0.2s ease-in-out;
  ${(props) =>
    props.system &&
    css`
      transform: rotate(0deg);
    `}
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  cursor:pointer;
`;

export default function FilterDropDown({
  setFilterDropDown,
}: IFilterDropDownProps) {
  const { choiceGroupStyles, defaultButton } = classNames;
  const [system, setSystem] = useState<boolean>(true);
  const [componentOptions, setComponentOPtions] = useState<boolean>(false);
  const [alaramOptions, setAlaramOptions] = useState<boolean>(false);
  const [dateRangeOptions, setDateRangeOptions] = useState<boolean>(false);



  const options: IChoiceGroupOption[] = [
    { key: "A", text: "Option A" },
    { key: "B", text: "Option B" },
    { key: "C", text: "Option C" },
    { key: "D", text: "Option D" },
    { key: "E", text: "Option E" },
    { key: "F", text: "Option F" },
    { key: "G", text: "Option G" },
    { key: "H", text: "Option H" },
    { key: "I", text: "Option I" },
    { key: "J", text: "Option J" },
    { key: "K", text: "Option K" },
    { key: "L", text: "Option L" },
    { key: "M", text: "Option M" },
    { key: "N", text: "Option N" },
    { key: "O", text: "Option O" },
  ];
  return (
    <StyledDropDownMenu>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="head3" weight={600}>
          Filter
        </Typography>
        <img
          src={cross_icon}
          alt="crossIcon"
          onClick={() => setFilterDropDown(false)}
        />
      </div>
      <StyledLine />
      <div>
        <StyledDiv onClick={() => setSystem(!system)}>
          <Typography variant="p1" weight={600}>
            System
          </Typography>
          <StyledImg src={dropDownUpIcon} system={system} />
        </StyledDiv>
        <StyledLine />
        {system && (
          <StyledSystemDropDown>
            <div>
              <SearchBoxFullSizeExample placeholder="Enter the Search Text" />
            </div>
            <StyledDropDownList>
              <ChoiceGroup options={options} className={choiceGroupStyles} />
            </StyledDropDownList>
          </StyledSystemDropDown>
        )}
      </div>
      <div>
        <StyledDiv onClick={() => setComponentOPtions(!componentOptions)}>
          <Typography variant="p1" weight={600}>
            Component
          </Typography>
          <StyledImg src={dropDownUpIcon} system={componentOptions} />
        </StyledDiv>
        <StyledLine />
        {componentOptions && (
          <StyledSystemDropDown>
            <div>
              <SearchBoxFullSizeExample placeholder="Enter the Search Text" />
            </div>
            <StyledDropDownList>
              <ChoiceGroup options={options} className={choiceGroupStyles} />
            </StyledDropDownList>
          </StyledSystemDropDown>
        )}
      </div>
      <div>
        <StyledDiv onClick={() => setAlaramOptions(!alaramOptions)}>
          <Typography variant="p1" weight={600}>
            AAE Code
          </Typography>
          <StyledImg src={dropDownUpIcon} system={alaramOptions} />
        </StyledDiv>
        <StyledLine />
        {alaramOptions && (
          <StyledSystemDropDown>
            <div>
              <SearchBoxFullSizeExample placeholder="Enter the Search Text" />
            </div>
            <StyledDropDownList>
              <ChoiceGroup options={options} className={choiceGroupStyles} />
            </StyledDropDownList>
          </StyledSystemDropDown>
        )}
      </div>
      <div>
        <StyledDiv onClick={() => setDateRangeOptions(!dateRangeOptions)}>
          <Typography variant="p1" weight={600}>
            Date Range
          </Typography>
          <StyledImg src={dropDownUpIcon} system={dateRangeOptions} />
        </StyledDiv>
        <StyledLine />
        {dateRangeOptions && (
          <StyledSystemDropDown>
            <div>
              <SearchBoxFullSizeExample placeholder="Enter the Search Text" />
            </div>
            <StyledDropDownList>
              <ChoiceGroup options={options} className={choiceGroupStyles} />
            </StyledDropDownList>
          </StyledSystemDropDown>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RoundButton text="Clear All" />
        <DefaultButton text="Apply" className={defaultButton} />
      </div>
    </StyledDropDownMenu>
  );
}
