import React, { FC } from "react";
import { Route, Router, Switch } from "react-router-dom";
import MainPage from "./pageComponent/MainPage";
import useNavigate from "./utils/useNavigate";

const SafeHydrate: FC = ({ children }) => {
  return (
    <div suppressHydrationWarning>
      {typeof document === "undefined" ? null : children}
    </div>
  );
};

const App = () => {
  return (
    <SafeHydrate>
      <Router history={useNavigate!}>
        <Route
          render={() => (
            <>
              <Switch>
                <Route exact path="/" component={MainPage} />
              </Switch>
            </>
          )}
        />
      </Router>
    </SafeHydrate>
  );
};

export default App;
