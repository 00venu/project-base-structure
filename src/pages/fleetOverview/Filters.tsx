// imports
import { ReactComponent as Arrow } from '../../assets/img/Fleetoverview/Arrow.svg';
import { useEffect, useState } from 'react';
import Highcharts from "highcharts/highcharts.js";
import highchartsMore from "highcharts/highcharts-more.js"
import solidGauge from "highcharts/modules/solid-gauge.js";
import HighchartsReact from "highcharts-react-official";
import { TrainSvg } from "../../components/train"
import trainDataList from '../fleetOverview/Test.json';
import { useSelector } from 'react-redux';
import { RootState } from './Types';

highchartsMore(Highcharts);
solidGauge(Highcharts);

// Filters component starts
const Filters = (props:any) => {

 

   const [trainDataList , setTrainDataList] = useState([]);
  const [filterData , setFilterData] = useState({
    "totalTrains": 0,
    "goodHealth": 0,
    "highPriorityAlarm": 0,
    "lowPriorityAlarm": 0,
    "inService": 0,
    "notInService": 0
  });  
  const [totalTrains, setTotalTrains] = useState(filterData.totalTrains);
  const [cardSelected, setCardSelected] = useState("totalTrains"); 
  const leftPanel = props.left;
  const rightPanel = props.right;
  const graphOptions: { [key: string]: object } = {}


  const list = useSelector((state: RootState) => state.list);
  // console.log(list);
  useEffect(() => {
   
  if (list.fleetOverview && list.fleetOverview.data && list.fleetOverview.data.data){
    
    setTrainDataList(list.fleetOverview.data.data);
  
  }
  }, [list]);

 

  useEffect(() => {
var trainArray: any = [];
if(trainDataList.length){
  setFilterData({
    "totalTrains": 0,
    "goodHealth": 0,
    "highPriorityAlarm": 0,
    "lowPriorityAlarm": 0,
    "inService": 0,
    "notInService": 0
  });
  trainDataList.map((train:any) => {   
    var priority = '';
    if(train.priority){
       priority = train.priority;
    }
    else{
      priority = "Low";
    }
     var status = train.status;
    if(trainArray.indexOf(train.unit_number) == -1)  
    {   
       trainArray.push(train.unit_number);
       
       setFilterData(state=> {
         return {
           ...state,         
           totalTrains: state.totalTrains + 1
         }
       });
       setTotalTrains(totalTrains+1);
    
      if(status.includes('Out')){
        setFilterData(state=> {
          return {
            ...state,
            notInService : state.notInService +1,           
          }
        });
      }
      if(!status.includes('Out')){
           setFilterData(state=> {
          return {
            ...state,
            inService : state.inService +1,           
          }
        });
      }
    }

  if(train.standing_alarms == ""){
      setFilterData(state=> {
      return {
        ...state,
        goodHealth : state.goodHealth +1,           
      }
    });

  }
  if(train.priority == "High"){
    
      setFilterData(state=> { 
      return {
        ...state,
        highPriorityAlarm : state.highPriorityAlarm +1,           
      }
    });
  }
  // if(train.priority == "Low"){
    if(priority == "Low"){
       setFilterData(state=> {
      return {
        ...state,
        lowPriorityAlarm : state.lowPriorityAlarm +1,           
      }
    });
  }
  

  });
}
},[trainDataList])


  Object.entries(filterData).map(([key, value]) => {
    var color = '';
   
    var pecentage = (value / totalTrains) * 100;
    if (key === "totalTrains") { color = '#757575'; }
    else if (key === "goodHealth") { color = '#2E7D32'; }
    else if (key === "highPriorityAlarm") { color = '#C62828'; }
    else if (key === "lowPriorityAlarm") { color = '#FF8F00'; }
    else if (key === "inService") { color = '#0277BD'; }
    else if (key === "notInService") { color = '#9C27B0'; }
    
    //graph options creation for each filter card
    const options = {
      'chart': {
        'type': 'solidgauge',
        'backgroundColor': 'transparent',
        'height': '100',
        'width': '80',
        'color': '#757575'
      },
      'title': null,
      'tooltip': {
        'enabled': false
      },
      'pane': {
        'size': '47',
        'startAngle': 0,
        'endAngle': 360,
        'background': {
          'backgroundColor': '#757575',
          'innerRadius': '90%',
          'outerRadius': '100%',
          'borderWidth': 0
        }
      },
      'yAxis': {
        'min': 0,
        'max': 100,
        'labels': {
          'enabled': false
        },
        'lineWidth': 0,
        'minorTickInterval': null,
        'tickPixelInterval': 100,
        'tickWidth': 0
      },
      'plotOptions': {
        'solidgauge': {
          'innerRadius': '90%'
        }
      },
      'series': [{
        'name': 'Speed',
        'data': [
          {
            color: color,
            y: pecentage
          }],
        'dataLabels': {
          'enabled': false
        }
      }]
    };
 
    graphOptions[key] = options;

  });
 

   
 const filterClickHandle = (val:any)=>{
  //  alert(val);
  setCardSelected(val);
  props.parentCallback(val);
 }
  
  return (
    // filters section starts
    <section className="ms-Grid filterDiv">
      <div className="ms-Grid-row filterCradRow">
        <div className={"ms-Grid-col ms-lg6 ms-md6  fleet-card " 
        +(!leftPanel && !rightPanel ? "ms-xl6  ms-xxl6 ms-xxxl4" : "")  + (leftPanel && rightPanel ? "ms-xl4 ms-xxl4 ms-xxxl2" : "") +
        (!leftPanel && rightPanel ? "ms-xl4  ms-xxl4 ms-xxxl3 " : "") + (leftPanel && !rightPanel ? " ms-xl4 ms-xxl4 ms-xxxl3" : "")} 
        onClick={() => filterClickHandle("totalTrains")}>           
          <div className="ms-Grid-row ">
          <div className={`filterCard ms-Grid-col ms-xl12 xxl12 xxx12 ${cardSelected === 'totalTrains' ? "activeCard" : ""} `}>
            <div className="progressBar ms-Grid-col ms-lg4 ms-md4 ms-xl4 xxl4 xxxl4">
              <HighchartsReact highcharts={Highcharts} options={graphOptions.totalTrains} />
              <div className="trainImage">  <TrainSvg color="#757575" /></div>
            </div>
            <div className=" ms-Grid-col ms-lg10 ms-md10 ms-xl10 xxl10 xxxl10 ugl-font14 ugl-fontweight500 ugl-lineheight20 description">Total Units</div>
            <div className=" ms-Grid-col ms-xl2 xxl2 xxxl2 ugl-fontweight400 ugl-lineheight24 count ugl-font36">{filterData.totalTrains}</div>
            <div className={"arrowMark " + (cardSelected !== 'totalTrains' ? "hidden" : "")} ><Arrow /></div>
          </div>
          </div>
        </div>


        <div className={"ms-Grid-col ms-lg6 ms-md6  fleet-card " 
             +(!leftPanel && !rightPanel ? "ms-xl6 ms-xxl6 ms-xxxl4" : "")  + (leftPanel && rightPanel ? "ms-xl4   ms-xxl4 ms-xxxl2" : "") +
             (!leftPanel && rightPanel ? "ms-xl4 ms-xxl4 ms-xxxl3" : "") + (leftPanel && !rightPanel ? "ms-xl4  ms-xxl4 ms-xxxl3" : "")} 
               onClick={() => filterClickHandle("inService")}>
        <div className="ms-Grid-row">
          <div className={"filterCard ms-Grid-col ms-xl12 ms-xxl12 ms-xxxl12 " + (cardSelected === 'inService' ? "activeCard" : "")}>
            <div className="progressBar ms-Grid-col ms-lg4 ms-md4 ms-xl4 xxl4 xxxl4">
            <HighchartsReact highcharts={Highcharts} options={graphOptions.inService} />
            <div className="trainImage"><TrainSvg color="#0277BD" /></div>
          </div>
            <div className="description ugl-font14 ugl-fontweight500 ugl-lineheight20 ms-Grid-col ms-xl10 ms-xxl10 ms-xxxl10">Units in Operation</div>
            <div className="count ugl-font36 ugl-fontweight400 ugl-lineheight24 ms-Grid-col ms-xl2 ms-xxl2 ms-xxxl2">{filterData.inService}</div>          
          <div className={"arrowMark " + (cardSelected !== 'inService' ? "hidden" : "")}><Arrow /></div>
        </div>
        </div>
        </div>
      
        <div className={"ms-Grid-col ms-lg6 ms-md6 fleet-card " 
            +(!leftPanel && !rightPanel ? "ms-xl6 ms-xxl6 ms-xxxl4" : "")  + (leftPanel && rightPanel ? "ms-xl4   ms-xxl4 ms-xxxl2" : "") +
            (!leftPanel && rightPanel ? "ms-xl4 ms-xxl4 ms-xxxl3" : "") + (leftPanel && !rightPanel ? "ms-xl4  ms-xxl4 ms-xxxl3" : "")} 
                onClick={() => filterClickHandle("notInService")}>
        <div className="ms-Grid-row">
          <div className={"filterCard ms-Grid-col ms-xl12 ms-xxl12 ms-xxxl12 "  + (cardSelected === 'notInService' ? "activeCard" : "")}>
            <div className="progressBar ms-Grid-col ms-lg4 ms-md4 ms-xl4 xxl4 xxxl4">
            <HighchartsReact highcharts={Highcharts} options={graphOptions.notInService} />
            <div className="trainImage"><TrainSvg color="#9C27B0" /></div>
          </div>
            <div className="description ugl-font14 ugl-fontweight500 ugl-lineheight20 ms-Grid-col ms-xl10 ms-xxxl10 ms-xxl10 ">Units in Maintenance</div>
            <div className="count ugl-font36 ugl-fontweight400 ugl-lineheight24 ms-Grid-col ms-xl2 ms-xxl2 ms-xxxl2">{filterData.notInService}</div>
          
          <div className={"arrowMark " + (cardSelected !== 'notInService' ? "hidden" : "")}><Arrow /></div>
        </div>
        </div>
        </div>

       
        
        <div className={"ms-Grid-col ms-lg6 ms-md6 fleet-card " 
      +(!leftPanel && !rightPanel ? "ms-xl6 ms-xxl6 ms-xxxl4" : "")  + (leftPanel && rightPanel ? "ms-xl4   ms-xxl4 ms-xxxl2" : "") +
      (!leftPanel && rightPanel ? "ms-xl4 ms-xxl4 ms-xxxl3" : "") + (leftPanel && !rightPanel ? "ms-xl4  ms-xxl4 ms-xxxl3" : "")} 
      onClick={() => filterClickHandle("highPriorityAlarm")}>
        <div className="ms-Grid-row">
          <div className={"filterCard ms-Grid-col ms-xl12 xxl12 xxxl12 " + (cardSelected === 'highPriorityAlarm' ? "activeCard" : "")}>
            <div className="progressBar ms-Grid-col ms-lg4 ms-md4 ms-xl4 xxl4 xxxl4">
            <HighchartsReact highcharts={Highcharts} options={graphOptions.highPriorityAlarm} />
            <div className="trainImage"><TrainSvg color="#C62828" /></div>
          </div>
            <div className="description ugl-font14 ugl-fontweight500 ugl-lineheight20 ms-Grid-col ms-xl10 ms-xxl10 ms-xxxl10">Units with High Priority Alarm</div>
            <div className="count ugl-fontweight400 ugl-lineheight24 ugl-font36 ms-Grid-col ms-xl2 ms-xxl2 ms-xxxl2">{filterData.highPriorityAlarm}</div>          
          <div className={"arrowMark " + (cardSelected !== 'highPriorityAlarm' ? "hidden" : "")}><Arrow /></div>
        </div>
        </div>
        </div>

        <div className={"ms-Grid-col ms-lg6 ms-md6  fleet-card " 
      +(!leftPanel && !rightPanel ? "ms-xl6  ms-xxl6 ms-xxxl4" : "")  + (leftPanel && rightPanel ? "ms-xl4  ms-xxl4 ms-xxxl2" : "") +
      (!leftPanel && rightPanel ? " ms-xl4 ms-xxl4 ms-xxxl6" : "") + (leftPanel && !rightPanel ? " ms-xl4 ms-xxl4 ms-xxxl6" : "")} 
       onClick={() => filterClickHandle("lowPriorityAlarm")}>
        <div className="ms-Grid-row">
          <div className={"filterCard ms-Grid-col ms-xl12 ms-xxl12 ms-xxxl12 " + (cardSelected === 'lowPriorityAlarm' ? "activeCard" : "")}>
            <div className="progressBar ms-Grid-col ms-lg4 ms-md4 ms-xl4 xxl4 xxxl4">
            <HighchartsReact highcharts={Highcharts} options={graphOptions.lowPriorityAlarm} />
            <div className="trainImage"><TrainSvg color="#FF8F00" /></div>
          </div>
            <div className="description ugl-font14 ugl-fontweight500 ugl-lineheight20 ms-Grid-col ms-xl10 ms-xxl10 ms-xxl10">Units with Low Priority Alarm</div>
            <div className="count ugl-font36 ugl-fontweight400 ugl-lineheight24 ms-Grid-col ms-xl2 ms-xxl2 ms-xxxl2">{filterData.lowPriorityAlarm}</div>          
          <div className={"arrowMark " + (cardSelected !== 'lowPriorityAlarm' ? "hidden" : "")}><Arrow /></div>
        </div>
        </div>
        </div>

        <div className={"ms-Grid-col ms-lg6  ms-md6 fleet-card " 
        +(!leftPanel && !rightPanel ? "ms-xl6  ms-xxl6 ms-xxxl4" : "")  + (leftPanel && rightPanel ? "ms-xl4  ms-xxl4 ms-xxxl2" : "") +
        (!leftPanel && rightPanel ? " ms-xl4 ms-xxl4 ms-xxxl6" : "") + (leftPanel && !rightPanel ? " ms-xl4 ms-xxl4 ms-xxxl6" : "")} 
           onClick={() => filterClickHandle("goodHealth")}>
        <div className="ms-Grid-row">
          <div className={"filterCard ms-Grid-col ms-xl12 xxl12 xxxl12 " + (cardSelected === 'goodHealth' ? "activeCard" : "")}>
            <div className="progressBar ms-Grid-col ms-lg4 ms-md4 ms-xl4 xxl4 xxxl4">
            <HighchartsReact highcharts={Highcharts} options={graphOptions.goodHealth} />
            <div className="trainImage"><TrainSvg color="#2E7D32" /></div>
          </div>
            <div className="description ugl-font14 ugl-fontweight500 ugl-lineheight20 ms-Grid-col ms-xl10 ms-xxl10 xxxl10">Units with Good Health</div>
            <div className="count ugl-fontweight400 ugl-lineheight24 ugl-font36 ms-Grid-col ms-xl2 ms-xxl2 ms-xxxl2">{filterData.goodHealth}</div>          
          <div className={"arrowMark " + (cardSelected !== 'goodHealth' ? "hidden" : "")}><Arrow /></div>
        </div>
        </div>
        </div>
      </div>
    </section>
  // filters section ends
  )
}

export default Filters;