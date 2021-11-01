import * as React from 'react';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import {classNames} from './classess';

const stackTokens: Partial<IStackTokens> = { childrenGap: 20 };

interface ISearchBoxProps {
  placeholder: string;
}
export const SearchBoxFullSizeExample = ({placeholder}:ISearchBoxProps) => {
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
