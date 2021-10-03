import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from "@fluentui/react";
import { integraDark } from "./components/themes/theme";

import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import List from "./components/list/List";
import LandingPage from "./pages/landingPage/LandingPage";
import OtherPage from "./pages/landingPage/OtherPage";

import "./App.css";

const App = () => {
  return (
    <ThemeProvider applyTo="body" theme={integraDark}>
      <Router>
        <Switch>
          <ProtectedRoute exact path="/" component={LandingPage} />
          <ProtectedRoute exact path="/otherPage" component={OtherPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
