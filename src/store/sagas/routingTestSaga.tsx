import { all, call, put, takeLatest, take } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { ApiKey } from "@esri/arcgis-rest-auth";
import { request } from "@esri/arcgis-rest-request";
import {
  ROUTING_TEST_REQUEST,
  ROUTING_TEST_SUCCESS,
} from "../actions/routingTestActions";

const getRoutingData: any = () => {
   
  const orders = {
    type: "features",
    features: [
      {
        attributes: { Name: "Father's Office", ServiceTime: 10 },
        geometry: { x: -118.498406, y: 34.029445 },
      },
      {
        attributes: { Name: "R+D Kitchen", ServiceTime: 10 },
        geometry: { x: -118.495788, y: 34.032339 },
      },
      {
        attributes: { Name: "Pono Burger", ServiceTime: 10 },
        geometry: { x: -118.489469, y: 34.019 },
      },
      {
        attributes: {
          Name: "Il Ristorante di Giorgio Baldi",
          ServiceTime: 10,
        },
        geometry: { x: -118.518787, y: 34.028508 },
      },
      {
        attributes: { Name: "Milo + Olive", ServiceTime: 10 },
        geometry: { x: -118.476026, y: 34.037572 },
      },
      {
        attributes: { Name: "Dialogue", ServiceTime: 10 },
        geometry: { x: -118.495814, y: 34.017042 },
      },
    ],
  };

  const depots = {
    type: "features",
    features: [
      {
        attributes: { Name: "Bay Cities Kitchens and Appliances" },
        geometry: { x: -118.46963, y: 34.037555 },
      },
    ],
  };

  const routes = {
    features: [
      {
        attributes: {
          Name: "Route 1",
          Description: "vehicle 1",
          StartDepotName: "Bay Cities Kitchens and Appliances",
          EndDepotName: "Bay Cities Kitchens and Appliances",
          Capacities: "4",
          MaxOrderCount: 3,
          MaxTotalTime: 60,
        },
      },
      {
        attributes: {
          Name: "Route 2",
          Description: "vehicle 2",
          StartDepotName: "Bay Cities Kitchens and Appliances",
          EndDepotName: "Bay Cities Kitchens and Appliances",
          Capacities: "4",
          MaxOrderCount: 3,
          MaxTotalTime: 60,
        },
      },
    ],
  };
  const authentication = new ApiKey({
    key: "AAPK28a87d24185d49429c447d2c2905dda0zWSVFxE9Z6TyJmNGTyfjLTGfYVEE9fhGx-nMqN6r7chrRvVbSe1xmdeNZ78UrEUH",
  });
  const url =
    "https://logistics.arcgis.com/arcgis/rest/services/World/VehicleRoutingProblemSync/GPServer/EditVehicleRoutingProblem/execute";

  request(url, {
    params: {
      f: "json",
      orders: JSON.stringify(orders),
      depots: JSON.stringify(depots),
      routes: JSON.stringify(routes),
      populate_directions: true,
      "env:outSR": "102100",
    },
    authentication: authentication,
  }).then((response) => {
    console.log(response);
  });
};

function* fetchRouting() {
    //const action: any[]  = yield take(ROUTING_TEST_REQUEST);
    //console.log(action)     
  try {
    const routing: any[] = yield call(getRoutingData);

    // console.log(routing)     
    //console.log(routing);
    /*routing.then((response) => {
        console.log(response);
      });*/
  } catch ({ message }) {
    console.log(message);
  }
}
export default function* watchRoutingData() {
  yield all([takeLatest(ROUTING_TEST_REQUEST, fetchRouting)]);
}
