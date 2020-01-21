import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import MainPage from "./containers/MainPage/MainPage";
import ShowPage from "./containers/ShowPage/ShowPage";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/shows/:id' exact component={ShowPage} />
          <Route render={() => <h2>NOT FOUND</h2>} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;