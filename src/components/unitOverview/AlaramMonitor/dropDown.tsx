import * as React from 'react';
import { Dropdown, DropdownMenuItemType, IDropdownOption, IDropdownStyles } from '@fluentui/react/lib/Dropdown';
import { getPlaceholderStyles } from '@fluentui/style-utilities';
import { classNames } from './classess';
import { Icon } from '@fluentui/react/lib/Icon';
import dropDownImg from '../../assets/img/components/dropdown_down.svg'
import styled, { css } from 'styled-components';
import { transform } from 'typescript';

interface IDropDownProps {
  label?: string;
  placeholder?: string;
  options?: any;
}

const StyledImg = styled.img<{ defaultOpen: boolean }>`
transform: rotate(180deg);
margin-top: 14px;
transition: 0.2s ease-in-out;
${(props) => props.defaultOpen && css`transform: rotate(0deg);`}
`;

const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: 200, marginRight: '20px' } };

const dropdownControlledExampleOptions = [
  { key: 'apple', text: 'Apple' },
  { key: 'banana', text: 'Banana' },
  { key: 'orange', text: 'Orange', disabled: true },
  { key: 'grape', text: 'Grape' },
];

export function AlarmDropDowns({ label, placeholder, options }: IDropDownProps) {
  const [selectedItem, setSelectedItem] = React.useState<IDropdownOption>();
  const { dropDownContainers, dropDownIcon, dropDownStyles } = classNames;

  const onChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
    setSelectedItem(item);
  };
  // const onRenderCaretDown = (): JSX.Element => {
  //   return <StyledImg defaultOpen={defaultOpen} src={dropDownImg} className={imageStyles} alt="img"/>;
  // };
  const onRenderCaretDown = (): JSX.Element => {
    return <Icon iconName="ChevronDown" className={dropDownIcon} />;
  };

  return (
    <div className={dropDownContainers}>
      <Dropdown
        label={label}
        selectedKey={selectedItem ? selectedItem.key : undefined}
        placeholder={placeholder ? placeholder : "Select an option"}
        options={options ? options : dropdownControlledExampleOptions}
        onRenderCaretDown={onRenderCaretDown}
        styles={dropdownStyles}
        className={dropDownStyles}
      />
    </div>
  );
};
