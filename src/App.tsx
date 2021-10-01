import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from "@fluentui/react";
import { integraDark } from "./components/themes/theme";

import List from "./components/list/List";
import LandingPage from "./pages/LandingPage";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider applyTo="body" theme={integraDark}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
