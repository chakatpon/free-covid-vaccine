import React,
     { ReactElement,
       Suspense,
       lazy }             from "react";
import { Router,
         BrowserRouter,
         Route,
         Switch }         from "react-router-dom";
import { ThemeProvider }  from "@material-ui/core/styles";
import theme              from "../assets/theme";
import history            from "../utils/history";
import VaccineView        from '../views/vaccine/VaccineView';
// const HomeView = lazy(() => import("../views/home/Home"));

const IndexRouter: React.FC = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter history={history} basename="/vcare">
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path="/" exact component={VaccineView} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default IndexRouter;
