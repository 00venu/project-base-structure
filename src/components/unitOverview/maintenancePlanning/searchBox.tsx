import * as React from 'react';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import {classNames} from './classes';

const stackTokens: Partial<IStackTokens> = { childrenGap: 20 };
interface IProps {
  placeholder: string;
}
export const SearchBoxFullSizeExample = ({placeholder}:IProps) => {
  const {searchBox} = classNames;
  return (
    <Stack tokens={stackTokens}>
      <SearchBox
        placeholder={placeholder}
        onSearch={newValue => console.log('value is ' + newValue)}
        className={searchBox}
      />
    </Stack>
  );
};
