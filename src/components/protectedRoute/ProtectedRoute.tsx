import { useState, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import {
  Header,
  LeftNav,
  MinimizedPanel,
  MinimizedAlaramPanel,
  MaximizedAlaramPanel,
  classNames,
} from "./";

const MaximizedPanel: any = lazy(
  () => import("../panels/serviceNotificationPanel/MaximizedPanel")
);

const ProtectedRoute = (props: any) => {
  const { wrapper, openLeft, closeLeft } = classNames;
  const [servicePanel, setServicePanel] = useState(true);
  const [alaramPanel, setAlaramPanel] = useState(true);
  const [anim, setAnim]: any = useState();
  const { component: Component, ...rest } = props;

  const servicePanelHandler = () => {
    setServicePanel((state) => !state);
    const val = servicePanel ? openLeft : closeLeft;
    setAnim(val);
  };

  const alaramPanelHandler = () => {
    setAlaramPanel((state) => !state);
    //const val = servicePanel ? openLeft : closeLeft;
    //setAnim(val);
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
      <div className={[wrapper, anim].join(" ")}>
        <Route
          {...rest}
          render={(props) => <Component {...props} {...rest} />}
        />
      </div>
      {alaramPanel ? (
        <MinimizedAlaramPanel alaramPanelHandler={alaramPanelHandler} />
      ) : (
        <MaximizedAlaramPanel alaramPanelHandler={alaramPanelHandler} />
      )}
    </>
  );
};

export default ProtectedRoute;
