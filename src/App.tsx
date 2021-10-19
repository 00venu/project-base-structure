import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from "@fluentui/react";
import { integraDark } from "./themes/theme";

import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import List from "./components/list/List";
import LandingPage from "./pages/landingPage/LandingPage";
import UnitOverview from "./pages/UnitOverview";
import AlarmOverview from "./pages/AlarmOverview";
import MaintenanceLog from "./pages/MaintenanceLog";
import MaintenanceFacility from "./pages/MaintenanceFacility";
import CustomLogicBuilder from "./pages/CustomLogicBuilder";
import Simulator from "./pages/Simulator";
import LiveProcessViewer from "./pages/LiveProcessViewer";
import HistoricalProcessViewer from "./pages/HistoricalProcessViewer";
import DefectInvestigation from "./pages/DefectInvestigation";
import Diagnostics from "./pages/Diagnostics";
import LogViewer from "./pages/LogViewer";
import ConditionReports from "./pages/ConditionReports/ConditionReports";

import "./App.css";
const App = () => {
  return (
    <ThemeProvider applyTo="body" theme={integraDark}>
      <Router>
        <Switch>
          <ProtectedRoute exact path="/" component={LandingPage} />
          <ProtectedRoute exact path="/UnitOverview" component={UnitOverview} />
          <ProtectedRoute exact path="/AlarmOverview" component={AlarmOverview} />
          <ProtectedRoute exact path="/MaintenanceLog" component={MaintenanceLog} />
          <ProtectedRoute exact path="/LogViewer" component={LogViewer} />
          <ProtectedRoute exact path="/Diagnostics" component={Diagnostics} />
          <ProtectedRoute exact path="/DefectInvestigation" component={ConditionReports} />
          <ProtectedRoute exact path="/test11" component={ConditionReports} />
        
          <ProtectedRoute exact path="/HistoricalProcessViewer" component={HistoricalProcessViewer} />
          <ProtectedRoute exact path="/LiveProcessViewer" component={LiveProcessViewer} />
          <ProtectedRoute exact path="/Simulator" component={Simulator} />
          <ProtectedRoute exact path="/MaintenanceFacility" component={MaintenanceFacility} />
          <ProtectedRoute exact path="/CustomLogicBuilder" component={CustomLogicBuilder} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
