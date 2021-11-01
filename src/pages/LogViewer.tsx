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

export const classNames = mergeStyleSets({
  viewDiv: {
    padding: 0,
    height: "500px",
    width: "100%",
    margin: "auto",
  },
});

const LogerView = (props: any) => {
  loadModules([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/rest/route",
    "esri/rest/support/RouteParameters",
    "esri/rest/support/FeatureSet",
  ])
    .then(
      ([
        esriConfig,
        Map,
        MapView,
        Graphic,
        route,
        RouteParameters,
        FeatureSet,
      ]) => {
        esriConfig.apiKey =
          "AAPKbc73279576b14d939cef85fc1858ae89XPwWFr7vij1r13OZBnh7WTQw7Zspe72BUY_q4TkPWFDQsNhH_YJjmtKuAIN5-t-7";

        const map = new Map({
          basemap: "arcgis-navigation", //Basemap layer service
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-118.24532, 34.05398], //Longitude, latitude
          zoom: 12,
        });
        const routeUrl =
          "https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World";

        view.on("click", function (event: any) {
          if (view.graphics.length === 0) {
            addGraphic("origin", event.mapPoint);
          } else if (view.graphics.length === 1) {
            addGraphic("destination", event.mapPoint);
            getRoute();
          } else {
            view.graphics.removeAll();
            addGraphic("origin", event.mapPoint);
          }
        });

        function addGraphic(type: any, point: any) {
          const graphic = new Graphic({
            symbol: {
              type: "simple-marker",
              color: type === "origin" ? "white" : "black",
              size: "8px",
            },
            geometry: point,
          });
          view.graphics.add(graphic);
        }
        function getRoute() {
          console.log(view.graphics.toArray())
          const routeParams = new RouteParameters({
            stops: new FeatureSet({
              features: view.graphics.toArray(),
            }),
            returnDirections: true,
          });
          route.solve(routeUrl, routeParams).then(function (data: any) {
            data.routeResults.forEach(function (result: any) {
              result.route.symbol = {
                type: "simple-line",
                color: [5, 150, 255],
                width: 3,
              };
              view.graphics.add(result.route);
            });
            
            if (data.routeResults.length > 0) {
              const directions = document.createElement("ol");
             // directions.classList ="esri-widget esri-widget--panel esri-directions__scroller";
              directions.style.marginTop = "0";
              directions.style.padding = "15px 15px 15px 30px";
              const features = data.routeResults[0].directions.features;
          
              // Show each direction
              features.forEach(function (result: any, i: any) {
                const direction = document.createElement("li");
                direction.innerHTML =
                  result.attributes.text +
                  " (" +
                  result.attributes.length.toFixed(2) +
                  " miles)";
                directions.appendChild(direction);
              });
              view.ui.empty("top-right");
              view.ui.add(directions, "top-right");
            }
          });
        }
        let key:any = document.querySelector("ol");
        key.classList.add("esri-widget esri-widget--panel esri-directions__scroller");
      }
    )
    .catch((err) => {
      // handle any errors
      console.error(err);
    });

  return (
    <div>
      <h3>Loger View</h3>
      <div id="viewDiv" className={classNames.viewDiv}></div>
    </div>
  );
};

export default LogerView;
