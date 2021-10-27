import { SearchBox, ISearchBoxStyles, IIconProps } from '@fluentui/react';
const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { height: 40 } };
const addIcon: IIconProps = { iconName: 'Zoom' };

// SearchBar function starts
const SearchBar = (props: any) => (
  <SearchBox   
  styles= {searchBoxStyles}
    placeholder={props.placeholder}   
    iconProps={addIcon}
   />
);
// SearchBar function ends

export default SearchBar;