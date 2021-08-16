import React, { FC } from "react";
import { Route, Router, Switch } from "react-router-dom";
import CanvasPage from "./pageComponent/canvas/canvasPage";
import MainPage from "./pageComponent/MainPage";
import Recoil from "./pageComponent/recoilPage/RecoilPage";
import RxjsPage from "./pageComponent/Rxjs/RxjsPage";
import ZustandPage from "./pageComponent/zustandPage/ZustandPage";
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
                <Route exact path="/recoil" component={Recoil} />
                <Route exact path="/zustand" component={ZustandPage} />
                <Route exact path="/draw" component={CanvasPage} />
                <Route exact path="/rxjs" component={RxjsPage} />
              </Switch>
            </>
          )}
        />
      </Router>
    </SafeHydrate>
  );
};

export default App;
