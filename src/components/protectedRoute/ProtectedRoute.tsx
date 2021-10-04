import { useState, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import {
  Header,
  LeftNav,
  MinimizedPanel,
  MinimizedAlaramPanel,
  classNames,
} from "./";

const MaximizedPanel: any = lazy(
  () => import("../panels/serviceNotificationPanel/MaximizedPanel")
);

const MaximizedAlaramPanel: any = lazy(
  () => import("../panels/alaramPanel/MaximizedAlaramPanel")
);

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
  const [anim, setAnim]: any = useState();
  const [animAlaram, setAnimAlaram]: any = useState();
  const { component: Component, ...rest } = props;

  const servicePanelHandler = () => {
    const val = servicePanel ? openLeft : closeLeft;
    setAnim(val);
    setServicePanel((state) => !state);
  };

  const alaramPanelHandler = () => {
    const val = alaramPanel ? openRight : closeRight;
    setAnimAlaram(val);
    setAlaramPanel((state) => !state);
  };

  return (
    <>
      <Header />
      <LeftNav />
      {servicePanel ? (
        <MinimizedPanel servicePanelHandler={servicePanelHandler} />
      ) : (
        <Suspense fallback="">
          <MaximizedPanel servicePanelHandler={servicePanelHandler} />
        </Suspense>
      )}
      <div className={parent}>
        <div className={[wrapLeft, anim].join(" ")}></div>
        <div className={wrapper}>
          <Route
            {...rest}
            render={(props) => <Component {...props} {...rest} />}
          />
        </div>
        <div className={[wrapRight, animAlaram].join(" ")}></div>
      </div>
      {alaramPanel ? (
        <MinimizedAlaramPanel alaramPanelHandler={alaramPanelHandler} />
      ) : (
        <Suspense fallback="">
          <MaximizedAlaramPanel alaramPanelHandler={alaramPanelHandler} />
        </Suspense>
      )}
    </>
  );
};

export default ProtectedRoute;
