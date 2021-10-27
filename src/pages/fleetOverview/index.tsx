import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './fleetOverview.css';
import TrainDetails from '../fleetOverview/trainDetails'
import SearchBar from '../../components/searchBar/SearchBar';
import Filters from './Filters';
import MapComponent from '../../components/map/Map';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead';
import { RootState } from './Types';
import { fetchUnitsRequest } from '../../store/actions/fleetOverviewActions';
import Autocomplete from 'react-autocomplete'
import { IIconProps, ISearchBoxStyles, SearchBox } from '@fluentui/react';
// import { ReactSearchAutocomplete } from 'react-search-autocomplete'

// const ReactSearchAutocomplete = require('react-search-autocomplete');


// OperationsTable function starts
const FleetOverview = (props: any) => {
  const [showTable, SetTableState] = useState(true);
  const [trainNo, setTrainNo] = useState('');
  const [filter, setFilter] = useState('totalTrains');
  const [renderList, setRenderList] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [hideOptions, setHideOptions] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [searchVals, setsearchVals]:any = useState([]);
  const [searchResultVals, setSearchReultVals] = useState([]);
  const [hover, setHover] = useState(0);
  const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { height: 40 } };
  const addIcon: IIconProps = { iconName: 'Zoom' };

  const changeState = () => {

    SetTableState(!showTable);
    // setFilter(childData);
  }

  const handleCallback = (childData: any) => {
    setHover(hover + 1);
    setTrainNo(childData);
  }

  const handleFilterCallback = (childData: any) => {
    //  alert(childData);
    setFilter(childData);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUnitsRequest());
  }, [dispatch]);
  const list = useSelector((state: RootState) => state.list);
  // console.log(list);
  useEffect(() => {
    var arr: any = [];

    var trainArr: any = [];
    if (list.fleetOverview && list.fleetOverview.data && list.fleetOverview.data.data) {

      setRenderList(list.fleetOverview.data.data);

      list.fleetOverview.data.data.map((item: any) => {


        if (trainArr.indexOf(item.train_number) == -1) {
          // alert("inside if");
          trainArr.push(item.train_number);

          arr.push(item.train_number);

        }

        // console.log(obj);
        arr.push(item.unit_number);
        console.log(arr);
      })
      // console.log(arr)
      setsearchVals(arr);
      setSearchReultVals(arr);
    }
  }, [list]);


  


  const serchData = (val: any) => {
    setHideOptions(true);
    var data = searchVals.filter(function (item: any) {
      console.log(item.indexOf(val) + ' ' + item);
      return item.indexOf(val.toUpperCase()) >= 0;
    })
    // console.log(fooItems);
    setSearchReultVals(data);
    setSearchId(val);
    if (searchVals.indexOf(val) != -1) {
      setSearchValue(val);
    }else{
    setSearchValue('');
  }
  }

  const onSelectHandle = (val: any) => {
    setSearchId(val);
    setHideOptions(false);   
    setSearchValue(val);
  }

  return (
    // fleetOverview section starts
    <section className="fleetOverview">
      <div className="ms-Grid">
        <div className="ms-Grid-row" style={{ margin: "0px", height: "40px" }}>
          <div className="ms-Grid-col ms-lg10">
            <h2 className="ugl-font20 ugl-fontweight700 ugl-lineheight24 pageTitle">Fleet Overview</h2>
          </div>
          <div className="ms-Grid-col ms-lg2">
            <SearchBox
              styles={searchBoxStyles}
              placeholder="Search by Train or Unit"
              iconProps={addIcon}
              onChange={(e: any) => serchData(e.target.value)}
              value={searchId}
            />
            {(searchId && hideOptions && searchResultVals.length) ? (
              <ul className="searchOptions">
                {searchResultVals.map((item) => {
                  return (
                    <li onClick={() => onSelectHandle(item)}>
                      <span >{item}</span>
                    </li>)
                })}

              </ul>
            ) : null}



          </div>
        </div>
        <div className="ms-Grid-row">
          <Filters left={props.left} right={props.right} parentCallback={handleFilterCallback} />
        </div>
        <div className="ms-Grid-row">
          <MapComponent trainNumber={trainNo} changeState={changeState} filter={filter} details={renderList} hover={hover} searchValue={searchValue} />


        </div>
      </div>
      <div className={"ms-Grid train_details " + (!showTable ? 'hidden' : '')}>

        <TrainDetails left={props.left} right={props.right} parentCallback={handleCallback} details={renderList} filter={filter} searchValue={searchValue} />

      </div>
    </section>
    // fleetOverview section ends
  );
};
// OperationsTable function ends
export default FleetOverview;