import { useState, lazy, Suspense } from "react";
import {
  Header,
  LeftNav,
  MinimizedPanel,
  MinimizedAlaramPanel,
  classNames,
} from "./";

const MaximizedPanel: any = lazy(
  () =>
    import("../../components/panels/serviceNotificationPanel/MaximizedPanel")
);

const LandingPage = () => {
  const [servicePanel, setServicePanel] = useState(true);
  const {} = classNames;

  const servicePanelHandler = () => {
    setServicePanel((state) => !state);
  };

  return (
    <div>
      <Header />
      <LeftNav />
      {servicePanel ? (
        <MinimizedPanel servicePanelHandler={servicePanelHandler} />
      ) : (
        <Suspense fallback="">
          <MaximizedPanel servicePanelHandler={servicePanelHandler} />
        </Suspense>
      )}
      <MinimizedAlaramPanel />
    </div>
  );
};

export default LandingPage;
