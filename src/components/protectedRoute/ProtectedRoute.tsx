import { useState, lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import { fetchAlarmRequest } from "../../store/actions/alarmActions";

import {
  Header,
  LeftNav,
  MinimizedPanel,
  MinimizedAlaramPanel,
  classNames,
} from "./";

//  import CreateTicketPanel from "../panels/serviceNotificationPanel/CreateTicketPanel";
import CreateTicketPanel from "../panels/createServiceNotification";
import Description from "../panels/serviceNotificationPanel/NotificationDetails";

const MaximizedPanel: any = lazy(
  () => import("../panels/serviceNotificationPanel/MaximizedPanel")
);

const MaximizedAlaramPanel: any = lazy(
  () => import("../panels/alaramPanel/MaximizedAlaramPanel")
);

// const CreateTicketPanel: any = lazy(
//   () => import("../panels/serviceNotificationPanel/CreateTicketPanel")
// );

const ProtectedRoute = (props: any) => {
  const {
    wrapper,
    openLeft,
    closeLeft,
    openRight,
    closeRight,
    parent,
    wrapLeft,
    wrapRight,
  } = classNames;
  const [servicePanel, setServicePanel] = useState(true);
  const [alaramPanel, setAlaramPanel] = useState(true);
  const [detailsPanel, setDetailsPanel] = useState(true);
  const [createPanel, setCreatePanel] = useState(true);
  const [servicedata, setServicePaneldata] = useState(true);
  const [anim, setAnim]: any = useState();
  const [animAlaram, setAnimAlaram]: any = useState();
  const [left, setLeft] = useState(true);
  const [right, setRight] = useState(true);
  const { component: Component, ...rest } = props;
  let ndata: any;
  const dispatch = useDispatch();
  const servicePanelHandler = () => {
    const val = servicePanel ? openLeft : closeLeft;
    setAnim(val);
    if (servicePanel) {
      setAlaramPanel(true);
      setCreatePanel(true);
      setServicePaneldata(true);
      setLeft(false);
    }
    if (!servicePanel) {
      setServicePaneldata(true);
      setRight(true);
      setLeft(true);
    }
    setServicePanel((state) => !state);
  };

  useEffect(() => {
    dispatch(fetchAlarmRequest());
  }, [dispatch]);

  const alaramPanelHandler = () => {
    const val = alaramPanel ? openRight : closeRight;
    setAnimAlaram(val);
    if (alaramPanel) {
      setServicePanel(true);
      setCreatePanel(true);
      setServicePaneldata(true);
      setLeft(false);
      setRight(true);
    } else {
      setLeft(true);
    }
    setAlaramPanel((state) => !state);
  };
  const detailsPanelHandler = () => {
    setDetailsPanel((state) => !state);
  };

  const createPanelHandler = () => {
    if (createPanel) {
      setServicePanel(true);
      setAnimAlaram(true);
      setServicePaneldata(true);
      setAlaramPanel(true);
      setLeft(true);
      setRight(false);
    } else {
      setLeft(true);
      setRight(true);
    }

    setCreatePanel((state) => !state);
  };

  const createPanelcloseHandler = () => {
    if (!createPanel) {
      setServicePanel(false);
      setAnimAlaram(false);
      setServicePaneldata(true);
      setServicePanel(true);
      setLeft(true);
      setRight(true);
    }
    setCreatePanel((state) => !state);
  };

  const servicePaneldata = (itemdata: any) => {
    const val = servicedata ? openRight : closeLeft;

    ndata = itemdata;
    if (servicedata) {
      setRight(false);
      setLeft(false);
    } else {
      setRight(true);
      setLeft(false);
    }

    setServicePaneldata((state) => !state);
  };

  return (
    <>
      <section className="ms-Grid Layout" dir="ltr">
        <div className="ms-Grid-row">
          <Header createPanelHandler={createPanelHandler} />
        </div>

        <div className="ms-Grid-row layoutBody">
          <div className="ms-Grid-col ms-xl1 ms-xxl1 ms-xxxl1 panelOne ">
            <LeftNav />
          </div>
          {servicePanel ? (
            <div className="ms-Grid-col ms-xl1 ms-xxl1 ms-xxxl1  panelOne">
              <MinimizedPanel servicePanelHandler={servicePanelHandler} />
            </div>
          ) : (
            <div className={"ms-Grid-col ms-xl3 ms-xxl3 ms-xxxl3 panelThree "}>
              <Suspense fallback="">
                <MaximizedPanel
                  servicePanelHandler={servicePanelHandler}
                  servicePaneldata={servicePaneldata}
                />
              </Suspense>
            </div>
          )}

          {alaramPanel ? (
            <div className="ms-Grid-col ms-xl1 ms-xxl1 ms-xxxl1  panelOne">
              <MinimizedAlaramPanel alaramPanelHandler={alaramPanelHandler} />
            </div>
          ) : (
            <div className="ms-Grid-col ms-xl4 ms-xxl4 ms-xxxl4 panelFour ">
              <Suspense fallback="">
                <MaximizedAlaramPanel alaramPanelHandler={alaramPanelHandler} />
              </Suspense>
            </div>
          )}

          <div
            className={` main-element ms-Grid-col ${
              !alaramPanel ? "ms-xl6 ms-xxl6 ms-xxxl6 panelten " : ""
            } }${!servicedata ? "ms-xl5 ms-xxl5 ms-xxxl5 panelFive" : ""}
             ${
               !servicePanel && servicedata
                 ? "ms-xl8 ms-xxl8 ms-xxxl8 panelEight"
                 : ""
             } ${!createPanel ? "ms-xl6 ms-xxl6 ms-xxxl6 panelSix" : ""} ${
              alaramPanel && servicePanel && createPanel && servicedata
                ? "ms-xl9 ms-xxl9 ms-xxxl9 panelNine"
                : ""
            } `}
          >
            <div>
              <Route
                {...rest}
                render={(props) => (
                  <Component {...props} {...rest} left={left} right={right} />
                )}
              />
            </div>
          </div>

          <div
            className={
              "ms-Grid-col ms-xl3 ms-xxl3 ms-xxxl3  panelThree" +
              (createPanel ? " hidden" : "")
            }
          >
            <CreateTicketPanel
              createPanelcloseHandler={createPanelcloseHandler}
            />
          </div>
          <div
            className={
              "ms-Grid-col ms-xl3 ms-xxl3 ms-xxxl3  panelThree" +
              (servicedata ? " hidden" : "")
            }
          >
            <Description data={ndata} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProtectedRoute;
