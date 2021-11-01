import { Component, useEffect, useState } from "react";
import { loadModules } from "esri-loader";
import { ReactComponent as MapExpand } from "../../../assets/img/Fleetoverview/Fullscreen.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../list/types";

const options = {
  url: "https://js.arcgis.com/4.7/",
};
const expand = false;
interface Props {
  changeState: () => void;
  trainNumber: any;
  details: any[];
}

//MapComponent class starts
const MapComponent = (props: any) => {
  let dataArr: any[] = [];
  let view1: any;
  //  const [dataArr , setDataArr]:any = useState([]);

  let map: any;

  const trainNo = props.trainNumber;
  const [expand, setExpand] = useState(false);
  const [mapHeight, setMapHeight] = useState(31.48148);
  const [divHeight, setDivHeight] = useState(34.25925);
  const [trainData, setTrainData] = useState([]);

  const list = useSelector((state: any) => state.unitOverView);

  useEffect(() => {
    if (list.UnitsList.value.data) {
      setTrainData(list.UnitsList.value.data);
    }
  }, [list]);

  useEffect(() => {
    var arr: any = [];

    if (props.filter == "totalTrains") {
      setTrainData(props.details);
    } else if (props.filter == "inService") {
      list.UnitsList.value.data.map((item: any) => {
        if (item.status == "IN SERVICE") {
          arr.push(item);
        }
      });
      setTrainData(arr);
    } else if (props.filter == "notInService") {
      list.UnitsList.value.data.map((item: any) => {
        if (item.status != "IN SERVICE") {
          arr.push(item);
        }
      });
      setTrainData(arr);
    } else if (props.filter == "goodHealth") {
      list.UnitsList.value.data.map((item: any) => {
        if (item.standing_alarms == "" || item.standing_alarms == "0") {
          arr.push(item);
        }
      });
      setTrainData(arr);
    } else if (props.filter == "highPriorityAlarm") {
      list.UnitsList.value.data.map((item: any) => {
        if (item.priority == "High") {
          arr.push(item);
        }
      });
      setTrainData(arr);
    } else if (props.filter == "lowPriorityAlarm") {
      list.UnitsList.value.data.map((item: any) => {
        // if (item.priority == "Low") {
        //   arr.push(item);
        // }
        arr.push(item);
      });
      setTrainData(arr);
    }
  }, [props.filter]);

  useEffect(() => {
    loadModules(
      [
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/GraphicsLayer",
        "esri/Graphic",
        "esri/geometry/Point",
        "esri/layers/FeatureLayer",
      ],
      options
    ).then(([Map, MapView, GraphicsLayer, Graphic, Point, FeatureLayer]) => {
      // Map options starts
      const map = new Map({ basemap: "dark-gray" });
      const view = new MapView({
        container: "viewDiv",
        map,
        zoom: 6,
        center: [150.842167, -34.02825],
      });

      view.constraints = { minZoom: 3, maxZoom: 20 };

      var markerSymbol = {
        type: "picture-marker",
        url: "https://cmsuipoc.azurewebsites.net/in-service-low.svg",
        width: "52px",
        height: "61px",
      };

      trainData.map((train: any) => {
        var lastUpdated = train.last_updated;
        var status = train.status;
        var priorityVal = "";
        if (train.priority) {
          priorityVal = train.priority;
        }
        var className = "customClassName";

        var lineAtt = {};
        let trainc = "";
        if (train.standing_alarms == "" && !status.includes("Out")) {
          markerSymbol.url =
            "https://cmsuipoc.azurewebsites.net/good-health.svg";
          markerSymbol.width = "52px";
          markerSymbol.height = "61px";
        } else if (
          train.standing_alarms != "" &&
          !lastUpdated.includes("*") &&
          !status.includes("Out") &&
          train.priority == "Low"
        ) {
          markerSymbol.url =
            "https://cmsuipoc.azurewebsites.net/in-service-low.svg";
          markerSymbol.width = "52px";
          markerSymbol.height = "61px";
        } else if (
          train.standing_alarms != "" &&
          !lastUpdated.includes("*") &&
          !status.includes("Out") &&
          train.priority == "High"
        ) {
          markerSymbol.url =
            "https://cmsuipoc.azurewebsites.net/in-service-high.svg";
          markerSymbol.width = "52px";
          markerSymbol.height = "61px";
        }

        if (status.includes("Out") && train.standing_alarms == "") {
          markerSymbol.url =
            "https://cmsuipoc.azurewebsites.net/not-in-service-good-health.svg";
          markerSymbol.width = "70px";
          markerSymbol.height = "70px";
        }
        if (status.includes("Out") && priorityVal.includes("High")) {
          // console.log(train.trainNo +'.hhhhh..'+ priorityVal);
          markerSymbol.url =
            "https://cmsuipoc.azurewebsites.net/not-in-service-high.svg";
          markerSymbol.width = "70px";
          markerSymbol.height = "70px";
        }

        if (lastUpdated.includes("*")) {
          className = "noCommunicationClass";
          markerSymbol.url = "https://cmsuipoc.azurewebsites.net/no-comm.svg";
          markerSymbol.width = "67px";
          markerSymbol.height = "67px";
        }

        trainc = train.train_number;
        lineAtt = {
          Name: train.train_number,
        };

        var point = {
          type: "point",
          longitude: 150.902861,
          latitude: -32.232556,
          title: train.train_number,
        };

        var pointGraphic = new Graphic({
          geometry: point,
          attributes: lineAtt,
          symbol: markerSymbol,
          popupTemplate: {
            name: trainc,
            content: function () {
              var div = document.createElement("div");
              div.className = className;
              div.innerHTML = trainc;
              return div;
            },
          },
        });
        dataArr.push(pointGraphic);
        // setDataArr(pointGraphic);
      });
      const graphicsLayer = new GraphicsLayer();
      map.add(graphicsLayer);
      view.graphics.addMany(dataArr);
      view1 = view;
      view.on("click", (eve: any) => {
        eve.stopPropagation();
      });
      view.on("pointer-move", (eve: any) => {
        view.hitTest(eve, dataArr).then(function (r: any) {
          if (r.results.length > 0 && r.results[0].graphic) {
            let graphic = r.results[0].graphic;
            view.graphics.add(graphic);
            view.popup.open({
              location: new Point(graphic.geometry.x, graphic.geometry.y),
              features: [graphic],
            });
          } else {
            view.popup.close();
          }
          view.popup.alignment = "bottom-right";
        });
      });
    });
  }, [trainData]);
  // componentDidMount method ends

  // componentWillReceiveProps(nextProps:any) {
  useEffect(() => {
    loadModules(["esri/geometry/Point"], options).then(([Point]) => {
      for (var i in dataArr) {
        if (dataArr[i].popupTemplate.name == trainNo) {
          let graphic = dataArr[i];
          view1.graphics.add(graphic);
          view1.popup.open({
            location: new Point(graphic.geometry.x, graphic.geometry.y),
            features: [graphic],
          });
        } else {
          //this.view1.popup.close();
        }
        view1.popup.alignment = "bottom-right";
      }
    });
  }, [props.trainNumber]);

  // onClick method starts
  const onClick = () => {
    props.changeState();
    setExpand(!expand);
    if (!expand) {
      setDivHeight(69.9);
      setMapHeight(67.38);
    } else {
      setDivHeight(34.25925);
      setMapHeight(31.48148);
    }
  };

  return (
    <section>
      <div className={"mapContainer"} style={{ height: `${divHeight}vh` }}>
        <h4 className="mapTitle ugl-font16 ugl-lineheight20 url-fontweight500">
          Live Tracking
        </h4>
        <div
          id="viewDiv"
          className={"viewDiv"}
          style={{ height: `${mapHeight}vh` }}
        ></div>
        <div
          className="mapExpandBtn"
          onClick={onClick}
          style={{
            position: "absolute",
            right: "30px",
            bottom: "27px",
            cursor: "pointer",
          }}
        >
          <MapExpand />
        </div>
      </div>
    </section>
  );
};
//MapComponent class ends
export default MapComponent;
