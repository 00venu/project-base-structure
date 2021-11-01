import React, { useState } from 'react';
import { Dropdown, IDropdownOption, Toggle, TooltipHost } from "@fluentui/react";
import { Icon } from "@fluentui/react/lib/Icon";
import RoundButton from "../../button/RoundButton";
import AlarmNotifications from "./alarmNotification";
import { classNames } from "./classess";
import styled from "styled-components";
import { Typography } from "../../../typography";
import filterIcon from '../../../assets/img/unitOverView/filter_icon.svg';
import exportIcon from '../../../assets/img/unitOverView/export_icon.svg';
import FilterDropDown from "./dropDownMenu";
import { StyledDropdown, StyledEventsContainer, StyledFilterIcon, StyledTypography } from './StyledComponents';


export const AlarmsOverview = () => {
  const [isFilterOpen, setFilterDropDown] = useState<boolean>(false);
  const { buttonParent, dropDownStyles, dropDownIcon, toggleButton } = classNames;

  const iconStyles = { marginRight: '8px' };

  const dropdownControlledExampleOptions = [
    { key: "apple", text: "Apple" },
    { key: "banana", text: "Banana" },
    { key: "orange", text: "Orange", disabled: true },
    { key: "grape", text: "Grape" },
  ];
  const onRenderCaretDown = (): JSX.Element => {
    return <Icon iconName="ChevronDown" className={dropDownIcon} />;
  };
  const onRenderOption = (option: IDropdownOption): JSX.Element => {
    return (
      <div>
        {option.data && option.data.icon && (
          <Icon style={iconStyles} iconName={option.data.icon} aria-hidden="true" title={option.data.icon} />
        )}
        <span>{option.text}</span>
      </div>
    );
  };

  return (
    <div>
      <StyledEventsContainer>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "60px",
            width: "55%",
          }}
        >
          <StyledDropdown
            placeholder="All Cars"
            options={dropdownControlledExampleOptions}
            onRenderCaretDown={onRenderCaretDown}
           // onRenderOption={onRenderOption}
          />
     
          <StyledTypography variant="head3" color="DavysGrey">
            |
          </StyledTypography>
          <Toggle onText="Alarms (30)" offText="Alarms (30)" className={toggleButton} />
          <Toggle onText="Alerts (30)" offText="Alerts (30)" className={toggleButton} />
          <Toggle onText="Events (30)" offText="Events (30)" className={toggleButton} />
        </div>
        <div style={{ display: "flex", position: 'relative' }}>
          <StyledFilterIcon src={filterIcon} alt="filterIcon" onClick={() => setFilterDropDown(!isFilterOpen)} />
          {isFilterOpen && <FilterDropDown setFilterDropDown={setFilterDropDown} />}
          <StyledTypography variant="head3" color="DavysGrey">
            |
          </StyledTypography>
          <img src={exportIcon} alt="exportIcon" />
        </div>
      </StyledEventsContainer>
      <AlarmNotifications />
    </div>
  );
};
