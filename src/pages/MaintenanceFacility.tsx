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

const MaintenanceFacility = () => {
  loadModules([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    "esri/widgets/ScaleBar",
    "esri/rest/geoprocessor",
    "esri/rest/support/FeatureSet",
    "esri/rest/support/JobInfo",
  ]).then(
    ([
      esriConfig,
      Map,
      MapView,
      Graphic,
      GraphicsLayer,
      ScaleBar,
      geoprocessor,
      FeatureSet,
      JobInfo,
    ]) => {
      esriConfig.apiKey =  "AAPKbc73279576b14d939cef85fc1858ae89XPwWFr7vij1r13OZBnh7WTQw7Zspe72BUY_q4TkPWFDQsNhH_YJjmtKuAIN5-t-7";
      const depot = {
        type: "point",
        x: -122.3943,
        y: 37.7967
      }

      const map = new Map({
        basemap: "arcgis-navigation"
      });

      const view = new MapView({
        container: "viewDiv",
        map,
        center: [-122.440545, 37.7625332], // Central San Francisco
        scale: 50000,
        constraints: {
          snapToZoom: false
        }
      });

      view.ui.add(new ScaleBar({ view }), "bottom-right");
      view.popup.actions = [];

      Promise.all([view.when(), getfleetRoutes()]).then(([_view, { directions, routes, stops }]) => {
        zoomToResults(directions);
        printRouteSummary(routes);
        showDirections(directions);
        showStops(stops);
        showDepot();
      });

      async function getfleetRoutes() {
        const orders = new FeatureSet({
          features: [
            new Graphic({
              geometry: {
                type: "point",
                x: -122.51,
                y: 37.7724
              },
              attributes: {
                DeliveryQuantities: 1706,
                Name: "Store 1",
                ServiceTime: 25,
                TimeWindowStart1: 1608051600000,
                TimeWindowEnd1: 1608080400000,
                MaxViolationTime1: 0
              }
            }),
            new Graphic({
              geometry: {
                type: "point",
                x: -122.4889,
                y: 37.7538
              },
              attributes: {
                DeliveryQuantities: 1533,
                Name: "Store 2",
                ServiceTime: 23,
                TimeWindowStart1: 1608051600000,
                TimeWindowEnd1: 1608080400000,
                MaxViolationTime1: 0
              }
            }),
            new Graphic({
              geometry: {
                type: "point",
                x: -122.4649,
                y: 37.7747
              },
              attributes: {
                DeliveryQuantities: 1580,
                Name: "Store 3",
                ServiceTime: 24,
                TimeWindowStart1: 1608051600000,
                TimeWindowEnd1: 1608080400000,
                MaxViolationTime1: 0
              }
            }),
            new Graphic({
              geometry: {
                type: "point",
                x: -122.4739,
                y: 37.7432
              },
              attributes: {
                DeliveryQuantities: 1289,
                Name: "Store 4",
                ServiceTime: 20,
                TimeWindowStart1: 1608051600000,
                TimeWindowEnd1: 1608080400000,
                MaxViolationTime1: 0
              }
            }),
            new Graphic({
              geometry: {
                type: "point",
                x: -122.4493,
                y: 37.7315
              },
              attributes: {
                DeliveryQuantities: 1302,
                Name: "Store 5",
                ServiceTime: 21,
                TimeWindowStart1: 1608051600000,
                TimeWindowEnd1: 1608080400000,
                MaxViolationTime1: 0
              }
            }),
            new Graphic({
              geometry: {
                type: "point",
                x: -122.4917,
                y: 37.6493
              },
              attributes: {
                DeliveryQuantities: 1775,
                Name: "Store 6",
                ServiceTime: 26,
                TimeWindowStart1: 1608051600000,
                TimeWindowEnd1: 1608080400000,
                MaxViolationTime1: 0
              }
            }),
            new Graphic({
              geometry: {
                type: "point",
                x: -122.4832,
                y: 37.7012
              },
              attributes: {
                DeliveryQuantities: 1014,
                Name: "Store 7",
                ServiceTime: 17,
                TimeWindowStart1: 1608051600000,
                TimeWindowEnd1: 1608080400000,
                MaxViolationTime1: 0
              }
            }),
            new Graphic({
              geometry: {
                type: "point",
                x: -122.5301,
                y: 37.8935
              },
              attributes: {
                DeliveryQuantities: 1761,
                Name: "Store 8",
                ServiceTime: 26,
                TimeWindowStart1: 1608051600000,
                TimeWindowEnd1: 1608080400000,
                MaxViolationTime1: 0
              }
            }),
            new Graphic({
              geometry: {
                type: "point",
                x: -122.2875,
                y: 37.8909
              },
              attributes: {
                DeliveryQuantities: 1815,
                Name: "Store 9",
                ServiceTime: 27,
                TimeWindowStart1: 1608051600000,
                TimeWindowEnd1: 1608080400000,
                MaxViolationTime1: 0
              }
            })
          ]
        });

        const depots = new FeatureSet({
          features: [
            new Graphic({
              geometry: depot,
              attributes: {
                Name: "San Francisco",
                TimeWindowStart1: 1608048000000,
                TimeWindowEnd1: 1608080400000
              }
            })
          ]
        });

        const routes = new FeatureSet({
          features: [
            new Graphic({
              attributes: {
                Name: "Truck 1",
                StartDepotName: "San Francisco",
                EndDepotName: "San Francisco",
                StartDepotServiceTime: 60,
                EarliestStartTime: 1608048000000,
                LatestStartTime: 1608048000000,
                Capacities: 15000,
                CostPerUnitTime: 0.2,
                CostPerUnitDistance: 1.5,
                MaxOrderCount: 3,
                MaxTotalTime: 360,
                MaxTotalTravelTime: 180,
                MaxTotalDistance: 100
              }
            }),
            new Graphic({
              attributes: {
                Name: "Truck 2",
                StartDepotName: "San Francisco",
                EndDepotName: "San Francisco",
                StartDepotServiceTime: 60,
                EarliestStartTime: 1608048000000,
                LatestStartTime: 1608048000000,
                Capacities: 15000,
                CostPerUnitTime: 0.2,
                CostPerUnitDistance: 1.5,
                MaxOrderCount: 3,
                MaxTotalTime: 360,
                MaxTotalTravelTime: 180,
                MaxTotalDistance: 100
              }
            }),
            new Graphic({
              attributes: {
                Name: "Truck 3",
                StartDepotName: "San Francisco",
                EndDepotName: "San Francisco",
                StartDepotServiceTime: 60,
                EarliestStartTime: 1608048000000,
                LatestStartTime: 1608048000000,
                Capacities: 15000,
                CostPerUnitTime: 0.2,
                CostPerUnitDistance: 1.5,
                MaxOrderCount: 3,
                MaxTotalTime: 360,
                MaxTotalTravelTime: 180,
                MaxTotalDistance: 100
              }
            })
          ]
        });

        const travel_mode = {
          attributeParameterValues: [
            {
              attributeName: "Use Preferred Truck Routes",
              parameterName: "Restriction Usage",
              value: "PREFER_HIGH"
            },
            {
              attributeName: "Avoid Unpaved Roads",
              parameterName: "Restriction Usage",
              value: "AVOID_HIGH"
            },
            {
              attributeName: "Avoid Private Roads",
              parameterName: "Restriction Usage",
              value: "AVOID_MEDIUM"
            },
            {
              attributeName: "Driving a Truck",
              parameterName: "Restriction Usage",
              value: "PROHIBITED"
            },
            {
              attributeName: "Roads Under Construction Prohibited",
              parameterName: "Restriction Usage",
              value: "PROHIBITED"
            },
            {
              attributeName: "Avoid Gates",
              parameterName: "Restriction Usage",
              value: "AVOID_MEDIUM"
            },
            {
              attributeName: "Avoid Express Lanes",
              parameterName: "Restriction Usage",
              value: "PROHIBITED"
            },
            {
              attributeName: "Avoid Carpool Roads",
              parameterName: "Restriction Usage",
              value: "PROHIBITED"
            },
            {
              attributeName: "Avoid Truck Restricted Roads",
              parameterName: "Restriction Usage",
              value: "AVOID_HIGH"
            },
            {
              attributeName: "TruckTravelTime",
              parameterName: "Vehicle Maximum Speed (km/h)",
              value: 0
            }
          ],
          description: "Models basic truck travel by preferring designated truck routes, and finds solutions that optimize travel time. Routes must obey one-way roads, avoid illegal turns, and so on. When you specify a start time, dynamic travel speeds based on traffic are used where it is available, up to the legal truck speed limit.",
          distanceAttributeName: "Kilometers",
          id: "ZzzRtYcPLjXFBKwr",
          impedanceAttributeName: "TruckTravelTime",
          name: "Trucking Time",
          restrictionAttributeNames: [
            "Avoid Carpool Roads",
            "Avoid Express Lanes",
            "Avoid Gates",
            "Avoid Private Roads",
            "Avoid Truck Restricted Roads",
            "Avoid Unpaved Roads",
            "Driving a Truck",
            "Roads Under Construction Prohibited",
            "Use Preferred Truck Routes"
          ],
          simplificationTolerance: 10,
          simplificationToleranceUnits: "esriMeters",
          timeAttributeName: "TruckTravelTime",
          type: "TRUCK",
          useHierarchy: true,
          uturnAtJunctions: "esriNFSBNoBacktrack"
        };

        const params = {
          depots,                      // The start and the return location for the vehicles.
          orders,                      // A list of locations to visit with attributes such as the order name or the time required to complete the delivery at each order.
          routes,                      // The characteristics and constraints for each vehicle.

          default_date: 1608051600000, // The date on which all of your routes start.
          directions_language: "en",
          distance_units: "Miles",
          populate_directions: true,  // "Generate driving directions for the routes"
          populate_route_lines: false,
          time_units: "Minutes",
          travel_mode
        };

        const url = "https://logistics.arcgis.com/arcgis/rest/services/World/VehicleRoutingProblem/GPServer/SolveVehicleRoutingProblem";

        const geoprocessingOptions = {
          outSpatialReference: view.spatialReference
        };

        const jobInfo = await geoprocessor.submitJob(url, params, geoprocessingOptions);

        const options = {
          statusCallback: (jobInfo:any) => {
            const timestamp = new Date().toLocaleTimeString();
            const message = jobInfo.messages[jobInfo.messages.length - 1];
            console.log(`${timestamp}: ${message.description}`);
          }
        };
        await jobInfo.waitForJobCompletion(options);

        const [directionsResult, routesResult, stopsResult] = await Promise.all([
          jobInfo.fetchResultData("out_directions"),
          jobInfo.fetchResultData("out_routes"),
          jobInfo.fetchResultData("out_stops")
        ]);

        return {
          directions: directionsResult.value.features,
          routes: routesResult.value.features,
          stops: stopsResult.value.features
        };
      }

      function zoomToResults(graphics:any) {
        const geometries = graphics
          .map((direction:any) => direction.geometry)
          .filter((geometry:any) => geometry)
        view.goTo(geometries);
      }

      function printRouteSummary(routes:any){
        const formatNumber = new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        });

        for (const route of routes) {
          const { Name, TotalDistance, TotalTime } = route.attributes;
          console.log(`
            Route:           ${Name}
            Travel Distance: ${formatNumber.format(TotalDistance)} miles
            Drive Time:      ${formatNumber.format(TotalTime)} minutes
          `);
        }
      }

      function getTruckColor(name:any) {
          switch (name) {
            case "Truck 1":
              return [50, 150, 50, 0.75];
            case "Truck 2":
              return [50, 150, 255, 0.75];
            case "Truck 3":
              return [180, 69, 255, 0.75];
          }
        }

      function showDirections(directions:any) {
        const graphics = directions
          .filter((direction:any) => direction.geometry)
          .map((direction:any) => {
            const { attributes, geometry } = direction;
            const { ArriveTime, RouteName, Text } = attributes;
            const time = new Date(ArriveTime).toLocaleTimeString();
            const color = getTruckColor(RouteName);
            return new Graphic({
              attributes,
              geometry,
              symbol: {
                type: "simple-line",
                color,
                width: "5px"
              },
              popupTemplate: {
                title: `${RouteName}`,
                content: `<b>${Text}</b><br>Arrive at: ${time}`
              }
            })
          });

        map.add(new GraphicsLayer({ graphics }));
      }

      function showStops(stops:any) {
        for (const stop of stops) {
          const { SnapY, SnapX, RouteName, Sequence } = stop.attributes;
          stop.set({
            geometry: {
              type: "point",
              latitude: SnapY,
              longitude: SnapX
            },
            symbol: {
              type: "simple-marker",
              color: "white",
              outline: {
                color: getTruckColor(RouteName),
                width: 1.5
              },
              size: "18px"
            },
            popupTemplate: {
              title: "{Name}",
              content: `${RouteName}<br>Stop: ${parseInt(Sequence) - 1}<br>Delivery Items: 1`
            }
          });
        }

        const labels = stops.map((stop:any) => stop.clone());
        for (const label of labels) {
          const { RouteName, Sequence } = label.attributes;
          label.set({
            symbol: {
              type: "text",
              text: Sequence - 1,
              font: { size: 9, weight: "normal" },
              yoffset: -3,
              color: "black" //getTruckColor(RouteName)
            },
            popupTemplate: null
          });
        }

        const graphics = stops.concat(labels);

        map.add(new GraphicsLayer({ graphics }));
      }

      function showDepot() {
        const graphics = [
          new Graphic({
            geometry: depot,
            symbol: {
              type: "simple-marker",
              style: "square",
              color: "white",
              outline: {
                color: "black",
                width: 1.5
              },
              size: "20px",

            }
          }),
          new Graphic({
            geometry: depot,
            symbol: {
              type: "text",
              text: "D",
              font: { size: 10, weight: "normal" },
              yoffset: -4,
              color: "black"
            }
          })
        ];
        map.add(new GraphicsLayer({ graphics }));
      }




        
    }
  );
  return (
    <div>
      <h3>Maintenance Facility</h3>
      <div id="viewDiv" className={classNames.viewDiv}></div>
    </div>
  );
};

export default MaintenanceFacility;
