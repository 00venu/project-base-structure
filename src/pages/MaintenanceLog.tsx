import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadModules } from "esri-loader";
import esriConfig from "@arcgis/core/config.js";
import { fetchRoutingRequest } from "../store/actions/routingTestActions";
import { mergeStyleSets } from "@fluentui/react/lib/Styling";
import { WebMap, WebScene, Map } from "@esri/react-arcgis";
import { ApiKey } from "@esri/arcgis-rest-auth";
import { request } from "@esri/arcgis-rest-request";
import { solveRoute } from "@esri/arcgis-rest-routing";
import Directions from "@arcgis/core/widgets/Directions";

export const classNames = mergeStyleSets({
  viewDiv: {
    padding: 0,
    height: "500px",
    width: "100%",
    margin: "auto",
  },
});

const MaintenanceLog = (props: any) => {
  loadModules([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Directions",
    "esri/config",
  ])
    .then(([Map, MapView, Directions, esriConfig]) => {
      esriConfig.apiKey = "AAPKbc73279576b14d939cef85fc1858ae89XPwWFr7vij1r13OZBnh7WTQw7Zspe72BUY_q4TkPWFDQsNhH_YJjmtKuAIN5-t-7";

      const map = new Map({
        basemap: "arcgis-topographic"
      });

      const view = new MapView({
        zoom: 14,
        center: [-118.24, 34.05],
        container: "viewDiv",
        map: map
      });

      let directionsWidget = new Directions({
        view: view
      });

      // Add the Directions widget to the top right corner of the view
      view.ui.add(directionsWidget, {
        position: "top-right"
      });
    })
    .catch((err) => {
      // handle any errors
      console.error(err);
    });

  return (
    <div>
      <h3>Maintenance Log</h3>
      <div id="viewDiv" className={classNames.viewDiv}></div>
    </div>
  );
};

export default MaintenanceLog;
