import * as React from 'react';
import { Dropdown, DropdownMenuItemType, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { Icon } from '@fluentui/react/lib/Icon';
import trainIcon from "../../assets/img/unitOverView/train_icon.svg";
import styled from 'styled-components';

const StyledDropdown = styled(Dropdown)`
  width: 320px;
  margin-right: 40px;
  .ms-Dropdown {
    width: 320px;
  }
  .ms-Dropdown-title {
    width: 320px;
    span{
      position: relative;
      top: -5px;
    }
  }
  
`;

const exampleOptions: IDropdownOption[] = [
  { key: 'Header', text: 'Options', itemType: DropdownMenuItemType.Header },
  { key: 'A', text: 'TN 1233 (UT 6527, UT 8719)' },
  { key: 'B', text: 'TN 1233 (UT 6527, UT 8719)' },
  { key: 'C', text: 'TN 1233 (UT 6527, UT 8719)' },
  { key: 'D', text: 'TN 1233 (UT 6527, UT 8719)d' },
  { key: 'E', text: 'TN 1233 (UT 6527, UT 8719)' },
];

const onRenderOption = (option: any) => {
  return (
    <div>
      <img src={trainIcon} alt="trainIcon" />
      <span>{option.text}</span>
    </div>
  );
};

const onRenderTitle = (options: any) => {
  const option = options[0];

  return (
    <div>
      <img src={trainIcon} alt="trainIcon" />
      <span>{option.text}</span>
    </div>
  );
};

const onRenderCaretDown = (): JSX.Element => {
  return <Icon iconName="ChevronDown" />;
};

const onRenderPlaceholder = (props: any) => {
  return (
    <div className="dropdownExample-placeholder">
       <img src={trainIcon} alt="trainIcon" />
      <span>{props.placeholder}</span>
    </div>
  );
};


export const AlaramDropdown: React.FunctionComponent = () => (
    <StyledDropdown
      placeholder="Select an option"
      ariaLabel="Custom dropdown example"
      onRenderPlaceholder={onRenderPlaceholder}
      onRenderTitle={onRenderTitle}
      onRenderOption={onRenderOption}
      onRenderCaretDown={onRenderCaretDown}
      options={exampleOptions}
    />
);

