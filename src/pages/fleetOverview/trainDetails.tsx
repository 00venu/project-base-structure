import * as React from 'react';
import { DetailsList, DetailsListLayoutMode, IColumn } from '@fluentui/react';
import { Dot } from '../../components/statusDot';
import { ReactComponent as CloudTick } from '../../assets/img/Fleetoverview/CloudTick.svg';
import { ReactComponent as NotUpdated } from '../../assets/img/Fleetoverview/notUpdated.svg';
import trainDataList from './Test.json'
// import { ReactComponent as TrainSvg } from '../../assets/img/Fleetoverview/summaryDetailsTrain.svg';
import { useSelector } from 'react-redux';
import { RootState } from './Types';
import { TrainSvg } from "../../components/train"
import { useEffect, useState } from 'react';



interface IDocument {
  train_number: string;
  unit_number: string;
  alarm_source: string;
  status: string;
  scheduled_maintenance: string;
  standing_alarms: string;
  next_station: number;
  service_notifications: string;
  last_updated: number;
}

const TrainDetails = (props: any) => {
  const [filter, setFilter] = useState('totalTrains');
  const [trainDataList, setTrainDataList] = useState([]);
  const [order, setOrder] = useState(false);

  useEffect(() => {
    setTrainDataList(props.details);
  }, [props.details]);

  useEffect(() => {
    var arr: any = [];
   
    if (props.filter == 'totalTrains') { setTrainDataList(props.details); }

    else if (props.filter == 'inService') {
      props.details.map((item: any) => {
        if (item.status == "IN SERVICE") {
          arr.push(item);
        }
      })
      setTrainDataList(arr);
    }
    else if (props.filter == 'notInService') {
      props.details.map((item: any) => {
        if (item.status != "IN SERVICE") {
          arr.push(item);
        }
      })
      setTrainDataList(arr);
    }
    else if (props.filter == 'goodHealth') {
      props.details.map((item: any) => {
        if (item.standing_alarms == "" || item.standing_alarms == "0") {
          arr.push(item);
        }
      })
      setTrainDataList(arr);
    }
    else if (props.filter == 'highPriorityAlarm') {
      props.details.map((item: any) => {
        if (item.priority == "High") {
          arr.push(item);
        }
      })
      setTrainDataList(arr);
    }
    else if (props.filter == 'lowPriorityAlarm') {
      props.details.map((item: any) => {
        arr.push(item);
        // if (item.priority == "Low") {
        //   arr.push(item);
        // }
      })
      setTrainDataList(arr);
    }
  }, [props.filter]);

  useEffect(() => {
    var arr:any = [];
    if (props.searchValue) {     
      props.details.map((item: any) => {
        if (item.train_number == props.searchValue || item.unit_number == props.searchValue) {
          arr.push(item);
        }        
      })
      setTrainDataList(arr);
    }
    else{
      setTrainDataList(props.details);
    }
  }, [props.searchValue])

  const sourceDiv = (item: any) => {
    var alarmSource = item.alarm_source;
    if (alarmSource != '') {
      if (alarmSource.includes(',')) {
        var arr = alarmSource.split(',')
        return <div style={{ display: "flex" }}>
          <div className="tdSourceDiv" style={{ paddingRight: "5px", borderRight: "1px solid #5D5D5D" }}>{arr[0]}</div>
          <div className="tdSourceDiv" style={{ paddingRight: "5px", paddingLeft: "5px", borderRight: "1px solid #5D5D5D" }}>{arr[1]}</div>
          <div className="tdSourceDiv" style={{ paddingLeft: "5px" }}>{arr[2]}</div>
        </div>
      }
      else {
        return <div className="tdSourceDiv" >{alarmSource}</div>
      }
    }
  };
  const onColumnClick = (value: any) => {
    setOrder((state) => !state);
    var stringArray: any = [...trainDataList];
  
    const test: any = stringArray.sort((a: any, b: any) => {
      if(typeof(value) == 'string' && value != 'standing_alarms'){

        const x = a[value].toLowerCase();
        const y = b[value].toLowerCase();
        return order ? x.localeCompare(y) : y.localeCompare(x);
      }
      else{
        const x = a[value];
        const y = b[value];
        return order ? x.localeCompare(y) : y.localeCompare(x);
      }
      
      
    });
    setTrainDataList(test);
  };
  const showtooltip = (train: any) => {

    if (train.item.train_number != "") {
      props.parentCallback(train.item.train_number);
    } else {
      props.parentCallback(train.item.unit_number);
    }

  };
  const train = (item: any) => {
    var status = item.status;
    var color = '';
    if (status == 'IN SERVICE') {
      color = "#0277BD";
    } else {
      color = "9C27B0";
    }
    return <div>
      <TrainSvg color={color} /></div>
  }

  const statusValue = (item: any) => {
    var status = item.status;
    if (status != '') {
      var arr = status.split('-')
      var status = arr[0];
      var color = '';
      if (status.trim() == "In Service") {
        color = '#0277BD';
      }
      else {
        color = "#9C27B0";
      }
      return <div style={{ textTransform: "uppercase", color: `${color}`, display: "flex", alignItems: "center" }}
        className="summaryTableStatus"><Dot color={color} />&nbsp; {arr[0]}</div>
    }

  }

  const lastUpdated = (item: any) => {

    var lastUpdatedTime = item.last_updated;

    if (!lastUpdatedTime.includes('*')) {
      return <div style={{ display: 'flex' }}><CloudTick className="cloundIcon" /> <div style={{ paddingTop: "4px", paddingLeft: "5px" }} className="lastUpdatedText">  {item.last_updated}</div></div>
    } else {
      return <div style={{ display: 'flex' }}><NotUpdated className="cloundIcon" /> <div style={{ paddingTop: "4px", paddingLeft: "5px" }} className="lastUpdatedText">  {item.last_updated}</div></div>
    }

  }
  const onRenderDetailsHeader = (props: any, defaultRender: any) => {

    return (
      <div onMouseOver={() =>
        console.log('clicking: ')

      }></div>
    )

  }

  // Table columns
  const columns: IColumn[] = [{
    key: 'column1', name: '', fieldName: 'trainImage', minWidth: 40, maxWidth: 40, isResizable: true,
    onRender: train
  },
  {
    key: 'column2', name: 'Train Number', fieldName: 'train_number',
    isSorted: true, sortAscendingAriaLabel: 'Sorted A to Z',onColumnClick: () => onColumnClick("train_number"),
    sortDescendingAriaLabel: 'Sorted Z to A', minWidth: 50, maxWidth: 140, isResizable: true
  },
  {
    key: 'column3', name: 'Unit Number', fieldName: 'unit_number',
    isSorted: true, onColumnClick: () => onColumnClick("unit_number"),
    isSortedDescending: false, minWidth: 50, maxWidth: 150, isResizable: true
  },
  {
    key: 'column4', name: 'Alarm Source', fieldName: 'alarm_source', minWidth: 90, maxWidth: 200, isResizable: true,
    isSorted: true, onRender: sourceDiv, onColumnClick: () => onColumnClick("alarm_source"),
  },
  {
    key: 'column5', name: 'Mode', fieldName: 'status', minWidth: 60, maxWidth: 160, isResizable: true,
    isSorted: true,onColumnClick: () => onColumnClick("status")
  },
  {
    key: 'column6', name: 'Routine Service', fieldName: 'scheduled_maintenance', minWidth: 60, maxWidth: 190, isResizable: true,
    isSorted: true, onColumnClick: () => onColumnClick("scheduled_maintenance")
  },
  // { key: 'column7', name: 'Availability', fieldName: 'availability', minWidth: 50, maxWidth: 116, isResizable: true },
  {
    key: 'column7', name: 'Standing Alarms', fieldName: 'standing_alarms',
    isSorted: true, 
  minWidth: 50, maxWidth: 170, isResizable: true
  },
  {
    key: 'column8', name: 'Next Station', fieldName: 'next_station',
    isSorted: true, onColumnClick: () => onColumnClick("next_station"),
     minWidth: 50, maxWidth: 150, isResizable: true
  },
  {
    key: 'column9', name: 'Constraints', fieldName: 'service_notifications', isSorted: true,  minWidth: 60, maxWidth: 160, isResizable: true,
  },
  {
    key: 'column10',
    name: 'Last Updated', fieldName: 'last_updated', isSorted: true, minWidth: 60, maxWidth: 220, isResizable: true,
    className: "", isCollapsible: true, onRender: lastUpdated, onColumnClick: () => onColumnClick("last_updated"),
  }
  ]

  const columns1: IColumn[] = [
    {
      key: 'column1', name: '', fieldName: 'trainImage', minWidth: 40, maxWidth: 40, isResizable: true,
      onRender: train
    },
    {
      key: 'column2', name: 'Train Number', fieldName: 'train_number',
      isSorted: true, onColumnClick: () => onColumnClick("train_number"), minWidth: 50, maxWidth: 140, isResizable: true
    },
    {
      key: 'column3', name: 'Unit Number', fieldName: 'unit_number',
      isSorted: true,onColumnClick: () => onColumnClick("unit_number"), minWidth: 50, maxWidth: 160, isResizable: true
    },
    {
      key: 'column4', name: 'Alarm Source', fieldName: 'alarm_source', isSorted: true, 
      onColumnClick: () => onColumnClick("alarm_source"), minWidth: 50, maxWidth: 180, isResizable: true,
      onRender: sourceDiv
    },
    {
      key: 'column5', name: 'Mode', fieldName: 'status',
      isSorted: true,   onColumnClick: () => onColumnClick("status"), minWidth: 50, maxWidth: 180, isResizable: true,

    },
    {
      key: 'column6', name: 'Routine Service', fieldName: 'scheduled_maintenance',
      isSorted: true,onColumnClick: () => onColumnClick("scheduled_maintenance"), minWidth: 50, maxWidth: 190, isResizable: true
    },
    {
      key: 'column7', name: 'Constraints', fieldName: 'service_notifications',
      isSorted: true, minWidth: 50, maxWidth: 130, isResizable: true
    },
    {
      key: 'column8', name: 'Next Station', fieldName: 'next_station',
      isSorted: true, onColumnClick: () => onColumnClick("next_station"), minWidth: 50, maxWidth: 180, isResizable: true,
      // onRender: (item: any) => (<div className="nextStationValue">{item.nextStation}</div>)
    },

  ]

  const columns2: IColumn[] = [
    {
      key: 'column1', name: '', fieldName: 'trainImage', minWidth: 30, maxWidth: 30, isResizable: true,
      onRender: train
    },
    {
      key: 'column2', name: 'Train Number', fieldName: 'train_number',onColumnClick: () => onColumnClick("train_number"),
      isSorted: true,  minWidth: 40, maxWidth: 110, isResizable: true,
    },
    {
      key: 'column3', name: 'Unit Number', fieldName: 'unit_number',
      isSorted: true, onColumnClick: () => onColumnClick("unit_number"), minWidth: 50, maxWidth: 120, isResizable: true
    },
    {
      key: 'column4', name: 'Alarm Source', fieldName: 'alarm_source',
      isSorted: true,  minWidth: 50, maxWidth: 160, isResizable: true,
      onRender: sourceDiv, onColumnClick: () => onColumnClick("alarm_source"),
    },
    {
      key: 'column5', name: 'Mode', fieldName: 'status',onColumnClick: () => onColumnClick("status"),
      isSorted: true,  minWidth: 50, maxWidth: 130, isResizable: true,

    },
    {
      key: 'column6', name: 'Routine Service', fieldName: 'scheduled_maintenance',
       isSorted: true,  minWidth: 60, maxWidth: 140, isResizable: true,onColumnClick: () => onColumnClick("scheduled_maintenance"),
    },
    {
      key: 'column7', name: 'Standing Alarms', fieldName: 'standing_alarms', isSorted: true,  minWidth: 90, maxWidth: 180, isResizable: true
    },
   

  ]

  const columns3: IColumn[] = [
    {
      key: 'column1', name: '', fieldName: 'trainImage', minWidth: 40, maxWidth: 40, isResizable: true,
      onRender: train
    },
    {
      key: 'column2', name: 'Train Number', fieldName: 'train_number',onColumnClick: () => onColumnClick("train_number"), isSorted: true,  minWidth: 60, maxWidth: 120, isResizable: true
    },
    {
      key: 'column3', name: 'Unit Number', fieldName: 'unit_number',onColumnClick: () => onColumnClick("unit_number"), isSorted: true, minWidth: 70, maxWidth: 140, isResizable: true
    },
    {
      key: 'column4', name: 'Alarm Source', onColumnClick: () => onColumnClick("alarm_source"),fieldName: 'alarm_source', isSorted: true,  minWidth: 70, maxWidth: 150, isResizable: true,
      onRender: sourceDiv
    },
    {
      key: 'column5', name: 'Mode', fieldName: 'status',onColumnClick: () => onColumnClick("status"), isSorted: true, minWidth: 72, maxWidth: 142, isResizable: true,

    },
    {
      key: 'column6', name: 'Routine Service', fieldName: 'scheduled_maintenance', 
      onColumnClick: () => onColumnClick("scheduled_maintenance"),isSorted: true,  minWidth: 100, maxWidth: 200, isResizable: true
    },
    {
      key: 'column7', name: 'Standing Alarms', fieldName: 'standing_alarms', isSorted: true,  minWidth: 90, maxWidth: 180, isResizable: true
    },
    {
      key: 'column8', name: 'Next Station', fieldName: 'next_station',
      onColumnClick: () => onColumnClick("next_station"), isSorted: true,minWidth: 100, maxWidth: 200, isResizable: true
    },

  ]


  return (
    // fleetOverviewDetails  section starts
    <section data-is-scrollable={true} className="fleetOverviewDetails ms-Grid-row alramlist">
      {(!props.left && !props.right) &&
        <div className={"ms-Grid-col ms-lg12 dl1"} >
          <DetailsList
            items={trainDataList}
            columns={columns2}

            selectionMode={0}
            onRenderRow={(props, defaultRender: any) => (<div onMouseOver={() => showtooltip(props)}>{defaultRender(props)}</div>)}
            layoutMode={DetailsListLayoutMode.justified}
          />

        </div>
      }
      {(props.left && !props.right) &&
        <div className={"ms-Grid-col ms-lg12 dl2"} >
          <DetailsList
            items={trainDataList}

            columns={columns1}
            selectionMode={0}
            onRenderRow={(props, defaultRender: any) => (<div onMouseOver={() => showtooltip(props)}>{defaultRender(props)}</div>)}
            layoutMode={DetailsListLayoutMode.justified}
          />

        </div>
      }
      {(!props.left && props.right) &&
        <div className={"ms-Grid-col ms-lg12 dl3"} >
          <DetailsList
            items={trainDataList}
            columns={columns1}

            selectionMode={0}
            onRenderRow={(props, defaultRender: any) => (<div onMouseOver={() => showtooltip(props)}>{defaultRender(props)}</div>)}
            layoutMode={DetailsListLayoutMode.justified}
          />

        </div>
      }
      {(props.left && props.right) &&
        <div className={"ms-Grid-col ms-lg12 dl4"} >
          <DetailsList
            items={trainDataList}
            columns={columns}
            selectionMode={0}
            onRenderRow={(props, defaultRender: any) => (<div onMouseOver={() => showtooltip(props)}>{defaultRender(props)}</div>)}
            layoutMode={DetailsListLayoutMode.justified}
          />
        </div>

      }




    </section>
    // fleetOverviewDetails  section ends
  );

  // const _onColumnClick = (ev: React.MouseEvent<HTMLElement>, column: IColumn): void => {
  //   const { columns, items } = this.state;
  //   const newColumns: IColumn[] = columns.slice();
  //   const currColumn: IColumn = newColumns.filter(currCol => column.key === currCol.key)[0];
  //   newColumns.forEach((newCol: IColumn) => {
  //     if (newCol === currColumn) {
  //       currColumn.isSortedDescending = !currColumn.isSortedDescending;
  //       currColumn.isSorted = true;
  //       this.setState({
  //         announcedMessage: `${currColumn.name} is sorted ${
  //           currColumn.isSortedDescending ? 'descending' : 'ascending'
  //         }`,
  //       });
  //     } else {
  //       newCol.isSorted = false;
  //       newCol.isSortedDescending = true;
  //     }
  //   });
  //   const newItems = _copyAndSort(items, currColumn.fieldName!, currColumn.isSortedDescending);
  //   this.setState({
  //     columns: newColumns,
  //     items: newItems,
  //   });
  // };
};
export default TrainDetails;