import * as React from 'react';
import { Dropdown, IDropdownOption, IDropdownStyles } from '@fluentui/react/lib/Dropdown';
import { classNames } from './classes';
import { Icon } from '@fluentui/react/lib/Icon';

const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: 200, marginRight: '20px' } };

const dropdownControlledExampleOptions = [
  { key: 'apple', text: 'Apple' },
  { key: 'banana', text: 'Banana' },
  { key: 'orange', text: 'Orange', disabled: true },
  { key: 'grape', text: 'Grape' },
];

export const FilterDropdown: React.FunctionComponent = () => {
  const [selectedItem, setSelectedItem] = React.useState<IDropdownOption>();
  const {dropDownIcon,dropDownStyles} = classNames;

  const onChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
    setSelectedItem(item);
  };

  const onRenderCaretDown = (): JSX.Element => {
    return <Icon iconName="ChevronDown" className={dropDownIcon} />;
  };

  return (
    <Dropdown
      selectedKey={selectedItem ? selectedItem.key : undefined}
      placeholder="Filter"
      options={dropdownControlledExampleOptions}
      onRenderCaretDown={onRenderCaretDown}
      styles={dropdownStyles}
      className={dropDownStyles}
    />
  );
};
